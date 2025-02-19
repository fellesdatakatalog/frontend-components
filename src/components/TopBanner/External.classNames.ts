import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes } from '..';
import { PaletteProps } from '..';
import { TopBannerProps } from './TopBanner';
import separator from './assets/separator.png';

export function getClassNames(props: TopBannerProps) {
  const { compact } = props;
  const palette = getTheme().palette as PaletteProps;
  // @ts-ignore TODO
  return mergeStyleSets({
    header: {
      selectors: {
        '&::after': {
          display: 'block',
          content: '""',
          width: '100%',
          height: compact ? '12px' : '20px',
          backgroundColor: '#fff',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(${separator})`
        }
      }
    },
    headerMain: {
      width: 'auto',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: 'auto',
      height: 'auto',
      padding: compact ? '8px' : '16px 16px 4px 16px',
      display: 'flex',
      //flexDirection: 'column',
      background: palette.skeColor.white,
      maxWidth: '1100px',
      selectors: {
        '@media (min-width: 640px)': {
          width: 'auto',
          minWidth: compact ? 'auto' : '500px',
          flexDirection: 'row'
        }
      }
    },
    contentWrapper: {
      flexGrow: 3,
      flexDirection: 'colum',
      textAlign: 'left',
      width: '100%',
      paddingLeft: '16px',
      selectors: {
        '@media (min-width: 480px)': {
          paddingLeft: '32px'
        }
      }
    },
    title: {
      marginTop: compact ? '12px' : '4px',
      fontSize: `${FontSizes.large} !important`,
      selectors: {
        '@media (min-width: 640px)': {
          fontSize: `${FontSizes.xLarge} !important`
        }
      }
    },
    separator: {
      width: '100%',
      height: '20px',
      backgroundColor: '#fff',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${separator})`
    },
    linkButton: {
      displayName: 'SkeActionButton',
      marginTop: '-12px',
      marginLeft: '-8px',
      selectors: {
        '& .ms-Button-textContainer': {
          color: palette.skeColor.blue,
          fontSize: FontSizes.xSmall,
          fontWeight: 'bold'
        }
      }
    }
  });
}
