import React, { useState, useEffect } from 'react';
import './variables.css';
import DemoContent from './components/demo-content';
import { getRandomObject, setProperty, numberToUnit } from './utilities';
import Settings from './components/settings'

function App() {
  const initialState = getRandomObject()

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

  }, [accentHue, accentLightness, accentSaturation, baseTextSize, buttonRound, fieldBorderWidth, fontFamily, greySaturation, radius, spaceIncrement, textFrameRatio, textFrameY, textSizeIncrement, unit])

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

        handleRandomize={handleRandomize}
      />
      <DemoContent />
    </div>
  );
}

export default App;
