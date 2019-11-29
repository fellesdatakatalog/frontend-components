import Card, { CardColor, CardProps, CardState } from './Card';
import { FontSizes, FontWeights } from '..';
import { getTheme } from '@uifabric/styling';
import { keyframes, mergeStyleSets } from '@uifabric/merge-styles';
import { PaletteProps } from '..';

const fadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

function getCardBorder(props: CardProps) {
  const palette = getTheme().palette as PaletteProps;
  switch (props.border) {
    case Card.Border.YELLOW_BORDER:
      return {
        border: `3px solid ${palette.skeColor.brown}`
      };
    case Card.Border.GREEN_BORDER:
      return {
        border: `3px solid ${palette.skeColor.green}`
      };
    case Card.Border.RED_BORDER:
      return {
        border: `3px solid ${palette.skeColor.pink}`
      };
    case Card.Border.GREY_BORDER:
      return {
        border: `3px solid ${palette.skeColor.grey}`
      };
    case Card.Border.WHITE_BORDER:
      return {
        border: `3px solid ${palette.skeColor.white}`
      };
    default:
      return {};
  }
}

function getMargin(props: CardProps) {
  switch (props.margin) {
    case 'large':
      return {
        padding: '24px'
      };
    case 'xlarge':
      return {
        padding: '64px'
      };
    default:
      return {};
  }
}

export const getClassNames = (props: CardProps, state: CardState) => {
  const theme = getTheme();
  const palette = theme.palette as PaletteProps;
  const { isExpandedState } = state;
  const { titlesize } = props;
  return mergeStyleSets({
    root: {
      displayName: 'SkeCard',
      color: theme.semanticColors.bodyText,
      backgroundColor: palette.skeColor[props.color as CardColor],
      padding: '16px',
      marginBottom: props.marginbottom,
      ...getCardBorder(props),
      ...getMargin(props)
    },
    expandIcon: {
      position: 'absolute',
      top: 0,
      right: 0,
      selectors: {
        '&& .ms-Button-icon': {
          transform: isExpandedState ? 'rotate(-180deg)' : '0',
          fontSize: FontSizes.xxLarge
        }
      }
    },
    titlecontainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    header: {
      //display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
    },
    title: {
      flex: '1 1 1px',
      fontSize: titlesize,
      fontWeight: FontWeights.semibold
    },
    titleExpand: {
      flex: '1 1 1px',
      fontSize: titlesize,
      fontWeight: FontWeights.semibold,
      selectors: {
        ':hover': {
          textDecoration: 'underline',
          cursor: 'pointer'
        }
      }
    },
    subtitle: {
      width: '100%',
      fontSize: FontSizes.large,
      fontWeight: FontWeights.regular,
      padding: '5px 0 5px 0'
    },
    body: {
      animationName: fadeIn
    }
  });
};
