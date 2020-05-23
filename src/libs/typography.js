import Typography from 'typography'
import '../styles/fonts/fonts.css'

export const fonts = {
  thin: 'Inter Thin',
  // thinItalic: 'Inter Thin Italic',
  light: 'Inter Light',
  // lightItalic: 'Inter Light Italic',
  regular: 'Inter Regular',
  // regularItalic: 'Inter Regular Italic',
  // medium: 'Inter Medium',
  // mediumItalic: 'Inter Medium Italic',
  semibold: 'Inter Semibold',
  // semiboldItalic: 'Inter Semibold Italic',
  bold: 'Inter Bold',
  // boldItalic: 'Inter Bold Italic',
  dank: 'Dank Mono',
}

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.light, 'sans-serif'],
  bodyFontFamily: [fonts.regular, 'sans-serif'],
  headerColor: 'rgba(0, 0, 32, 0.9)',
  bodyColor: 'rgba(0, 0, 32, 0.8)',

  overrideStyles: ({rhythm}) => ({
    pre: {
      fontFamily: fonts.dank,
    },
    body: {
      fontVariantLigatures: 'none',
    },
    h1: {
      fontFamily: fonts.semibold,
    },
    'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
      fontSize: 'inherit',
    },
    h2: {
      fontFamily: fonts.bold,
      fontSize: '1.7rem',
    },
    h4: {
      fontFamily: fonts.bold,
      fontSize: '1.2rem',
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
      letterSpacing: '-0.04rem',
      fontFamily: fonts.semibold,
    },
    strong: {
      fontFamily: fonts.bold,
      fontStyle: 'bold',
    },
  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const {rhythm} = typography
export const {scale} = typography
