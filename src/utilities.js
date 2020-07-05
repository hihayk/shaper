export const randomNumber = (min, max, full) => {
  const num = Math.random() * (max - min) + min
  let rand = min + Math.random() * (max - min);
  if (full === 'full') {
    return Math.round(rand)
  }
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export const setProperty = (property, value) => {
  document.documentElement.style.setProperty(`--${property}`, value);
}

export const getProperty = (property) => {
  getComputedStyle(document.documentElement).getPropertyValue(`--${property}`);
}

export const fonts = [
  'system-ui, sans-serif',
  'IBM Plex Sans',
  'Futura, sans-serif',
  'Roboto Mono',
  'Nunito',
  'Helvetica, sans-serif',
  'Merriweather',
  'Work Sans',
]

const buttonIsRound = [true, false, false, false]

export const getRandomObject = () => {
  const randomFontsPosition = randomNumber(0, fonts.length-1, 'full')
  return {
    fontFamily: fonts[randomFontsPosition],
    textSizeIncrement: randomNumber(1.2, 1.4),
    baseTextSize: randomNumber(0.875, 1.1),
    textFrameRatio: randomNumber(1.2, 3),
    textFrameY: randomNumber(0.4, 1),
    unit: randomNumber(0.4, 0.8),
    spaceIncrement: randomNumber(1.5, 1.8),
    accentHue: randomNumber(0, 360, 'full'),
    accentSaturation: randomNumber(0, 100, 'full'),
    accentLightness: randomNumber(30, 60, 'full'),
    greySaturation: randomNumber(0, 10, 'full'),
    radius: randomNumber(0, 0.4),
    fieldBorderWidth: randomNumber(1, 3, 'full'),
    buttonRound: buttonIsRound[randomNumber(0, 3, 'full')],
  }
}

export const numberToUnit = (number, unit) => `${number}${unit}`