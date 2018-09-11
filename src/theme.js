import colors from './colors'
import sizes from './sizes'

const theme = {
  sizes: {
    full: sizes.full,
    small: sizes.small,
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px'
  },
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    third: colors.third,
    fourth: colors.fourth
  },
  combinations: {
    primary: {
      color: colors.primary,
      background: colors.secondary
    },
    secondary: {
      color: colors.secondary,
      background: colors.primary
    }
  }
}

export default theme
