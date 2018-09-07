import colors from './colors'
import sizes from './sizes'

const theme = {
  sizes: {
    full: sizes.full,
    small: sizes.small,
  },
  colors: {
    primary: colors.primary,
    secondary: colors.secondary
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
