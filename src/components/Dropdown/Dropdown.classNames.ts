import { mergeStyleSets } from '@uifabric/merge-styles';
import { getTheme } from '@uifabric/styling';
import { FontSizes } from '../utils/fonts';
import { MdIcons } from '../utils/icons/';
import { PaletteProps } from '..';
import { DropdownProps } from './Dropdown';
import { IDropdownStyles } from 'office-ui-fabric-react';

function getFieldTypeStyles(props: DropdownProps) {
  if (props.inputSize === 'large') {
    return {
      '.ms-Dropdown-title': {
        borderWidth: 2,
        padding: '5px 12px',
        borderRadius: '0px',
        fontSize: FontSizes.large,
        height: '46px'
      },
      '& span.ms-Dropdown-caretDownWrapper': {
        top: '8px',
        fontSize: FontSizes.large
      }
    };
  } else {
    return {
      '.ms-Dropdown-title': {
        fontSize: FontSizes.small
      }
    };
  }
}

export const getClassNames = (props: DropdownProps) => {
  const { errorMessage } = props;
  const palette = getTheme().palette as PaletteProps;
  const color = errorMessage
    ? palette.skeColor.error
    : palette.skeColor.blackAlt;
  const inset = 0;
  const radius = '0';
  const errorIcon = "'" + MdIcons.icons.Error + "'";

  return mergeStyleSets({
    main: {
      selectors: {
        ...getFieldTypeStyles(props),
        '& .ms-TextField-errorMessage': {
          fontSize: FontSizes.small
        },
        '::-moz-focus-inner': {
          border: '0'
        },
        '& .ms-Dropdown-title': {
          borderColor: palette.skeColor.blackAlt,
          borderRadius: '0px'
        },
        '& .ms-Dropdown-title.ms-Dropdown-title': errorMessage && {
          borderColor: color,
          borderWidth: '2px'
        },
        // hack
        '&:focus .ms-Dropdown-title.ms-Dropdown-title': {
          border: `2px solid ${palette.skeColor.blue}`
        },
        '&.is-disabled.is-disabled span.ms-Dropdown-title': {
          borderColor: palette.skeColor.grey,
          borderStyle: 'solid',
          borderWidth: '1px',
          backgroundColor: palette.skeColor.whiteGrey
        },
        '&.is-disabled.is-disabled span.ms-Dropdown-caretDownWrapper': {
          color: palette.skeColor.grey
        },
        '&:focus:after': !props.disabled && {
          content: '""',
          position: 'absolute',
          left: inset + 1,
          top: inset + 1,
          bottom: inset + 1,
          right: inset + 1,
          borderRadius: radius,
          outline: 'transparent',
          zIndex: 1
        },
        '& div[role=alert]::before': {
          fontFamily: MdIcons.fontFace.fontFamily,
          fontSize: 16,
          content: errorIcon,
          marginRight: '3px'
        }
      }
    },
    readOnly: {
      borderStyle: 'none',
      fontSize: FontSizes.medium,
      fontWeight: 700,
      display: 'block',
      padding: 0
    }
  });
};

export const getCalloutStyles = (): Partial<IDropdownStyles> => {
  const palette = getTheme().palette as PaletteProps;
  const inset = 0;
  const radius = '0';

  return {
    dropdownItem: {
      color: palette.skeColor.blackAlt,
      marginTop: '4px',
      marginBottom: '4px',
      selectors: {
        '&:hover': {
          background: `${palette.skeColor.lightBlue} !important`,
          textDecoration: 'underline'
        },
        '&:active': {
          background: palette.skeColor.lightBlue,
          textDecoration: 'none'
        },
        '&:focus': {
          background: palette.skeColor.lightBlue,
          textDecoration: 'underline'
        },
        '&:hover:after, &:focus:after': {
          content: '""',
          position: 'absolute',
          left: inset + 1,
          top: inset + 1,
          bottom: inset + 1,
          right: inset + 1,
          borderRadius: radius,
          outline: 'transparent',
          zIndex: 1,
          color: palette.skeColor.blackAlt
        }
      }
    },
    dropdownItemSelected: {
      color: palette.skeColor.blackAlt,
      background: `${palette.skeColor.whiteGrey} !important`
    },
    dropdownOptionText: { whiteSpace: 'normal !important' }
  };
};
