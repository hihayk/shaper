import React from 'react'
import './specs.css';

const Snippet = ({preview, code}) => (
  <div className="snippetSection">
    <div className="previewSection">
      {preview}
    </div>

    <div className="codeSection">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  </div>
)

const Specs = ({
  baseTextSize,
  textSizeIncrement,
  spaceIncrement,
  unit,
  textFrameY,
  textFrameRatio,
  fontFamily,
}) => {
  return (
    <div className="specsWrapper">
      <div className="snippetsSection">
        <div className="text-l">Typography</div>
        <Snippet
          preview={(
            <>
              <div className="text-xl">Aa</div>
              <div className="text-l">Aa</div>
              <div className="text-m">Aa</div>
              <div className="text-s">Aa</div>
              <div className="text-xs">Aa</div>
            </>
          )}
          code={
`--baseTextSize: ${baseTextSize}rem;
--textSizeIncrement: ${textSizeIncrement};

--text-xs: calc(var(--baseTextSize) / var(--textSizeIncrement));
--text-s: var(--baseTextSize);
--text-m: calc(var(--text-s) * var(--textSizeIncrement));
--text-l: calc(var(--text-m) * var(--textSizeIncrement));
--text-xl: calc(var(--text-l) * var(--textSizeIncrement));

--lineHeightFixedAmount: 0.35rem;
--lineHeightRelativeAmount: 1.1em;
--globalLineHeight: calc(var(--lineHeightFixedAmount) + var(--lineHeightRelativeAmount));

--fontFamily: ${fontFamily};
  `}
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
          code={
`--unit: ${unit}rem;

--spaceIncrement: ${spaceIncrement};

--space-s: var(--unit);
--space-m: calc(var(--space-s) * var(--spaceIncrement));
--space-l: calc(var(--space-m) * var(--spaceIncrement));
--space-xl: calc(var(--space-l) * var(--spaceIncrement));
--space-2xl: calc(var(--space-xl) * var(--spaceIncrement));
--space-3xl: calc(var(--space-2xl) * var(--spaceIncrement));
--space-4xl: calc(var(--space-3xl) * var(--spaceIncrement));
  `}
        />
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
          code={
`--textFrameRatio: ${textFrameRatio};

--textFrameY: ${textFrameY}em;
--textFrameX: calc(var(--textFrameY) * var(--textFrameRatio));
  `}
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
                <div className="colorBox bgc-primary-2xlight"></div>
                <div className="colorBox bgc-primary-xlight"></div>
                <div className="colorBox bgc-primary-light"></div>
                <div className="colorBox bgc-primary"></div>
                <div className="colorBox bgc-primary-dark"></div>
                <div className="colorBox bgc-primary-xdark"></div>
                <div className="colorBox bgc-primary-2xdark"></div>
              </div>
            </>
          )}
          code={
``}
        />
      </div>
    </div>
  )
}

export default Specs