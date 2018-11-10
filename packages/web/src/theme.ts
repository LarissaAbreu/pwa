import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { Theme } from "@ondetempico/shared/src/theme";

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export {styled, css, keyframes, createGlobalStyle, ThemeProvider, Theme}
