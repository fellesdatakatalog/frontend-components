import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    overlay: {
      zIndex: 100,
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      minHeight: '200px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      transition: '0.3s ease-out',
      display: 'none'
    },
    overlayShow: {
      display: 'block'
    },
    plainButton: {
      fontSize: FontSizes.small,
      background: 'inherit',
      border: 'inherit',
      borderWidth: 2,
      borderBottom: '2px solid ' + palette.skeColor.lightGrey,
      color: palette.skeColor.white,
      textDecoration: 'none !important',
      transition: 'none',
      paddingTop: 1,
      paddingBottom: 0,
      selectors: {
        ':hover': {
          cursor: 'pointer',
          borderBottom: '2px solid rgba(255, 255, 255, 1)'
        }
      }
    },
    topStripeContainer: {
      margin: 0,
      zIndex: 150,
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: palette.skeColor.blackAlt,
      color: palette.skeColor.white,
      fontSize: FontSizes.small,
      height: 30,
      fontWeight: FontWeights.regular,
      padding: '0 8px',
      selectors: {
        li: { listStyleType: 'none', padding: '14px 16px 16px 16px' },
        'a,i': {
          fontWeight: FontWeights.regular,
          borderWidth: 2,
          color: palette.skeColor.white,
          borderColor: palette.skeColor.lightGrey
        },
        'a:hover,a:hover i': {
          color: palette.skeColor.white,
          borderColor: palette.skeColor.white
        },
        'a:focus, a:focus i': {
          color: palette.skeColor.blackAlt,
          borderColor: palette.skeColor.darkGrey,
          backgroundColor: palette.skeColor.white,
          outline: 'none'
        },
        'a:active,a:active i': {
          color: palette.skeColor.blackAlt,
          backgroundColor: palette.skeColor.white
        },
        '@media (min-width: 900px)': {
          height: '40px',
          fontSize: FontSizes.small
        }
      }
    }
  });
};
