const seasons = {
  spring: {
    soft: {
      eyes: ['Карий', 'Топаз', 'Зеленый',],
      skin: [],
      hair: ['dark-brown', 'auburn', 'copper', 'dark-golden-blonde', 'medium-golden-blonde']
    },
    warm: {
      eyes: ['Топаз', 'Светлый ореховый', 'Теплый зеленый', 'Теплый синий'],
      skin: [],
      hair: ['medium-golden-brown', 'light-golden-brown', 'copper', 'strawberry-blonde', 'medium-golden-blonde']
    },
    light: {
      eyes: ['Светлый карий', 'Ореховый', 'Светлый зеленый', 'Светлый синий'],
      skin: [],
      hair: ['light-golden-brown', 'light-coper', 'strawberry-blonde', 'medium-golden-blonde', 'light-golden-blonde']
    }
  },
  autumn: {
    dark: {
      eyes: ['Черный', 'Темный карий', 'Темный зеленый', 'Темный ореховый'],
      skin: [],
      hair: ['brown-black', 'dark-auburn', 'dark-golden-brown', 'medium-golden-brown']
    },
    warm: {
      eyes: ['Золотистый карий', 'Темный оливковый', 'Темный ореховый'],
      skin: [],
      hair: ['dark-golden-brown', 'medium-golden-brown', 'light-golden-brown', 'medium-auburn', 'golden-auburn', 'golden-blonde']
    },
    soft: {
      eyes: ['Светлый карий', 'Светлый ореховый', 'Зеленый', 'Синий'],
      skin: [],
      hair: ['medium-golden-brown', 'light-golden-brown', 'golden-blonde', 'strawberry-blonde']
    }
  },
  summer: {
    soft: {
      eyes: ['Светлый серый', 'Зеленый', 'Синий', 'Серый'],
      skin: [],
      hair: ['dark-ash-brown', 'medium-ash-brown', 'light-ash-brown', 'dark-ash-blonde']
    },
    cool: {
      eyes: ['Светлый зеленый', 'Светлый синий', 'Светлый серый'],
      skin: [],
      hair: ['dark-ash-brown', 'medium-ash-brown', 'light-ash-brown', 'dark-ash-blonde']
    },
    light: {
      eyes: ['Светлый зеленый', 'Светлый синий', 'Светлый серый'],
      skin: [],
      hair: ['light-ash-brown', 'dark-ash-blonde', 'medium-ash-blonde', 'light-ash-blonde', 'very-light-ash-blonde']
    }
  },
  winter: {
    bright: {
      eyes: ['Темный карий', 'Светлый ореховый', 'Изумрудный', 'Сапфир'],
      skin: [],
      hair: ['black', 'brown-black', 'dark-brown', 'medium-brown']
    },
    cool: {
      eyes: ['Темный карий', 'Темный серый', 'Холодный карий', 'Холодный ореховый', 'Холодный синий'],
      skin: [],
      hair: ['black', 'brown-black', 'dark-brown', 'dark-ash-brown']
    },
    dark: {
      eyes: ['Черный', 'Темный карий', 'Темный оливковый', 'Темный ореховый'],
      skin: [],
      hair: ['black', 'brown-black', 'dark-brown', 'medium-brown']
    }
  }
}

const eyeSubTone = {
  '5. Карий/Черный': [
    {
      type: 'photo',
      caption: 'Черный',
      media: './img/eyes/subtone/brown/black.JPG',
    },
    {
      type: 'photo',
      caption: 'Темный карий',
      media: './img/eyes/subtone/brown/dark-brown.JPG',
    },
    {
      type: 'photo',
      caption: 'Золотистый карий',
      media: './img/eyes/subtone/brown/golden-brown.JPG',
    },
    {
      type: 'photo',
      caption: 'Карий',
      media: './img/eyes/subtone/brown/brown.JPG',
    },
    {
      type: 'photo',
      caption: 'Топаз',
      media: './img/eyes/subtone/brown/topaz.JPG',
    },
    {
      type: 'photo',
      caption: 'Холодный карий',
      media: './img/eyes/subtone/brown/cool-brown.JPG',
    },
    {
      type: 'photo',
      caption: 'Светлый карий',
      media: './img/eyes/subtone/brown/light-brown.JPG',
    },
  ],
  '4. Ореховый/Янтарный': [
    {
      type: 'photo',
      caption: 'Темный ореховый',
      media: './img/eyes/subtone/hazel/dark-hazel.JPG',
    },
    {
      type: 'photo',
      caption: 'Теплый ореховый',
      media: './img/eyes/subtone/hazel/warm-hazel.JPG',
    },
    {
      type: 'photo',
      caption: 'Ореховый',
      media: './img/eyes/subtone/hazel/hazel.JPG',
    },
    {
      type: 'photo',
      caption: 'Светлый ореховый',
      media: './img/eyes/subtone/hazel/light-hazel.JPG',
    },
    {
      type: 'photo',
      caption: 'Холодный ореховый',
      media: './img/eyes/subtone/hazel/icy-hazel.JPG',
    },
  ],
  '3. Зеленый': [
    {
      type: 'photo',
      caption: 'Темный зеленый',
      media: './img/eyes/subtone/green/dark-green.JPG',
    },
    {
      type: 'photo',
      caption: 'Темный оливковый',
      media: './img/eyes/subtone/green/dark-olive.JPG',
    },
    {
      type: 'photo',
      caption: 'Изумрудный',
      media: './img/eyes/subtone/green/emerald-green.JPG',
    },
    {
      type: 'photo',
      caption: 'Теплый зеленый',
      media: './img/eyes/subtone/green/warm-green.JPG',
    },
    {
      type: 'photo',
      caption: 'Зеленый',
      media: './img/eyes/subtone/green/green.JPG',
    },
    {
      type: 'photo',
      caption: 'Светлый зеленый',
      media: './img/eyes/subtone/green/light-green.JPG',
    },
  ],
  '2. Синий': [
    {
      type: 'photo',
      caption: 'Темный синий',
      media: './img/eyes/subtone/blue/dark-blue.JPG',
    },
    {
      type: 'photo',
      caption: 'Сапфир',
      media: './img/eyes/subtone/blue/azure-blue.JPG',
    },
    {
      type: 'photo',
      caption: 'Теплый синий',
      media: './img/eyes/subtone/blue/warm-blue.JPG',
    },
    {
      type: 'photo',
      caption: 'Синий',
      media: './img/eyes/subtone/blue/blue.JPG',
    },
    {
      type: 'photo',
      caption: 'Светлый синий',
      media: './img/eyes/subtone/blue/light-blue.JPG',
    },
    {
      type: 'photo',
      caption: 'Холодный синий',
      media: './img/eyes/subtone/blue/cool-blue.JPG',
    },
  ],
  '1. Серый': [
    {
      type: 'photo',
      caption: 'Темный серый',
      media: './img/eyes/subtone/grey/dark-grey.JPG',
    },
    {
      type: 'photo',
      caption: 'Серый',
      media: './img/eyes/subtone/grey/grey.JPG',
    },
    {
      type: 'photo',
      caption: 'Светлый серый',
      media: './img/eyes/subtone/grey/light-grey.JPG',
    },
  ]
}

const skinSubTone = {
  tones: {
    'I Бледная': {
      image: './img/skin/white.png'
    },
    'II Светлая': {
      image: './img/skin/light.png'
    },
    'III Загорелая': {
      image: './img/skin/tanned.png'
    },
    'IV Оливковая': {
      image: './img/skin/olive.png'
    },
    'V Темная': {
      image: './img/skin/dark.png'
    }
  },
  options: [['1'], ['2'], ['3'], ['4'], ['5']]
}

const hairSubTone = {
  'Брюнетка': [
    {
      type: 'photo',
      caption: 'black',
      media: './img/hair/subtone/black/black.JPG',
    },
    {
      type: 'photo',
      caption: 'brown-black',
      media: './img/hair/subtone/black/brown-black.JPG',
    }
  ],
  'Шатенка': [
    {
      type: 'photo',
      caption: 'dark-brown',
      media: './img/hair/subtone/brown/dark-brown.JPG',
    },
    {
      type: 'photo',
      caption: 'dark-ash-brown',
      media: './img/hair/subtone/brown/dark-ash-brown.JPG',
    },
    {
      type: 'photo',
      caption: 'medium-brown',
      media: './img/hair/subtone/brown/medium-brown.JPG',
    },
    {
      type: 'photo',
      caption: 'medium-ash-brown',
      media: './img/hair/subtone/brown/medium-ash-brown.JPG',
    },
    {
      type: 'photo',
      caption: 'light-ash-brown',
      media: './img/hair/subtone/brown/light-ash-brown.JPG',
    },
    {
      type: 'photo',
      caption: 'dark-golden-brown',
      media: './img/hair/subtone/brown/dark-golden-brown.JPG',
    },
    {
      type: 'photo',
      caption: 'medium-golden-brown',
      media: './img/hair/subtone/brown/medium-golden-brown.JPG',
    },
    {
      type: 'photo',
      caption: 'light-golden-brown',
      media: './img/hair/subtone/brown/light-golden-brown.JPG',
    }
  ],
  'Рыжая': [
    {
      type: 'photo',
      caption: 'dark-auburn',
      media: './img/hair/subtone/red/dark-auburn.JPG',
    },
    {
      type: 'photo',
      caption: 'auburn',
      media: './img/hair/subtone/red/auburn.JPG',
    },
    {
      type: 'photo',
      caption: 'golden-auburn',
      media: './img/hair/subtone/red/golden-auburn.JPG',
    },
    {
      type: 'photo',
      caption: 'copper',
      media: './img/hair/subtone/red/copper.JPG',
    },
    {
      type: 'photo',
      caption: 'medium-auburn',
      media: './img/hair/subtone/red/medium-auburn.JPG',
    },
    {
      type: 'photo',
      caption: 'light-coper',
      media: './img/hair/subtone/red/light-coper.JPG',
    }
  ],
  'Русая': [
    {
      type: 'photo',
      caption: 'dark-ash-blonde',
      media: './img/hair/subtone/ash-blonde/dark-ash-blonde.JPG',
    },
    {
      type: 'photo',
      caption: 'medium-ash-blonde',
      media: './img/hair/subtone/ash-blonde/medium-ash-blonde.JPG',
    },
    {
      type: 'photo',
      caption: 'dark-golden-blonde',
      media: './img/hair/subtone/ash-blonde/dark-golden-blonde.JPG',
    }
  ],
  'Блондинка': [
    {
      type: 'photo',
      caption: 'strawberry-blonde',
      media: './img/hair/subtone/blonde/strawberry-blonde.JPG',
    },
    {
      type: 'photo',
      caption: 'medium-golden-blonde',
      media: './img/hair/subtone/blonde/medium-golden-blonde.JPG',
    },
    {
      type: 'photo',
      caption: 'golden-blonde',
      media: './img/hair/subtone/blonde/golden-blonde.JPG',
    },
    {
      type: 'photo',
      caption: 'light-golden-blonde',
      media: './img/hair/subtone/blonde/light-golden-blonde.JPG',
    },
    {
      type: 'photo',
      caption: 'light-ash-blonde',
      media: './img/hair/subtone/blonde/light-ash-blonde.JPG',
    },
    {
      type: 'photo',
      caption: 'very-light-ash-blonde',
      media: './img/hair/subtone/blonde/very-light-ash-blonde.JPG',
    }
  ]
}

const contrastMapOld = {
  eyes: {
    '1. Серый': {
      'Блондинка': false,
      'Русая': false,
      'Шатенка': true,
      'Брюнетка': true,
      'Рыжая': true
    },
    '2. Синий': {
      'Блондинка': false,
      'Русая': false,
      'Шатенка': true,
      'Брюнетка': true,
      'Рыжая': true
    },
    '3. Зеленый': {
      'Блондинка': false,
      'Русая': false,
      'Шатенка': true,
      'Брюнетка': true,
      'Рыжая': true
    },
    '4. Ореховый/Янтарный': {
      'Блондинка': true,
      'Русая': true,
      'Шатенка': false,
      'Брюнетка': false,
      'Рыжая': false
    },
    '5. Карий/Черный': {
      'Блондинка': true,
      'Русая': true,
      'Шатенка': false,
      'Брюнетка': false,
      'Рыжая': false
    }
  },
  hair: {
    'Блондинка': {
      'I Бледная': false,
      'II Светлая': false,
      'III Загорелая': false,
      'IV Оливковая': true,
      'V Темная': true
    },
    'Русая': {
      'I Бледная': false,
      'II Светлая': false,
      'III Загорелая': false,
      'IV Оливковая': true,
      'V Темная': true
    },
    'Шатенка': {
      'I Бледная': true,
      'II Светлая': false,
      'III Загорелая': false,
      'IV Оливковая': false,
      'V Темная': true
    },
    'Брюнетка': {
      'I Бледная': true,
      'II Светлая': true,
      'III Загорелая': true,
      'IV Оливковая': true,
      'V Темная': false
    },
    'Рыжая': {
      'I Бледная': true,
      'II Светлая': true,
      'III Загорелая': false,
      'IV Оливковая': false,
      'V Темная': false
    }
  },
  skin: {
    'I Бледная': {
      '1. Серый': false,
      '2. Синий': false,
      '3. Зеленый': false,
      '4. Ореховый/Янтарный': true,
      '5. Карий/Черный': true
    },
    'II Светлая': {
      '1. Серый': false,
      '2. Синий': false,
      '3. Зеленый': false,
      '4. Ореховый/Янтарный': true,
      '5. Карий/Черный': true
    },
    'III Загорелая': {
      '1. Серый': true,
      '2. Синий': true,
      '3. Зеленый': true,
      '4. Ореховый/Янтарный': false,
      '5. Карий/Черный': false
    },
    'IV Оливковая': {
      '1. Серый': true,
      '2. Синий': true,
      '3. Зеленый': true,
      '4. Ореховый/Янтарный': false,
      '5. Карий/Черный': false
    },
    'V Темная': {
      '1. Серый': true,
      '2. Синий': true,
      '3. Зеленый': true,
      '4. Ореховый/Янтарный': false,
      '5. Карий/Черный': false
    }
  }
}

function determineContrastOld(eyeTone, skinTone, hairTone) {
  let a = contrastMapOld.eyes[eyeTone][hairTone];
  let b = contrastMapOld.hair[hairTone][skinTone];
  let c = contrastMapOld.skin[skinTone][eyeTone];
  console.log(a);
  console.log(b);
  console.log(c);

  let res = Number(a) + Number(b) + Number(c)

  return res > 1 ? true : false;
}