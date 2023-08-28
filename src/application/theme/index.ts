import 'styled-components'

const theme = {
  colors: {
    white: {
      default: '#ffffff',
      dark: '#d9d5d5',
    },
    grey: {
      default: '#272727',
      light: '#42705b',
      dark: '#120f0f',
    },
    black: {
      default: '#1b1b1b',
      light: '#404040',
      dark: '#080707',
    },
    blue: {
      default: '#b6d9db',
      light: '#C9F0F2',
      dark: '#7BB2B5',
    },
    green: {
      default: '#6f9785',
      light: '#7DB29A',
      dark: '#42705B',
    },
  },

  typography: {
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    fontScale: {
      small: '14px',
      p: '16px',
      h5: '18px',
      h4: '24px',
      h3: '28px',
      h2: '34px',
      h1: '40px',
    },
  },

  breakpoint: {
    mobile: '770px',
    tablet: '992px',
    desktop: '1200px',
  },
}

type AppTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

export default theme
