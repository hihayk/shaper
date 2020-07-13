import tinycolor from 'tinycolor2'

export const getVariables = ({
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
}) => {
  const getAccentButtonColor = () => {
    const accentButtonBgLuminance = tinycolor(`hsl(${accentHue} ${accentSaturation} ${accentLightness})`).getLuminance()
    const lightness = accentButtonBgLuminance < 0.3 ? 95 : 15

    return `hsl(var(--accentH), var(--accentS), ${lightness}%)`
  }

  return {
    type:
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

--fontFamily: ${fontFamily};`
    ,
    space:
`--unit: ${unit}rem;
--spaceIncrement: ${spaceIncrement};

--space-s: var(--unit);
--space-m: calc(var(--space-s) * var(--spaceIncrement));
--space-l: calc(var(--space-m) * var(--spaceIncrement));
--space-xl: calc(var(--space-l) * var(--spaceIncrement));
--space-2xl: calc(var(--space-xl) * var(--spaceIncrement));
--space-3xl: calc(var(--space-2xl) * var(--spaceIncrement));
--space-4xl: calc(var(--space-3xl) * var(--spaceIncrement));`
    ,
    textFrame:
`--textFrameRatio: ${textFrameRatio};
--textFrameY: ${textFrameY}em;
--textFrameX: calc(var(--textFrameY) * var(--textFrameRatio));`
    ,
    color:
`--accentH: ${accentHue};
--accentS: ${accentSaturation}%;
--accentL: ${accentLightness}%;
--c-accent: hsl(var(--accentH), var(--accentS), var(--accentL));
--c-accentContrasted: ${getAccentButtonColor()};

--greyH: var(--accentH);
--greyS: ${greySaturation}%;
--initialGreyLightness: 93%;
--greyscaleLightnessIncrement: 11.3%;

--grey1L:  var(--initialGreyLightness);
--grey2L:  calc(var(--initialGreyLightness) - var(--greyscaleLightnessIncrement) * 1);
--grey3L:  calc(var(--initialGreyLightness) - var(--greyscaleLightnessIncrement) * 2);
--grey4L:  calc(var(--initialGreyLightness) - var(--greyscaleLightnessIncrement) * 3);
--grey5L:  calc(var(--initialGreyLightness) - var(--greyscaleLightnessIncrement) * 4);
--grey6L:  calc(var(--initialGreyLightness) - var(--greyscaleLightnessIncrement) * 5);
--grey7L:  calc(var(--initialGreyLightness) - var(--greyscaleLightnessIncrement) * 6);
--grey8L:  calc(var(--initialGreyLightness) - var(--greyscaleLightnessIncrement) * 7);

--c-grey1: hsl(var(--greyH), var(--greyS), var(--grey1L));
--c-grey2: hsl(var(--greyH), var(--greyS), var(--grey2L));
--c-grey3: hsl(var(--greyH), var(--greyS), var(--grey3L));
--c-grey4: hsl(var(--greyH), var(--greyS), var(--grey4L));
--c-grey5: hsl(var(--greyH), var(--greyS), var(--grey5L));
--c-grey6: hsl(var(--greyH), var(--greyS), var(--grey6L));
--c-grey7: hsl(var(--greyH), var(--greyS), var(--grey7L));
--c-grey8: hsl(var(--greyH), var(--greyS), var(--grey8L));

--c-border: hsla(var(--greyH), var(--greyS), var(--grey8L), 0.1);
--c-overlay: hsla(var(--greyH), var(--greyS), var(--grey8L), 0.07);
--c-background: white;
--c-body: var(--c-grey8);
--c-bodyDimmed: hsla(var(--greyH), var(--greyS), var(--grey8L), 0.5);
--c-fieldBorder: var(--c-grey2);
--c-buttonBg: var(--c-grey2);`
    ,
    layer:
`--radius: ${radius}rem;

--fieldBorderWidth: ${fieldBorderWidth}px;`
    ,
  }
}

export const darkModeStyles =
`body.darkMode {
  --c-border: hsla(var(--greyH), var(--greyS), var(--grey1L), 0.1);
  --c-overlay: hsla(var(--greyH), var(--greyS), var(--grey1L), 0.07);
  --c-background: var(--c-grey8);
  --c-body: var(--c-grey1);
  --c-bodyDimmed: hsla(var(--greyH), var(--greyS), var(--grey1L), 0.5);
  --c-fieldBorder: var(--c-grey6);
  --c-buttonBg: var(--c-grey6);
}`