export const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

export const isMoreThanOne = value => {
  if(isNaN(value)) {
    return value
  }
  return (value > 1)
}

const alcoholLevelEmojis = {
  'low': [
    '😁',
    '😋',
    '🤩',
    '😏',
    '🥳',
    '🤟',
    '💃',
    '🕺',
    '🤸'
  ],
  'medium': [
    '🤪',
    '😝',
    '😑',
    '🥴',
    '😵',
    '😨',
    '🙊',
    '🙈'
  ],
  'high': [
    '🤢',
    '🤮',
    '💀',
    '☠️',
    '🙃',
    '😴',
    '😱',
    '😫'
  ]
}

export const getRandomEmoji = alcoholLevel => {
  return alcoholLevel === 'low' 
    ? (alcoholLevelEmojis.low[Math.floor(Math.random() * alcoholLevelEmojis.low.length)])
    : alcoholLevel === 'medium'
      ? (alcoholLevelEmojis.medium[Math.floor(Math.random() * alcoholLevelEmojis.medium.length)])
      : (alcoholLevelEmojis.high[Math.floor(Math.random() * alcoholLevelEmojis.high.length)])
}