"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Loader = function Loader(_ref) {
  var text = _ref.text,
      props = _objectWithoutProperties(_ref, ["text"]);

  return _react.default.createElement("div", _extends({
    className: "loader"
  }, props), _react.default.createElement("i", {
    className: "loader__icon icon--loading"
  }), _react.default.createElement("p", {
    className: "loader__description"
  }, text));
};

exports.Loader = Loader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvYWRlci50c3giXSwibmFtZXMiOlsiTG9hZGVyIiwidGV4dCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFaQyxLQUFZOztBQUM1QyxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE0QkEsS0FBNUIsR0FDRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsSUFERixFQUVFO0FBQUcsSUFBQSxTQUFTLEVBQUM7QUFBYixLQUFvQ0QsSUFBcEMsQ0FGRixDQURGO0FBTUQsQ0FQTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IExvYWRlciA9ICh7IHRleHQsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiIHsuLi5wcm9wc30+XG4gICAgICA8aSBjbGFzc05hbWU9XCJsb2FkZXJfX2ljb24gaWNvbi0tbG9hZGluZ1wiIC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJsb2FkZXJfX2Rlc2NyaXB0aW9uXCI+e3RleHR9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==