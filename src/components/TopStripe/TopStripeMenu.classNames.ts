import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    menuButton: {
      selectors: {
        '.ms-Button-label': {
          fontSize: FontSizes.small,
          color: palette.skeColor.white,
          textDecoration: 'none !important',
          padding: '1px 5px 0 5px',
          borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
          transition: 'border-bottom 0.3s'
        },
        '&.ms-Button--action:hover .ms-Button-label': {
          color: palette.skeColor.white,
          borderBottom: '2px solid rgba(255, 255, 255, 1)'
        },
        '&.ms-Button--action > .ms-Button-flexContainer > i': {
          color: palette.skeColor.white,
          transition: 'none'
        },
        '&.ms-Button--action:hover > .ms-Button-flexContainer > i': {
          color: palette.skeColor.white,
          transition: 'none'
        }
      }
    },
    menuButtonActive: {
      borderRadius: 0,
      backgroundColor: palette.skeColor.white,
      selectors: {
        '.ms-Button-label': {
          fontSize: FontSizes.small,
          color: palette.skeColor.blackAlt,
          textDecoration: 'none !important',
          padding: '1px 5px 0 5px',
          borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
          transition: 'border-bottom 0.3s'
        },
        '&.ms-Button--action:hover .ms-Button-label': {
          color: palette.skeColor.blackAlt,
          borderBottom: '2px solid rgba(255, 255, 255, 1)'
        },
        '&.ms-Button--action > .ms-Button-flexContainer > i': {
          color: palette.skeColor.blackAlt,
          transition: 'none'
        },
        '&.ms-Button--action:hover > .ms-Button-flexContainer > i': {
          color: palette.skeColor.blackAlt,
          transition: 'none'
        }
      }
    },
    dropDownLink: {
      position: 'relative',
      selectors: {
        'i, a, button': {
          fontSize: FontSizes.small,
          background: 'none',
          border: 'none',
          color: 'inherit',
          textDecoration: 'none !important',
          transition: 'none',
          paddingTop: 1,
          paddingRight: 5,
          paddingBottom: 0,
          paddingLeft: 5
        }
      }
    },
    icon: {
      position: 'absolute',
      left: 0
    },
    menuCloseButton: {
      display: 'block',
      margin: '0 auto',
      selectors: {
        i: {
          color: palette.skeColor.white + '!important'
        },
        'i:hover': {
          backgroundColor: palette.skeColor.white,
          color: palette.skeColor.black + '!important'
        }
      }
    },
    dropdownContainer: {
      position: 'absolute',
      backgroundColor: palette.skeColor.black,
      color: palette.skeColor.white,
      fontSize: FontSizes.small,
      fontWeight: FontWeights.regular,
      margin: 0,
      paddingInlineStart: 40,
      paddingInlineEnd: 40,
      selectors: {
        'li:hover:not(:last-child)': {
          backgroundColor: 'white',
          color: 'black'
        },
        'li:hover a': {
          color: 'black'
        },
        'a,i': { borderWidth: 0 }
      }
    }
  });
};
