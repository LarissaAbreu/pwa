"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.keyframes = exports.createGlobalStyle = exports.css = exports.styled = exports.theme = void 0;

var styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = require("./colors");

var _sizes = require("./sizes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _ref = styledComponents,
    styled = _ref.default,
    css = _ref.css,
    keyframes = _ref.keyframes,
    createGlobalStyle = _ref.createGlobalStyle,
    ThemeProvider = _ref.ThemeProvider;
exports.ThemeProvider = ThemeProvider;
exports.createGlobalStyle = createGlobalStyle;
exports.keyframes = keyframes;
exports.css = css;
exports.styled = styled;
var theme = {
  sizes: {
    full: _sizes.sizes.full,
    small: _sizes.sizes.small
  },
  breakpoints: {
    tablet: "768px",
    desktop: "1024px"
  },
  colors: {
    primary: _colors.colors.primary,
    secondary: _colors.colors.secondary,
    third: _colors.colors.third,
    fourth: _colors.colors.fourth
  },
  combinations: {
    primary: {
      color: _colors.colors.primary,
      background: _colors.colors.secondary
    },
    secondary: {
      color: _colors.colors.secondary,
      background: _colors.colors.primary
    }
  }
};
exports.theme = theme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLnRzIl0sIm5hbWVzIjpbInN0eWxlZENvbXBvbmVudHMiLCJzdHlsZWQiLCJkZWZhdWx0IiwiY3NzIiwia2V5ZnJhbWVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJzaXplcyIsImZ1bGwiLCJzbWFsbCIsImJyZWFrcG9pbnRzIiwidGFibGV0IiwiZGVza3RvcCIsImNvbG9ycyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0aGlyZCIsImZvdXJ0aCIsImNvbWJpbmF0aW9ucyIsImNvbG9yIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7O1dBbUNJQSxnQjtJQUxPQyxNLFFBQVRDLE87SUFDQUMsRyxRQUFBQSxHO0lBQ0FDLFMsUUFBQUEsUztJQUNBQyxpQixRQUFBQSxpQjtJQUNBQyxhLFFBQUFBLGE7Ozs7OztBQUdLLElBQU1DLEtBQUssR0FBRztBQUNuQkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRUQsYUFBTUMsSUFEUDtBQUVMQyxJQUFBQSxLQUFLLEVBQUVGLGFBQU1FO0FBRlIsR0FEWTtBQUtuQkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLE1BQU0sRUFBRSxPQURHO0FBRVhDLElBQUFBLE9BQU8sRUFBRTtBQUZFLEdBTE07QUFTbkJDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxPQUFPLEVBQUVELGVBQU9DLE9BRFY7QUFFTkMsSUFBQUEsU0FBUyxFQUFFRixlQUFPRSxTQUZaO0FBR05DLElBQUFBLEtBQUssRUFBRUgsZUFBT0csS0FIUjtBQUlOQyxJQUFBQSxNQUFNLEVBQUVKLGVBQU9JO0FBSlQsR0FUVztBQWVuQkMsRUFBQUEsWUFBWSxFQUFFO0FBQ1pKLElBQUFBLE9BQU8sRUFBRTtBQUNQSyxNQUFBQSxLQUFLLEVBQUVOLGVBQU9DLE9BRFA7QUFFUE0sTUFBQUEsVUFBVSxFQUFFUCxlQUFPRTtBQUZaLEtBREc7QUFLWkEsSUFBQUEsU0FBUyxFQUFFO0FBQ1RJLE1BQUFBLEtBQUssRUFBRU4sZUFBT0UsU0FETDtBQUVUSyxNQUFBQSxVQUFVLEVBQUVQLGVBQU9DO0FBRlY7QUFMQztBQWZLLENBQWQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzdHlsZWRDb21wb25lbnRzIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVGhlbWVkU3R5bGVkQ29tcG9uZW50c01vZHVsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi9jb2xvcnNcIjtcbmltcG9ydCB7IHNpemVzIH0gZnJvbSBcIi4vc2l6ZXNcIjtcblxuZXhwb3J0IHR5cGUgVGhlbWUgPSB7XG4gIHNpemVzOiB7XG4gICAgZnVsbDogc3RyaW5nO1xuICAgIHNtYWxsOiBzdHJpbmc7XG4gIH07XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgdGFibGV0OiBzdHJpbmc7XG4gICAgZGVza3RvcDogc3RyaW5nO1xuICB9O1xuICBjb2xvcnM6IHtcbiAgICBwcmltYXJ5OiBzdHJpbmc7XG4gICAgc2Vjb25kYXJ5OiBzdHJpbmc7XG4gICAgdGhpcmQ6IHN0cmluZztcbiAgICBmb3VydGg6IHN0cmluZztcbiAgfTtcbiAgY29tYmluYXRpb25zOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgY29sb3I6IHN0cmluZztcbiAgICAgIGJhY2tncm91bmQ6IHN0cmluZztcbiAgICB9O1xuICAgIHNlY29uZGFyeToge1xuICAgICAgY29sb3I6IHN0cmluZztcbiAgICAgIGJhY2tncm91bmQ6IHN0cmluZztcbiAgICB9O1xuICB9O1xufTtcblxuY29uc3Qge1xuICBkZWZhdWx0OiBzdHlsZWQsXG4gIGNzcyxcbiAga2V5ZnJhbWVzLFxuICBjcmVhdGVHbG9iYWxTdHlsZSxcbiAgVGhlbWVQcm92aWRlclxufSA9IHN0eWxlZENvbXBvbmVudHMgYXMgVGhlbWVkU3R5bGVkQ29tcG9uZW50c01vZHVsZTxUaGVtZT47XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcbiAgc2l6ZXM6IHtcbiAgICBmdWxsOiBzaXplcy5mdWxsLFxuICAgIHNtYWxsOiBzaXplcy5zbWFsbFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIHRhYmxldDogXCI3NjhweFwiLFxuICAgIGRlc2t0b3A6IFwiMTAyNHB4XCJcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogY29sb3JzLnByaW1hcnksXG4gICAgc2Vjb25kYXJ5OiBjb2xvcnMuc2Vjb25kYXJ5LFxuICAgIHRoaXJkOiBjb2xvcnMudGhpcmQsXG4gICAgZm91cnRoOiBjb2xvcnMuZm91cnRoXG4gIH0sXG4gIGNvbWJpbmF0aW9uczoge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMucHJpbWFyeSxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9ycy5zZWNvbmRhcnlcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgY29sb3I6IGNvbG9ycy5zZWNvbmRhcnksXG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMucHJpbWFyeVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgc3R5bGVkLCBjc3MsIGNyZWF0ZUdsb2JhbFN0eWxlLCBrZXlmcmFtZXMsIFRoZW1lUHJvdmlkZXIgfTtcbiJdfQ==