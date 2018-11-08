import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { colors } from "./colors";
import { sizes } from "./sizes";

type Theme = {
  sizes: {
    full: string;
    small: string;
  };
  breakpoints: {
    tablet: string;
    desktop: string;
  };
  colors: {
    primary: string;
    secondary: string;
    third: string;
    fourth: string;
  };
  combinations: {
    primary: {
      color: string;
      background: string;
    };
    secondary: {
      color: string;
      background: string;
    };
  };
};

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export const theme = {
  sizes: {
    full: sizes.full,
    small: sizes.small
  },
  breakpoints: {
    tablet: "768px",
    desktop: "1024px"
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
};

export { styled, css, createGlobalStyle, keyframes, ThemeProvider };
