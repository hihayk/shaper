import React from 'react'
import Setting from './setting';
import '../settings.css';
import '../slider.css';
import space from '../icons/space.svg'
import frameRatio from '../icons/frame-ratio.svg'
import frameY from '../icons/frame-y.svg'
import textIncrement from '../icons/text-increment.svg'
import unitSvg from '../icons/unit.svg'

const Settings = ({
  fontFamily,
  setFontFamily,
  textSizeIncrement,
  setTextSizeIncrement,
  baseTextSize,
  setBaseTextSize,
  textFrameRatio,
  setTextFrameRatio,
  textFrameY,
  setTextFrameY,
  spaceIncrement,
  unit,
  setUnit,
  setSpaceIncrement,
  accentHue,
  setAccentHue,
  accentSaturation,
  setAccentSaturation,
  accentLightness,
  setAccentLightness,
  greySaturation,
  setGreySaturation,
  radius,
  setRadius,
  fieldBorderWidth,
  setFieldBorderWidth,
  buttonRound,
  setButtonRound,
  darkMode,
  setDarkMode,

  handleRandomize,
}) => {
  
  return (  
    <div className="settingsWrapper">
      <div className="settingsGrid">
        <div className="settingsGridColumn">
          <h2 className="settingsGridColumnTitle">
            Typography
          </h2>
          <Setting
            label="Text increment"
            illustration={textIncrement}
            settingType="input"
            inputType="range"
            value={textSizeIncrement}
            onChange={(e) => setTextSizeIncrement(e.target.value)}
            min={1}
            max={2}
            step={0.01}
            valueUnit="ratio"
          />
          <Setting
            label="Base size"
            settingType="input"
            inputType="range"
            value={baseTextSize}
            onChange={(e) => setBaseTextSize(e.target.value)}
            min={0.8}
            max={2}
            step={0.01}
            valueUnit="rem"
          />
          <Setting
            label="Font"
            id="fontFamily"
            settingType="input"
            inputType="text"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          />
        </div>
        <div className="settingsGridColumn">
          <h2 className="settingsGridColumnTitle">
            Spacing
          </h2>
          <Setting
            label="Unit"
            illustration={unitSvg}
            settingType="input"
            inputType="range"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            min={0.4}
            max={0.8}
            step={0.01}
            valueUnit="rem"
          />
          <Setting
            label="Space increment"
            illustration={space}
            settingType="input"
            inputType="range"
            value={spaceIncrement}
            onChange={(e) => setSpaceIncrement(e.target.value)}
            min={1}
            max={2}
            step={0.01}
            valueUnit="ratio"
          />
        </div>
        <div className="settingsGridColumn">
          <h2 className="settingsGridColumnTitle" style={{opacity: 0}}>
            -
          </h2>
          <Setting
            label="Text frame Y"
            illustration={frameY}
            settingType="input"
            inputType="range"
            value={textFrameY}
            onChange={(e) => setTextFrameY(e.target.value)}
            min={0}
            max={1}
            step={0.01}
            valueUnit="em"
          />
          <Setting
            label="Text frame ratio"
            illustration={frameRatio}
            settingType="input"
            inputType="range"
            value={textFrameRatio}
            onChange={(e) => setTextFrameRatio(e.target.value)}
            min={1}
            max={3}
            step={0.01}
            valueUnit="ratio"
          />
        </div>
        <div className="settingsGridColumn">
          <h2 className="settingsGridColumnTitle">
            Color
          </h2>
          <Setting
            label="Accent hue"
            settingType="input"
            inputType="range"
            value={accentHue}
            onChange={(e) => setAccentHue(e.target.value)}
            min={0}
            max={360}
            step={1}
            valueUnit="°"
          />
          <Setting
            label="Accent saturation"
            settingType="input"
            inputType="range"
            value={accentSaturation}
            onChange={(e) => setAccentSaturation(e.target.value)}
            min={0}
            max={100}
            step={1}
            valueUnit="%"
          />
          <Setting
            label="Accent lightness"
            settingType="input"
            inputType="range"
            value={accentLightness}
            onChange={(e) => setAccentLightness(e.target.value)}
            min={0}
            max={100}
            step={1}
            valueUnit="%"
          />
        </div>
        <div className="settingsGridColumn">
          <h2 className="settingsGridColumnTitle">
            Layer
          </h2>
          <Setting
            label="Radius"
            settingType="input"
            inputType="range"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            min={0}
            max={0.5}
            step={0.01}
            valueUnit="rem"
          />
          <Setting
            label="Field border"
            settingType="input"
            inputType="range"
            value={fieldBorderWidth}
            onChange={(e) => setFieldBorderWidth(e.target.value)}
            min={1}
            max={3}
            step={1}
            valueUnit="px"
          />
          <Setting
            label="Round buttons"
            settingType="switch"
            switchIsActive={buttonRound}
            onChange={() => setButtonRound(!buttonRound)}
          />

        </div>
        <div className="settingsGridColumn triggersColumn">
          <Setting
            label="Dark mode"
            settingType="switch"
            switchIsActive={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div className="xBorder" />
          <div className="randomButtonSection">
            <button
              className="triggerButton"
              onClick={() => handleRandomize()}
            >
              Randomize
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings