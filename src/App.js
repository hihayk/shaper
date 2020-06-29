import React, { useState, useEffect } from 'react';
import './utilities.css';
import './common.css';
import Specs from './components/specs/specs';
import { getRandomObject, setProperty, numberToUnit, fonts } from './utilities';
import Settings from './components/settings'
import DemoEmail from './components/demo-email/demo-email';
import { getVariables, darkModeStyles } from './variables'

const initialState = {
  fontFamily: fonts[0],
  textSizeIncrement: 1.23,
  baseTextSize: 0.9,
  textFrameRatio: 2.37,
  textFrameY: 0.8,
  spaceIncrement: 1.65,
  unit: 0.5,
  accentHue: 254,
  accentSaturation: 31,
  accentLightness: 50,
  greySaturation: 5,
  radius: 0.4,
  fieldBorderWidth: 2,
  buttonRound: false,
  darkMode: false,
  preview: 'demo',
}

function App() {
  const [fontFamily, setFontFamily] = useState(initialState.fontFamily)
  const [textSizeIncrement, setTextSizeIncrement] = useState(initialState.textSizeIncrement)
  const [baseTextSize, setBaseTextSize] = useState(initialState.baseTextSize)
  const [textFrameRatio, setTextFrameRatio] = useState(initialState.textFrameRatio)
  const [textFrameY, setTextFrameY] = useState(initialState.textFrameY)
  const [spaceIncrement, setSpaceIncrement] = useState(initialState.spaceIncrement)
  const [unit, setUnit] = useState(0.5)
  const [accentHue, setAccentHue] = useState(initialState.accentHue)
  const [accentSaturation, setAccentSaturation] = useState(initialState.accentSaturation)
  const [accentLightness, setAccentLightness] = useState(initialState.accentLightness)
  const [greySaturation, setGreySaturation] = useState(initialState.greySaturation)
  const [radius, setRadius] = useState(initialState.radius)
  const [fieldBorderWidth, setFieldBorderWidth] = useState(initialState.fieldBorderWidth)
  const [buttonRound, setButtonRound] = useState(initialState.buttonRound)
  const [darkMode, setDarkMode] = useState(initialState.darkMode)
  const [preview, setPreview] = useState(initialState.preview)

  const variables = getVariables({baseTextSize,
    textSizeIncrement,
    fontFamily,
    unit,
    spaceIncrement,
    textFrameRatio,
    textFrameY,
    accentHue,
    accentSaturation,
    accentLightness,
    greySaturation,
  })

  const style = document.createElement('style')
  document.head.appendChild(style)
  style.innerHTML = `
    :root{
      ${Object.values(variables).join('')}
    }
    ${darkModeStyles}
  `

  const handleRandomize = () => {
    setFontFamily(getRandomObject().fontFamily)
    setTextSizeIncrement(getRandomObject().textSizeIncrement)
    setBaseTextSize(getRandomObject().baseTextSize)
    setTextFrameRatio(getRandomObject().textFrameRatio)
    setTextFrameY(getRandomObject().textFrameY)
    setSpaceIncrement(getRandomObject().spaceIncrement)
    setAccentHue(getRandomObject().accentHue)
    setAccentSaturation(getRandomObject().accentSaturation)
    setGreySaturation(getRandomObject().greySaturation)
    setRadius(getRandomObject().radius)
    setFieldBorderWidth(getRandomObject().fieldBorderWidth)
    setButtonRound(getRandomObject().buttonRound)
  }

  useEffect(() => {
    setProperty('fontFamily', fontFamily)
    setProperty('textSizeIncrement', textSizeIncrement)
    setProperty('baseTextSize', numberToUnit(baseTextSize, 'rem'))
    setProperty('textFrameRatio', textFrameRatio)
    setProperty('textFrameY', numberToUnit(textFrameY, 'em'))
    setProperty('spaceIncrement', spaceIncrement)
    setProperty('unit', numberToUnit(unit, 'rem'))
    setProperty('accentH', accentHue)
    setProperty('accentS', numberToUnit(accentSaturation, '%'))
    setProperty('accentL', numberToUnit(accentLightness, '%'))
    setProperty('greyS', numberToUnit(greySaturation, '%'))
    setProperty('radius', numberToUnit(radius, 'rem'))
    setProperty('fieldBorderWidth', numberToUnit(fieldBorderWidth, 'px'))
    
    if(buttonRound) {
      document.querySelector('body').classList.add('roundButtons');
    } else {
      document.querySelector('body').classList.remove('roundButtons');
    }
    
    if(darkMode) {
      document.querySelector('body').classList.add('darkMode');
    } else {
      document.querySelector('body').classList.remove('darkMode');
    }

  }, [accentHue, accentLightness, accentSaturation, baseTextSize, buttonRound, darkMode, fieldBorderWidth, fontFamily, greySaturation, radius, spaceIncrement, textFrameRatio, textFrameY, textSizeIncrement, unit, variables.type])

  return (
    <div>
      <Settings
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        textSizeIncrement={textSizeIncrement}
        setTextSizeIncrement={setTextSizeIncrement}
        baseTextSize={baseTextSize}
        setBaseTextSize={setBaseTextSize}
        textFrameRatio={textFrameRatio}
        setTextFrameRatio={setTextFrameRatio}
        textFrameY={textFrameY}
        setTextFrameY={setTextFrameY}
        spaceIncrement={spaceIncrement}
        unit={unit}
        setUnit={setUnit}
        setSpaceIncrement={setSpaceIncrement}
        accentHue={accentHue}
        setAccentHue={setAccentHue}
        accentSaturation={accentSaturation}
        setAccentSaturation={setAccentSaturation}
        accentLightness={accentLightness}
        setAccentLightness={setAccentLightness}
        greySaturation={greySaturation}
        setGreySaturation={setGreySaturation}
        radius={radius}
        setRadius={setRadius}
        fieldBorderWidth={fieldBorderWidth}
        setFieldBorderWidth={setFieldBorderWidth}
        buttonRound={buttonRound}
        setButtonRound={setButtonRound}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        preview={preview}
        setPreview={setPreview}

        handleRandomize={handleRandomize}
      />
      {preview === 'specs' ? (
        <Specs
          baseTextSize={baseTextSize}
          textSizeIncrement={textSizeIncrement}
          spaceIncrement={spaceIncrement}
          unit={unit}
          textFrameY={textFrameY}
          textFrameRatio={textFrameRatio}
          fontFamily={fontFamily}
          variables={variables}
          darkModeStyles={darkModeStyles}
        />
      ) : (
        <DemoEmail />
      )}
    </div>
  );
}

export default App;
