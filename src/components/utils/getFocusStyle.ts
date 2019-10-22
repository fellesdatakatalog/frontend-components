export function getFocusStyle(
  // @ts-ignore TODO
  theme,
  inset = 0,
  position = 'relative',
  radius = '0'
) {
  return {
    outline: 'transparent',
    selectors: {
      '::-moz-focus-inner': {
        border: '0'
      },
      '.ms-Fabric.is-focusVisible.is-focusVisible &:focus:after': {
        content: '""',
        left: inset + 1,
        top: inset + 1,
        bottom: inset + 1,
        right: inset + 1,
        border: '2px solid ' + theme.palette.skeColor.blue,
        borderRadius: radius,
        outline: 'transparent',
        zIndex: 1
      }
    }
  };
}

export default getFocusStyle;
