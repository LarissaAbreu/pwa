"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _theme = require("../../theme");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: block;\n  text-align: left;\n  position: relative;\n  color: ", ";\n  cursor: pointer;\n  font-size: 14px;\n  border-bottom: 1px solid ", ";\n  padding: 10px 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _theme.styled.label(_templateObject(), function (props) {
  return props.theme.colors.third;
}, function (props) {
  return props.theme.colors.fourth;
});

exports.Label = Label;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxhYmVsLnRzeCJdLCJuYW1lcyI6WyJMYWJlbCIsInN0eWxlZCIsImxhYmVsIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsInRoaXJkIiwiZm91cnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsS0FBSyxHQUFHQyxjQUFPQyxLQUFWLG9CQUtQLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQUxFLEVBUVcsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxNQUF2QjtBQUFBLENBUmhCLENBQVgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRoaXJkfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5mb3VydGh9O1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbmA7XG4iXX0=