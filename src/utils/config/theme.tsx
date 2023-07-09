import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customTypography: {
      metroPolis: string;
    };
    text: {
      light: string;
      primary: string;
      secondary: string;
      dark: string;
      inter100sub: string;
      label: string;
      tableHeader: string;
      neutralLight: string;
      darkBlack: string;
      profileColor: string;
      tagColor: string;
      lightBlue: string;
      grayLightColor: string;
      darkGrey: string;
    };
    calendar: {
      red: string;
      blue: string;
      pink: string;
      orange: string;
      contrastText: string;
    };
    graph: {
      contrastText: string;
      backgroundColor: string;
      primary: string;
      secondary: string;
      gradientBackgroundColor: string;
    };
    misc: {
      selectedBlue: string;
      deleteRed: string;
      statusBlue: string;
      pendingBlue: string;
      cowbellYellow: string;
      success: string;
      inactive: string;
      warning: string;
      new: string;
      cardRed: string;
      activeGreen: string;
      inActiveLight: string;
      cardBG: string;
      borderColor: string;
      misctext1: string;
      navBorder: string;
      inputBorderColor: string;
      gray: string;
      inputLabelDark: string;
      errorColor: string;
      lightGrayBG: string;
      darkGray: string;
      lightGray: string;
      darkPurple: string;
      mainBackgroundColor: string;
      naturalLight: string;
      mediumGrey: string;
      lightAsSilver: string;
      focusedBorder: string;
      darkRed: string;
      darkBlack: string;
      dropDownText: string;
      inputPlaceholder: string;
      darkBlue: string;
      leafGreen: string;
      backgroundSilver: string;
      darkGreen: string;
      infoBackground: string;
      backgroundBlue?: string;
      greyBorder?: string;
      toolTip?: string;
      badgeBlue?: string;
      subHeaderGray: string;
      navyBlue: string;
      skyBlue: string;
      lightRed: string;
      lightSkyBlue: string;
      orangeBg: string;
      matRed?: string;
      red?: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customTypography?: {
      metroPolis?: string;
    };
    text?: {
      light?: string;
      primary?: string;
      secondary?: string;
      dark?: string;
      inter100sub?: string;
      label?: string;
      tableHeader?: string;
      neutralLight?: string;
      darkBlack?: string;
      profileColor?: string;
      tagColor?: string;
      lightBlue?: string;
      grayLightColor?: string;
      darkGrey?: string;
    };
    calendar?: {
      red?: string;
      blue?: string;
      pink?: string;
      orange?: string;
      contrastText?: string;
    };
    graph?: {
      contrastText?: string;
      backgroundColor?: string;
      primary?: string;
      secondary?: string;
      gradientBackgroundColor?: string;
    };
    misc?: {
      selectedBlue?: string;
      deleteRed?: string;
      statusBlue?: string;
      pendingBlue?: string;
      cowbellYellow?: string;
      success?: string;
      inactive?: string;
      warning?: string;
      new?: string;
      cardRed?: string;
      activeGreen?: string;
      inActiveLight?: string;
      cardBG?: string;
      borderColor?: string;
      misctext1?: string;
      navBorder?: string;
      inputBorderColor?: string;
      gray?: string;
      inputLabelDark?: string;
      errorColor?: string;
      lightGrayBG?: string;
      darkGray?: string;
      lightGray?: string;

      darkPurple?: string;
      mainBackgroundColor?: string;
      naturalLight?: string;
      mediumGrey?: string;
      lightAsSilver?: string;
      focusedBorder?: string;
      darkRed?: string;
      darkBlack?: string;
      dropDownText?: string;
      inputPlaceholder?: string;
      darkBlue?: string;
      leafGreen?: string;
      backgroundSilver?: string;
      darkGreen?: string;
      infoBackground?: string;
      backgroundBlue?: string;
      greyBorder?: string;
      toolTip?: string;
      badgeBlue?: string;
      subHeaderGray?: string;
      navyBlue?: string;
      skyBlue?: string;
      lightRed?: string;
      lightSkyBlue?: string;
      orangeBg?: string;
      matRed?: string;
      red?: string;
    };
  }
  interface TypographyVariants {
    inputValue?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    inputValue?: React.CSSProperties;
  }

  interface TypographyVariants {
    imageHeader?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    imageHeader?: React.CSSProperties;
  }
  interface TypographyVariants {
    h7?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
  }
}

const buttonStyles = {
  fontWeight: 400,
  lineHeight: '24px',
  textTransform: 'none',
};

/**
 * Changes the padding values based on the size of the owner of the filter.
 * @param {any} ownerState - the state of the owner of the filter.
 * @returns {string} - the new padding values.
 */
const changePaddingValues = (ownerState: any) => {
  if (ownerState.size === 'medium') {
    return '8px 25px';
  }
  if (ownerState.size === 'large') {
    return '12px 25px';
  }
  return '4px 15px';
};

export const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' &&
            ownerState.variant === 'contained' && {
              ...buttonStyles,
              padding: changePaddingValues(ownerState),
              fontSize: ownerState.size === 'small' ? 14 : 16,
              backgroundColor: theme.misc.darkBlue,
              color: '#FFFFFF',
              border: '1px solid #343434',
              boxShadow: `0px 3px 2px -2px rgba(0, 0, 0, 0.06), 0px 5px 3px -2px rgba(0, 0, 0, 0.02)`,
              '&:hover': {
                background: '#717171',
                border: '1px solid #717171',
              },
              '&:disabled': {
                background: '#ECECEC',
                color: `#C0C0C0`,
                cursor: 'not-allowed',
                pointerEvents: 'auto',
                border: '1px solid #ECECEC',
              },
              '&:active': {
                boxShadow: `0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #3069FE`,
                border: '1px solid #343434',
              },
            }),
          ...(ownerState.color === 'primary' &&
            ownerState.variant === 'outlined' && {
              ...buttonStyles,
              padding: changePaddingValues(ownerState),
              fontSize: ownerState.size === 'small' ? 14 : 16,
              backgroundColor: '#FFFFFF',
              color: '#222222',
              border: '1px solid #717171',
              '&:hover': {
                background: '#ECECEC',
                border: `1px solid #DDDDDD`,
              },
              '&:disabled': {
                background: '#FFFFFF',
                color: '#C0C0C0',
                border: `1px solid #F7F7F7`,
                cursor: 'not-allowed',
                pointerEvents: 'auto',
              },
              '&:active': {
                border: `1px solid #DDDDDD`,
                boxShadow: `0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #332233`,
              },
            }),
          ...(ownerState.color === 'primary' &&
            ownerState.variant === 'text' && {
              ...buttonStyles,
              padding: 0,
              fontSize: ownerState.size === 'small' ? 14 : 16,
              color: '#343434',
              border: 'none',
              '&:hover': {
                color: '#EB4C60',
                background: 'none',
              },
              '&:disabled': {
                color: '#C0C0C0',
                cursor: 'not-allowed',
                pointerEvents: 'auto',
              },
            }),
        }),
      },
    },
  },
  spacing: (value: number) => value * 2,
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: '125%',
      color: '#222222',
    },
    h2: {
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '125%',
      color: '#222222',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '125%',
      color: '#222222',
    },
    h4: {
      fontSize: '21px',
      fontWeight: 500,
      lineHeight: '125%',
      color: '#222222',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '125%',
      color: '#222222',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '125%',
      // color: '#222222',
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '125%',
      color: '#222222',
    },
    subtitle2: {
      fontSize: '13px',
      fontWeight: 600,
      lineHeight: '125%',
      color: '#222222',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '145%',
      color: '#222222',
    },
    body2: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '115%',
      color: '#222222',
    },
    caption: {
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: '115%',
      // color: '#222222',
    },
    inputValue: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '145%',
      color: '#222222',
    },
    button: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    imageHeader: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '125%',
    },
  },
  customTypography: {
    metroPolis: ['Metropolis', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      light: '#E7E7E7',
      main: '#222222',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#F7F7F7',
      main: '#DBDBDB',
      dark: '#717171',
      contrastText: '#222222',
    },
    success: {
      main: '#03D103',
    },
    error: {
      main: '#DE350B',
    },
  },
  text: {
    primary: '#222222',
    secondary: '#333333',
    light: '#717171',
    dark: '#000000',
    inter100sub: '#b0abab',
    label: '#484848',
    tableHeader: '#6B778C',
    neutralLight: '#091E42',
    darkBlack: '#111111',
    profileColor: '#505050',
    tagColor: '#42526E',
    lightBlue: '#2F80ED',
    grayLightColor: '#595959',
    darkGrey: '#717171',
  },
  calendar: {
    red: '#EB4C60',
    blue: '#D4E4F9',
    pink: '#F9D4D4',
    orange: '#F9DDD4',
    contrastText: '#000000',
  },
  graph: {
    contrastText: '#ffffff',
    backgroundColor: '#000000',
    primary: '#73D5F4',
    secondary: '#FFFFFF',
    gradientBackgroundColor: '#C4C4C4',
  },
  misc: {
    selectedBlue: '#2F80ED',
    deleteRed: '#FF0000',
    statusBlue: '#00C2FF',
    pendingBlue: '#2D9CDB',
    cowbellYellow: '#FFE380',
    success: '#27AE60',
    inactive: '#BDBDBD',
    warning: '#F2BC54',
    new: '#717171',
    cardRed: '#EB4C60',
    activeGreen: '#36CE01',
    inActiveLight: '#2ECA45',
    cardBG: '#F8F8F8',
    borderColor: '#DDDDDD',
    misctext1: '#484848',
    navBorder: '#E4E4E4',
    gray: '#E0E0E0',
    inputLabelDark: '#484848',
    errorColor: '#d32f2f',
    darkGray: '#B0B0B0',
    inputBorderColor: '#B0B0B0',
    lightGray: '#969696',
    lightGrayBG: '#F1F1F1',
    darkPurple: '#5F1AA5',
    mainBackgroundColor: '#E5E5E5',
    naturalLight: '#DFE1E6',
    mediumGrey: '#D9D9D9',
    lightAsSilver: '#FAFBFC',
    focusedBorder: '#4C9AFF',
    darkRed: '#DE350B',
    darkBlack: '#111111',
    dropDownText: '#172B4D',
    inputPlaceholder: '#7A869A',
    darkBlue: '#343434',
    leafGreen: '#79F2C0',
    backgroundSilver: '#EBECF0',
    darkGreen: '#006644',
    infoBackground: '#FFF2DA',
    backgroundBlue: '#39A1FF',
    greyBorder: '#ECECEC',
    toolTip: '#445275',
    badgeBlue: '#56CCF2',
    subHeaderGray: '#828282',
    skyBlue: '#B3D4FF',
    navyBlue: '#0747A6',
    lightRed: '#FFBDAD',
    lightSkyBlue: '#eaf2fd',
    orangeBg: '#EB5757',
    matRed: '#810010',
    red: '#EB344B',
  },
});

interface IProps {
  children: React.ReactNode;
}

/**
 * A custom Material UI theme provider that can be used to override the default theme.
 * @param {IProps} props - The props to pass to the theme provider.
 * @returns None
 */
export function CustomMuiThemeProvider({ children }: IProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    inputValue: true;
    imageHeader: true;
  }
}
