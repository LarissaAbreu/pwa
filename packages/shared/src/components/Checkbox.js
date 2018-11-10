"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("../icons");

var _Label = require("./Opcionable/Label");

var _Group = require("./Opcionable/Group");

var _Input = require("./Opcionable/Input");

var _IconWrapper = require("./Opcionable/IconWrapper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["id", "text"]);

  return _react.default.createElement(_Group.Group, null, _react.default.createElement(_Input.Input, _extends({
    id: id,
    name: id
  }, props, {
    type: "checkbox"
  })), _react.default.createElement(_Label.Label, {
    htmlFor: id
  }, text, _react.default.createElement(_IconWrapper.IconWrapper, {
    icon: _icons.icons.check
  })));
};

exports.Checkbox = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoZWNrYm94LnRzeCJdLCJuYW1lcyI6WyJDaGVja2JveCIsImlkIiwidGV4dCIsInByb3BzIiwiaWNvbnMiLCJjaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNEI7QUFBQSxNQUF6QkMsRUFBeUIsUUFBekJBLEVBQXlCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQVpDLEtBQVk7O0FBQ2xELFNBQ0UsNkJBQUMsWUFBRCxRQUNFLDZCQUFDLFlBQUQ7QUFBTyxJQUFBLEVBQUUsRUFBRUYsRUFBWDtBQUFlLElBQUEsSUFBSSxFQUFFQTtBQUFyQixLQUE2QkUsS0FBN0I7QUFBb0MsSUFBQSxJQUFJLEVBQUM7QUFBekMsS0FERixFQUdFLDZCQUFDLFlBQUQ7QUFBTyxJQUFBLE9BQU8sRUFBRUY7QUFBaEIsS0FDR0MsSUFESCxFQUdFLDZCQUFDLHdCQUFEO0FBQWEsSUFBQSxJQUFJLEVBQUVFLGFBQU1DO0FBQXpCLElBSEYsQ0FIRixDQURGO0FBV0QsQ0FaTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgaWNvbnMgfSBmcm9tIFwiLi4vaWNvbnNcIjtcblxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi9PcGNpb25hYmxlL0xhYmVsXCI7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuL09wY2lvbmFibGUvR3JvdXBcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vT3BjaW9uYWJsZS9JbnB1dFwiO1xuaW1wb3J0IHsgSWNvbldyYXBwZXIgfSBmcm9tIFwiLi9PcGNpb25hYmxlL0ljb25XcmFwcGVyXCI7XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveCA9ICh7IGlkLCB0ZXh0LCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEdyb3VwPlxuICAgICAgPElucHV0IGlkPXtpZH0gbmFtZT17aWR9IHsuLi5wcm9wc30gdHlwZT1cImNoZWNrYm94XCIgLz5cblxuICAgICAgPExhYmVsIGh0bWxGb3I9e2lkfT5cbiAgICAgICAge3RleHR9XG5cbiAgICAgICAgPEljb25XcmFwcGVyIGljb249e2ljb25zLmNoZWNrfSAvPlxuICAgICAgPC9MYWJlbD5cbiAgICA8L0dyb3VwPlxuICApO1xufTtcbiJdfQ==