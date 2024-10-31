const TelegramBot = require('node-telegram-bot-api');
const data = require('./data');
const utils = require('./utils');

const bot = new TelegramBot('6845871310:AAHAwygY9DiSDCWceyJ2lvrurdmpBgKQs14', { polling: true });

let skinAnswers = [];
let skinUndertone = '';
let eyeTone = '';
// let eyeSubTone = '';
let skinTone = '';
// let skinSubTone = '';
let hairTone = '';
// let hairSubTone = '';

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  skinAnswers = [];
  skinUndertone = '';
  eyeTone = '';
  eyeSubTone = '';
  setTimeout(() => {
    bot.sendMessage(chatId, 'Привет! Давай определим твой цветотип.')
  }, 150);
  setTimeout(() => {
    bot.sendMessage(chatId, 'Сначала определим тон твоей кожи.')
  }, 300);
});

bot.on('message', async msg => {

  const chatId = msg.chat.id;
  //Here is algorythm to determine skin UNDERTONE
  if (skinAnswers.length < data.skinUndertoneQuestions.length) {
    if (msg.text !== '/start') {
      skinAnswers.push(msg.text);
    }

    const counter = skinAnswers.length;
    if (counter < data.skinUndertoneQuestions.length) {
      setTimeout(() => {
        bot.sendPhoto(chatId, data.skinUndertoneQuestions[counter].image, {
          caption: data.skinUndertoneQuestions[counter].question,
          reply_markup: {
            keyboard: data.skinUndertoneQuestions[counter].answers,
            resize_keyboard: true,
            one_time_keyboard: true
          }
        });
      }, 500);
    } else {
      skinUndertone = utils.skinAnalyse(skinAnswers, data.skinUndertoneQuestions);
      bot.sendMessage(chatId, `Похоже, что у тебя ${skinUndertone} подтон кожи.`);
    }
  }

  //Here is algorythm to determine EYE MAIN TONE and UNDERTONE
  if (skinAnswers.length === data.skinUndertoneQuestions.length) {
    //MAIN TONE
    if (data.eyeTone.some((el) => el.caption === msg.text) && eyeTone === '') {
      eyeTone = msg.text;
    }

    if (eyeTone === '') {
      setTimeout(() => {
        bot.sendMessage(chatId, 'К какому типу ты бы отнесла цвет своих глаз?', {
          reply_markup: {
            keyboard: utils.createMainToneKeys(data.eyeTone),
            resize_keyboard: true,
            one_time_keyboard: true
          }
        })
      }, 150)

      setTimeout(() => {
        bot.sendMediaGroup(chatId, data.eyeTone)
      }, 300);
    }
    // else {
    //   //UNDERTONE
    //   if (eyeTone === 'Черный' && eyeSubTone === '') {
    //     eyeSubTone = eyeTone;
    //   }

    //   if (eyeSubTone === '' && data.eyeSubTone[eyeTone].some((el) => el.caption === msg.text)) {
    //     eyeSubTone = msg.text;
    //   }

    //   if (eyeTone !== '' && eyeSubTone === '') {
    //     setTimeout(() => {
    //       bot.sendMessage(chatId, `Ага, понял, основной цвет - ${eyeTone}. А какой оттенок?`, {
    //         reply_markup: {
    //           keyboard: utils.createSubToneKeys(data.eyeSubTone, eyeTone),
    //           resize_keyboard: true,
    //           one_time_keyboard: true
    //         }
    //       })
    //     }, 150)

    //     setTimeout(() => {
    //       bot.sendMediaGroup(chatId, data.eyeSubTone[eyeTone])
    //     }, 300);
    //   }
    // }
  }

  //Here is algorythm to determine SKIN MAIN TONE AND UNDERTONE
  if (eyeTone !== '') {
    //SKIN MAIN TONE
    if (data.skinTone.options.some((el) => el[0] === msg.text)) {
      skinTone = msg.text;
    }
    if (skinTone === '') {
      setTimeout(() => {
        bot.sendPhoto(chatId, data.skinTone.image, {
          caption: data.skinTone.caption,
          reply_markup: {
            keyboard: data.skinTone.options,
            resize_keyboard: true,
            one_time_keyboard: true
          }
        });
      }, 150);
    }
    // else {
    //   //SKIN UNDERTONE
    //   if (data.skinSubTone.options.some((el) => el[0] === msg.text)) {
    //     skinSubTone = msg.text;
    //   }
    //   if (skinSubTone === '') {
    //     setTimeout(() => {
    //       bot.sendPhoto(chatId, data.skinSubTone.tones[skinTone].image, {
    //         caption: `Так, основной цвет - ${skinTone}, а какой оттенок?`,
    //         reply_markup: {
    //           keyboard: data.skinSubTone.options,
    //           resize_keyboard: true,
    //           one_time_keyboard: true
    //         }
    //       });
    //     }, 150);
    //   }
    // }
  }

  //Here is algorythm to determine HAIR MAIN TONE AND UNDERTONE
  if (skinTone !== '') {

    if (data.hairTone.options.some((el) => el[0] === msg.text)) {
      hairTone = msg.text;
    }

    if (hairTone === '') {
      setTimeout(() => {
        bot.sendMessage(chatId, 'Мы почти закончили, осталась пара вопросов')
      }, 150);

      setTimeout(() => {
        bot.sendPhoto(chatId, data.hairTone.image, {
          caption: data.hairTone.caption,
          reply_markup: {
            keyboard: data.hairTone.options,
            resize_keyboard: true,
            one_time_keyboard: true
          }
        });
      }, 250);
    }
    // else {

    //   if (data.hairSubTone[hairTone].some((el) => el.caption === msg.text)) {
    //     hairSubTone = msg.text;
    //   }

    //   if (hairSubTone === '') {
    //     setTimeout(() => {
    //       bot.sendMessage(chatId, `Ага, понял, основной цвет - ${hairTone}. А какой оттенок?`, {
    //         reply_markup: {
    //           keyboard: utils.createSubToneKeys(data.hairSubTone, hairTone),
    //           resize_keyboard: true,
    //           one_time_keyboard: true
    //         }
    //       })
    //     }, 150)

    //     setTimeout(() => {
    //       bot.sendMediaGroup(chatId, data.hairSubTone[hairTone])
    //     }, 300);
    //   }
    // }
  }

  if (hairTone !== '') {
    let isContrast = data.determineContrast(eyeTone, skinTone, hairTone);
    let season = utils.determineSeasonByLifehacker(skinUndertone, isContrast)
    setTimeout(() => {
      console.log(`
        глаза: ${eyeTone}
        кожа: ${skinTone}
        волосы: ${hairTone}
        `)
      bot.sendMessage(chatId, `Итак можно сказать что что цветовая палитра достаточно ${isContrast === true ? 'контрастная' : 'приглушенная'}`)
      bot.sendMessage(chatId, `В соответствии с логикой ЛайфХакер ты - ${season}`)
      bot.sendMessage(chatId, `Вот кое что для тебя:
        ${data.lifeHackerAnswers[season]}`)
    }, 1000);
  }
});


console.log('bot is running');