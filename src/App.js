import React, { useState, useEffect } from 'react';
import './variables.css';
import './utilities.css';
import './common.css';
import DemoContent from './components/demo-content';
import { getRandomObject, setProperty, numberToUnit, fonts } from './utilities';
import Settings from './components/settings'
import DemoEmail from './components/demo-email/demo-email';

const initialState = {
  fontFamily: fonts[0],
  textSizeIncrement: 1.2,
  baseTextSize: 0.9,
  textFrameRatio: 2,
  textFrameY: 0.7,
  spaceIncrement: 1.65,
  unit: 0.5,
  accentHue: 338,
  accentSaturation: 54,
  accentLightness: 50,
  greySaturation: 10,
  radius: 0.3,
  fieldBorderWidth: 2,
  buttonRound: false,
  darkMode: false,
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
  const [accentLightness, setAccentLightness] = useState(40)
  const [greySaturation, setGreySaturation] = useState(initialState.greySaturation)
  const [radius, setRadius] = useState(initialState.radius)
  const [fieldBorderWidth, setFieldBorderWidth] = useState(initialState.fieldBorderWidth)
  const [buttonRound, setButtonRound] = useState(initialState.buttonRound)
  const [darkMode, setDarkMode] = useState(false)

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
    setProperty('accentHue', accentHue)
    setProperty('accentSaturation', numberToUnit(accentSaturation, '%'))
    setProperty('accentLightness', numberToUnit(accentLightness, '%'))
    setProperty('greySaturation', numberToUnit(greySaturation, '%'))
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

  }, [accentHue, accentLightness, accentSaturation, baseTextSize, buttonRound, darkMode, fieldBorderWidth, fontFamily, greySaturation, radius, spaceIncrement, textFrameRatio, textFrameY, textSizeIncrement, unit])

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

        handleRandomize={handleRandomize}
      />
      {/* <DemoContent /> */}
      <DemoEmail />
    </div>
  );
}

export default App;
