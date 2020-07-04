import React from 'react'

const Setting = ({
  label,
  id,
  illustration,
  settingType,
  inputType,
  value,
  onChange,
  valueUnit,
  step,
  children,
  switchIsActive,
  ...props
}) => {
  return (
    <div
      className="settingWrapper"
      style={props.max && {
        '--value': `${100-(props.max - value)/(props.max - props.min)*100}%`
      }}>
      {/* {illustration && (
        <div className="settingIllustrationSection">
          <img alt="" src={illustration} className="settingIllustration"/>
        </div>
      )} */}

      {settingType === "input" && (
        <>
          <label className="settingLabel" htmlFor={id}>
            {label}
          </label>
          <input
            id={id}
            type={inputType}
            value={value}
            onChange={onChange}
            step={step}
            className={inputType === "text" ? 'settingTextInput' : undefined}
            {...props}
          />
          {inputType === "range" && (
            <div className="settingNumberInputWrapper">
              <input
                id={id}
                className="settingTextInput settingTextInputSmall"
                type="number"
                value={value}
                onChange={onChange}
                step={step}
              />
              <div className="settingNumberUnit">
                {valueUnit}
              </div>
            </div>
          )}
        </>
      )}
      {settingType === "switch" && (
        <div className={switchIsActive ? 'switchSettingWrapper active' : 'switchSettingWrapper'}>
          <label className="switchTrack">
            <input id={id} type="checkbox" checked={switchIsActive} onChange={onChange} />
            <div className="switchKnob"></div>
          </label>
          <label className="settingLabel" htmlFor={id}>
            {label}
          </label>
        </div>
      )}
    </div>
  )
}

export default Setting