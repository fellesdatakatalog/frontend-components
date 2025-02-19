import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { PaletteProps } from '..';

export function getClassNames(props): any {
  const palette = getTheme().palette as PaletteProps;
  const flex = props.flex;

  return mergeStyleSets({
    accordionMenu: {
      padding: 0,
      margin: '0 !important',
      selectors: {
        li: {
          listStyle: 'none',
          selectors: {
            '&:last-child': {
              borderBottom: `2px solid ${palette.skeColor.grey}`
            }
          }
        }
      }
    },
    menuItem: {
      display: 'flex',
      borderTop: `2px solid ${palette.skeColor.grey}`,
      padding: '0 15px',
      selectors: {
        '&:hover': {
          background: palette.skeColor.lightBlue
        }
      }
    },
    menuItemIsOpen: {
      borderBottom: `2px solid ${palette.skeColor.grey}`
    },
    menuItemTitle: {
      display: 'flex',
      alignItems: 'center',
      flex: flex ? '1 1 auto' : undefined
    },
    title: {
      display: flex ? 'flex' : undefined,
      flex: flex ? '1 1 auto' : undefined,
      margin: '0 15px 0 15px',
      padding: '10px 0'
    },
    iconWrapper: {
      selectors: {
        div: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          width: 40,
          border: `2px solid ${palette.skeColor.blackAlt}`,
          borderRadius: '50%'
        }
      }
    },
    toggleButton: {
      alignSelf: 'flex-start',
      marginLeft: 'auto',
      padding: '10px 0'
    },
    toggleButtonOpen: {
      selectors: {
        '& i': {
          transform: 'rotate(180deg)'
        }
      }
    },
    content: {
      padding: 15,
      background: palette.skeColor.lightBeige,
      display: 'block'
    }
  });
}
