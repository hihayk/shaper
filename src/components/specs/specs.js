import React from 'react'
import './specs.css';

const Snippet = ({preview, code}) => (
  <div className={preview ? 'snippetSection withPreview' : 'snippetSection'}>
    {preview && (
      <div className="previewSection">
        {preview}
      </div>
    )}

    <div className="codeSection">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  </div>
)

const Specs = ({
  variables,
  darkModeStyles,
}) => {
  return (
    <div className="specsWrapper">
      <div className="snippetsSection">
        <div className="text-l">Typography</div>
        <Snippet
          preview={(
            <>
              {['xl','l','m','s','xs'].map((item, index) => (
                <div key={index} className={`text-${item} mb-s`}>
                  <div><strong>Aa123 — {item}</strong></div>
                  <div>Handgloves</div>
                </div>
              ))}
            </>
          )}
          code={variables.type}
        />
        <div className="text-l">Spacing</div>
        <Snippet
          preview={(
            <>
              {['s','m','l','xl','2xl','3xl','4xl'].map((item, index) => (
                <div key={index} className={`demoSpace demoSpace-${item}`}></div>
              ))}
            </>
          )}
          code={variables.space}
        />
        <div>
          <div className="text-m">Text frame</div>
          <div className="c-bodyDimmed">Use textFrame variables to set the padding of buttons and text inputs.</div>
        </div>
        <Snippet
          preview={(
            <>
              <div
                className="mb-s"
                style={{
                  border: 'solid var(--c-overlay)',
                  borderWidth: 'var(--textFrameY)'
                }}
              >padding: var(--textFrameY)</div>
              <div
                style={{
                  border: 'solid var(--c-overlay)',
                  borderWidth: 'var(--textFrameY) var(--textFrameX)'
                }}
              >padding: var(--textFrameY) var(--textFrameX)</div>
            </>
          )}
          code={variables.textFrame}
        />
        <div className="text-l">Color</div>
        <Snippet
          preview={(
            <>
              <div className="colorsRow">                
                {[1,2,3,4,5,6,7,8].map((item, index) => (
                  <div key={index} className="colorBoxWrapper">
                    <div className={`colorBox bgc-grey${item}`}></div>
                    <div className="colorBoxTitle">grey{item}</div>
                  </div>
                ))}
              </div>
              <div className="mb-l"></div>
              <div className="colorsRow">
                {['accent','accentContrasted'].map((item, index) => (
                  <div key={index} className="colorBoxWrapper">
                    <div key={index} className={`colorBox bgc-${item}`}></div>
                    <div className="colorBoxTitle">{item}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          code={variables.color}
        />
        <div className="text-l">Layer</div>
        <Snippet
          preview={(
            <div style={{
              width: '4rem',
              height: '4rem',
              border: 'var(--fieldBorderWidth) solid currentColor',
              borderRadius: 'var(--radius)',
            }} />              
          )}
          code={variables.layer}
        />
        <div className="text-l">Dark mode styles</div>
        <Snippet
          code={darkModeStyles}
        />
      </div>
    </div>
  )
}

export default Specs