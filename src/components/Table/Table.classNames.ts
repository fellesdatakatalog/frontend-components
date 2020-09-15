import { mergeStyles } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';

import { FontWeights } from '..';
import { PaletteProps } from '..';

export const getClassNames = props => {
  const palette = getTheme().palette as PaletteProps;

  return mergeStyles([
    {
      displayName: 'SkeTable',
      overflowX: 'auto',
      selectors: {
        table: {
          display: 'table',
          width: props.fullWidth ? '100%' : undefined,
          borderCollapse: 'collapse',
          textAlign: 'left',
          height: '1px',
          selectors: {
            thead: {
              display: 'table-header-group'
            },
            'thead th': {
              padding: 12
            },
            tr: {
              height: '100%'
            },
            'tr.clickable:hover': {
              backgroundColor: palette.skeColor.lightBlue
            },
            td: {
              height: '100%',
              padding: 0
            },
            '.cellContent': {
              alignItems: 'center',
              background: 'transparent',
              border: 'none',
              boxSizing: 'border-box',
              display: 'flex',
              fontSize: 'inherit',
              height: '100%',
              padding: 12,
              textAlign: 'inherit',
              width: '100%'
            },
            '.cellContent.clickable:hover': {
              cursor: 'pointer'
            },
            'td.expandableCell td, td.expandableCell .is-closed': {
              borderBottom: 'none'
            },
            'th.hideOnMobile, td.hideOnMobile': {
              display: 'none',
              selectors: {
                '@media (min-width: 640px)': {
                  display: 'table-cell'
                }
              }
            },
            th: {
              verticalAlign: 'bottom',
              fontWeight: FontWeights.bold,
              borderBottom: `2px solid ${palette.skeColor.blackAlt}`,
              position: 'relative',
              selectors: {
                i: {
                  color: `${palette.skeColor.blue}`,
                  position: 'absolute',
                  paddingLeft: '0.1em',
                  cursor: 'pointer',
                  selectors: {
                    ':hover': {
                      color: `${palette.skeColor.darkBlue}`
                    },
                    '& [data-icon-name="ArrowUpDown"]': {
                      selectors: {
                        '@media (min-width: 1024px)': {
                          opacity: 0
                        },
                        '& .noAutoHide': {
                          opacity: 1
                        },
                        ':hover': {
                          opacity: 1
                        }
                      }
                    }
                  }
                },
                ':focus': {
                  color: `${palette.skeColor.blue}`,
                  outline: '0'
                },
                '& .sortable': {
                  cursor: 'pointer',
                  selectors: {
                    ':hover [data-icon-name="ArrowUpDown"]': {
                      opacity: 1
                    },
                    ':focus [data-icon-name="ArrowUpDown"]': {
                      opacity: 1
                    }
                  }
                }
              }
            },
            'td, .tableRow': {
              fontWeight: '400',
              verticalAlign: 'inherit',
              borderBottom: `1px solid ${palette.skeColor.lightGrey}`,
              selectors: {
                '& .right, & .right .cellContent': {
                  justifyContent: 'flex-end',
                  textAlign: 'right'
                },
                '& .center, & .center .cellContent': {
                  justifyContent: 'center',
                  textAlign: 'center'
                }
              }
            }
          }
        },
        '.expandCell': {
          maxWidth: 72,
          maxHeight: 50
        },
        '.editableRow': {
          display: 'none'
        },
        '.editableRow-open': {
          display: 'table-row'
        },
        '.expandableRow-open .is-closed, .expandableRow-open td': {
          borderBottom: 'none'
        },
        '.expandableRow-open td, .expandableRow-open th': {
          verticalAlign: 'text-top'
        },
        '.emptyTd': {
          borderBottom: `2px solid ${palette.skeColor.blackAlt}`
        },
        '.expandableContent': {
          marginTop: '40px',
          width: 'max-content',
          paddingLeft: '96px'
        }
      }
    }
  ]);
};
