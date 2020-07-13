import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './utilities.css';
import './common.css';
import Specs from './components/specs/specs';
import { getRandomObject, setProperty, numberToUnit, fonts } from './utilities';
import Settings from './components/settings'
import DemoEmail from './components/demo-email/demo-email';
import { getVariables, darkModeStyles } from './variables'

const defaultState = {
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
}

function App() {

  const getHash = () => {
    const hash = decodeURI(window.location.hash)

    if (hash) {
      const stateKeysArray = Object.keys(defaultState)
      const hashValuesArray = hash.substr(1, hash.length).split(['/'])

      const getHashObject = () => {
        var hashObject = {}
        stateKeysArray.forEach((key, i) => {
          const valueWithBoolean = () => {
            if(hashValuesArray[i] === 'true') { return true }
            if(hashValuesArray[i] === 'false') { return false }
            return hashValuesArray[i]
          }

          return hashObject[key] = valueWithBoolean()
        })

        return hashObject
      }

      return getHashObject()
    }

    return null
  }

  const initialState = getHash() || defaultState

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
  const [darkMode, setDarkMode] = useState(false)
  const [preview, setPreview] = useState('demo')

  const variables = getVariables({
    baseTextSize,
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
    radius,
    fieldBorderWidth,
  })

  const styleRef = useRef()

  useLayoutEffect(() => {
    // Only create style element once
    if (!styleRef.current) {
      const style = document.createElement('style')
      document.head.appendChild(style)
      styleRef.current = style;
    }

    styleRef.current.innerHTML = `
      :root{
        ${Object.values(variables).join('')}
      }
      ${darkModeStyles}
    `
  }, [variables])

  const handleRandomize = () => {
    setFontFamily(getRandomObject().fontFamily)
    setTextSizeIncrement(getRandomObject().textSizeIncrement)
    setBaseTextSize(getRandomObject().baseTextSize)
    setTextFrameRatio(getRandomObject().textFrameRatio)
    setTextFrameY(getRandomObject().textFrameY)
    setSpaceIncrement(getRandomObject().spaceIncrement)
    setAccentHue(getRandomObject().accentHue)
    setAccentSaturation(getRandomObject().accentSaturation)
    setAccentLightness(getRandomObject().accentLightness)
    setGreySaturation(getRandomObject().greySaturation)
    setRadius(getRandomObject().radius)
    setFieldBorderWidth(getRandomObject().fieldBorderWidth)
    setButtonRound(getRandomObject().buttonRound)
  }

  const bodyClassList = document.querySelector('body').classList

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
      bodyClassList.add('roundButtons');
    } else {
      bodyClassList.remove('roundButtons');
    }

    if(darkMode) {
      bodyClassList.add('darkMode');
    } else {
      bodyClassList.remove('darkMode');
    }

  }, [accentHue, accentLightness, accentSaturation, baseTextSize, bodyClassList, buttonRound, darkMode, fieldBorderWidth, fontFamily, greySaturation, radius, spaceIncrement, textFrameRatio, textFrameY, textSizeIncrement, unit, variables.type])

  const currentState = {
    fontFamily,
    textSizeIncrement,
    baseTextSize,
    textFrameRatio,
    textFrameY,
    spaceIncrement,
    unit,
    accentHue,
    accentSaturation,
    accentLightness,
    greySaturation,
    radius,
    fieldBorderWidth,
    buttonRound,
  }

  if(getHash()) {
    window.location.hash = encodeURI(Object.values(getHash()).join('/'))
  }

  const updateHash = () => {
    window.location.hash = encodeURI(Object.values(currentState).join('/'))
  }

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {
      updateHash()
    }
  });

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
