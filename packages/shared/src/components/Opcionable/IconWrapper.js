"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrapper = void 0;

var _Icon = require("../Icon");

var _theme = require("../../theme");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  top: 50%;\n  transform: translateY(-50%);\n  position: absolute;\n  right: 10px;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconWrapper = (0, _theme.styled)(_Icon.Icon)(_templateObject(), function (props) {
  return props.theme.colors.primary;
});
exports.IconWrapper = IconWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb25XcmFwcGVyLnRzeCJdLCJuYW1lcyI6WyJJY29uV3JhcHBlciIsIkljb24iLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLFdBQVcsR0FBRyxtQkFBT0MsVUFBUCxDQUFILG9CQUtiLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsT0FBdkI7QUFBQSxDQUxRLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9JY29uXCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcblxuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkKEljb24pYFxuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG5gO1xuIl19