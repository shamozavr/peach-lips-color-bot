const data = require('./data');

function skinAnalyse(arrayOfAnswers, arrayOfQuestions) {
  let cool = 0;
  let warm = 0;
  arrayOfAnswers.map((el, i) => {
    arrayOfQuestions[i].answers[0].toString() === el ? cool += 1 : warm += 1;
  })
  return cool === warm ? 'нейтральный' : cool > warm ? 'холодный' : 'теплый';
}

function createMainToneKeys(arrayOfOptions) {
  return arrayOfOptions.map((el) => el = [el.caption])
}

function createSubToneKeys(arrayOfOptions, masterKey) {
  let arr = arrayOfOptions[masterKey]
  return arr.map((el) => el = [el.caption])
}

function createEyesSubToneArray(object) {
  let arr = [];
  for (const property in object) {
    arr.push(object[property].map((el) => el.caption))
  }
  return arr.flat(1);
}

function determineSeasonByLifehacker(skinUndertone, contrast) {
  if (contrast && skinUndertone === 'холодный') {
    return 'Зима'
  }
  if (contrast && skinUndertone === 'теплый') {
    return 'Осень'
  }
  if (!contrast && skinUndertone === 'холодный') {
    return 'Лето'
  }
  if (!contrast && skinUndertone === 'теплый') {
    return 'Весна'
  }
}

module.exports = { skinAnalyse, createSubToneKeys, createMainToneKeys, createEyesSubToneArray, determineSeasonByLifehacker };