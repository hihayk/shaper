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
              <div className="text-xl">Aa 123 handgloves</div>
              <div className="text-l">Aa 123 handgloves</div>
              <div className="text-m">Aa 123 handgloves</div>
              <div className="text-s">Aa 123 handgloves</div>
              <div className="text-xs">Aa 123 handgloves</div>
            </>
          )}
          code={variables.type}
        />
        <div className="text-l">Spacing</div>
        <Snippet
          preview={(
            <>
              <div className="demoSpace demoSpace-s"></div>
              <div className="demoSpace demoSpace-m"></div>
              <div className="demoSpace demoSpace-l"></div>
              <div className="demoSpace demoSpace-xl"></div>
              <div className="demoSpace demoSpace-2xl"></div>
              <div className="demoSpace demoSpace-3xl"></div>
              <div className="demoSpace demoSpace-4xl"></div>
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
              >Text frame even</div>
              <div
                style={{
                  border: 'solid var(--c-overlay)',
                  borderWidth: 'var(--textFrameY) var(--textFrameX)'
                }}
              >Text frame ratio</div>
            </>
          )}
          code={variables.textFrame}
        />
        <div className="text-l">Color</div>
        <Snippet
          preview={(
            <>
              <div className="colorsRow">
                <div className="colorBox bgc-grey1"></div>
                <div className="colorBox bgc-grey2"></div>
                <div className="colorBox bgc-grey3"></div>
                <div className="colorBox bgc-grey4"></div>
                <div className="colorBox bgc-grey5"></div>
                <div className="colorBox bgc-grey6"></div>
                <div className="colorBox bgc-grey7"></div>
                <div className="colorBox bgc-grey8"></div>
              </div>
              <div className="mb-m"></div>
              <div className="colorsRow">
                <div className="colorBox bgc-accent"></div>
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