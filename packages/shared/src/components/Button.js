"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _theme = require("../theme");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  letter-spacing: 1px;\n  border: none;\n  border-radius: 50px;\n  font-weight: 400;\n  text-transform: uppercase;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ", ";\n  color: ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 30px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 10px 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var large = (0, _theme.css)(_templateObject());
var medium = (0, _theme.css)(_templateObject2());
var small = (0, _theme.css)(_templateObject3());
var map = {
  large: large,
  medium: medium,
  small: small
};

var Button = _theme.styled.button(_templateObject4(), function (props) {
  return props.theme.combinations[props.color].background;
}, function (props) {
  return props.theme.combinations[props.color].color;
}, function (props) {
  return map[props.size];
});

exports.Button = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi50c3giXSwibmFtZXMiOlsibGFyZ2UiLCJjc3MiLCJtZWRpdW0iLCJzbWFsbCIsIm1hcCIsIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsInByb3BzIiwidGhlbWUiLCJjb21iaW5hdGlvbnMiLCJjb2xvciIsImJhY2tncm91bmQiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBTUEsS0FBSyxPQUFHQyxVQUFILG9CQUFYO0FBS0EsSUFBTUMsTUFBTSxPQUFHRCxVQUFILHFCQUFaO0FBSUEsSUFBTUUsS0FBSyxPQUFHRixVQUFILHFCQUFYO0FBSUEsSUFBTUcsR0FBRyxHQUFHO0FBQ1ZKLEVBQUFBLEtBQUssRUFBTEEsS0FEVTtBQUVWRSxFQUFBQSxNQUFNLEVBQU5BLE1BRlU7QUFHVkMsRUFBQUEsS0FBSyxFQUFMQTtBQUhVLENBQVo7O0FBTU8sSUFBTUUsTUFBTSxHQUFHQyxjQUFPQyxNQUFWLHFCQVNILFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkYsS0FBSyxDQUFDRyxLQUEvQixFQUFzQ0MsVUFBMUM7QUFBQSxDQVRGLEVBVVIsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCRixLQUFLLENBQUNHLEtBQS9CLEVBQXNDQSxLQUExQztBQUFBLENBVkcsRUFXZixVQUFDSCxLQUFEO0FBQUEsU0FBa0JKLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDSyxJQUFQLENBQXJCO0FBQUEsQ0FYZSxDQUFaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjc3MgfSBmcm9tIFwiLi4vdGhlbWVcIjtcblxudHlwZSBTaXplcyA9IFwibGFyZ2VcIiB8IFwibWVkaXVtXCIgfCBcInNtYWxsXCI7XG50eXBlIENvbG9ycyA9IFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2l6ZTogU2l6ZXM7XG4gIGNvbG9yOiBDb2xvcnM7XG59O1xuXG5jb25zdCBsYXJnZSA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbmA7XG5cbmNvbnN0IG1lZGl1bSA9IGNzc2BcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuYDtcblxuY29uc3Qgc21hbGwgPSBjc3NgXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuYDtcblxuY29uc3QgbWFwID0ge1xuICBsYXJnZSxcbiAgbWVkaXVtLFxuICBzbWFsbFxufTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29tYmluYXRpb25zW3Byb3BzLmNvbG9yXS5iYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29tYmluYXRpb25zW3Byb3BzLmNvbG9yXS5jb2xvcn07XG4gICR7KHByb3BzOiBQcm9wcykgPT4gbWFwW3Byb3BzLnNpemVdfTtcbmA7XG4iXX0=