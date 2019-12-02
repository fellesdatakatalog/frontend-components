import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes, FontWeights } from '../utils/fonts';
import { PaletteProps } from '..';

export const getClassNames = () => {
  const palette = getTheme().palette as PaletteProps;
  return mergeStyleSets({
    topStripeContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: palette.skeColor.black,
      color: palette.skeColor.white,
      fontSize: FontSizes.small,
      height: 30,
      fontWeight: FontWeights.regular,
      selectors: {
        li: { listStyleType: 'none', padding: 20 },
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
          color: palette.skeColor.darkBlue,
          borderColor: palette.skeColor.white,
          backgroundColor: palette.skeColor.lightBlue,
          outline: 'none'
        },
        'a:active,a:active i': {
          color: palette.skeColor.black,
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
