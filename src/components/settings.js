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
  preview,
  setPreview,

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
            id="textSizeIncrement"
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
            id="baseTextSize"
            value={baseTextSize}
            onChange={(e) => setBaseTextSize(e.target.value)}
            min={0.8}
            max={2}
            step={0.01}
            valueUnit="rem"
          />
          <Setting
            label="Font"
            settingType="input"
            inputType="text"
            id="fontFamily"
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
            id="unit"
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
            id="spaceIncrement"
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
            label="Text frame"
            illustration={frameY}
            settingType="input"
            inputType="range"
            id="textFrameY"
            value={textFrameY}
            onChange={(e) => setTextFrameY(e.target.value)}
            min={0}
            max={1}
            step={0.01}
            valueUnit="em"
          />
          <Setting
            label="Button proportion"
            illustration={frameRatio}
            settingType="input"
            inputType="range"
            id="textFrameRatio"
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
            id="accentHue"
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
            id="accentSaturation"
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
            id="accentLightness"
            value={accentLightness}
            onChange={(e) => setAccentLightness(e.target.value)}
            min={0}
            max={100}
            step={1}
            valueUnit="%"
          />
        </div>
        <div className="settingsGridColumn">
          <h2 className="settingsGridColumnTitle" style={{opacity: 0}}>
            -
          </h2>
          <Setting
            label="Grey saturation"
            settingType="input"
            inputType="range"
            id="greySaturation"
            value={greySaturation}
            onChange={(e) => setGreySaturation(e.target.value)}
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
            id="radius"
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
            id="fieldBorderWidth"
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
            id="buttonRound"
            switchIsActive={buttonRound}
            onChange={() => setButtonRound(!buttonRound)}
          />

        </div>
        <div className="settingsGridColumn triggersColumn">
          <div className="randomButtonSection">
            <button
              className="triggerButton"
              onClick={() => handleRandomize()}
            >
              Randomize
            </button>
          </div>
          <Setting
            label="Dark mode"
            settingType="switch"
            id="darkMode"
            switchIsActive={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div>
            <div className="settingButtonGroup">
              <button
                className={preview === 'demo' ? 'settingButton active' : 'settingButton'}
                onClick={() => setPreview('demo')}
              >
                Demo
              </button>
              <button
                className={preview === 'specs' ? 'settingButton active' : 'settingButton'}
                onClick={() => setPreview('specs')}
              >
                Specs
              </button>
            </div>
          </div>
        </div>

        <div className="mainLogoSection">
          <div className="mainLogo">
            <span>S</span>
            <span>H</span>
            <span>A</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
          </div>

          {/* <div className="aboutSection">
            <a href="https://github.com/hihayk/shaper" target="_blank" rel="noopener noreferrer">Github</a>
          </div> */}

          <a className="infoIcon" href="https://github.com/hihayk/shaper" target="_blank" rel="noopener noreferrer">i</a>
        </div>
      </div>
    </div>
  )
}

export default Settings