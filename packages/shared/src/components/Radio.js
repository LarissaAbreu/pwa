"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

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

var Radio = function Radio(_ref) {
  var id = _ref.id,
      name = _ref.name,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["id", "name", "text"]);

  return _react.default.createElement(_Group.Group, null, _react.default.createElement(_Input.Input, _extends({
    id: id,
    name: name
  }, props, {
    type: "radio"
  })), _react.default.createElement(_Label.Label, {
    htmlFor: id
  }, text, _react.default.createElement(_IconWrapper.IconWrapper, {
    icon: _icons.icons.check
  })));
};

exports.Radio = Radio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvLnRzeCJdLCJuYW1lcyI6WyJSYWRpbyIsImlkIiwibmFtZSIsInRleHQiLCJwcm9wcyIsImljb25zIiwiY2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQVNPLElBQU1BLEtBQXVCLEdBQUcsU0FBMUJBLEtBQTBCLE9BQXlDO0FBQUEsTUFBdENDLEVBQXNDLFFBQXRDQSxFQUFzQztBQUFBLE1BQWxDQyxJQUFrQyxRQUFsQ0EsSUFBa0M7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBbkJDLEtBQW1COztBQUM5RSxTQUNFLDZCQUFDLFlBQUQsUUFDRSw2QkFBQyxZQUFEO0FBQU8sSUFBQSxFQUFFLEVBQUVILEVBQVg7QUFBZSxJQUFBLElBQUksRUFBRUM7QUFBckIsS0FBK0JFLEtBQS9CO0FBQXNDLElBQUEsSUFBSSxFQUFDO0FBQTNDLEtBREYsRUFHRSw2QkFBQyxZQUFEO0FBQU8sSUFBQSxPQUFPLEVBQUVIO0FBQWhCLEtBQ0dFLElBREgsRUFHRSw2QkFBQyx3QkFBRDtBQUFhLElBQUEsSUFBSSxFQUFFRSxhQUFNQztBQUF6QixJQUhGLENBSEYsQ0FERjtBQVdELENBWk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGljb25zIH0gZnJvbSBcIi4uL2ljb25zXCI7XG5cbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4vT3BjaW9uYWJsZS9MYWJlbFwiO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi9PcGNpb25hYmxlL0dyb3VwXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL09wY2lvbmFibGUvSW5wdXRcIjtcbmltcG9ydCB7IEljb25XcmFwcGVyIH0gZnJvbSBcIi4vT3BjaW9uYWJsZS9JY29uV3JhcHBlclwiO1xuXG50eXBlIFByb3BzID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgZGVmYXVsdENoZWNrZWQ6IGJvb2xlYW5cbn07XG5cbmV4cG9ydCBjb25zdCBSYWRpbzogUmVhY3QuU0ZDPFByb3BzPiA9ICh7IGlkLCBuYW1lLCB0ZXh0LCAuLi5wcm9wcyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHcm91cD5cbiAgICAgIDxJbnB1dCBpZD17aWR9IG5hbWU9e25hbWV9IHsuLi5wcm9wc30gdHlwZT1cInJhZGlvXCIgLz5cblxuICAgICAgPExhYmVsIGh0bWxGb3I9e2lkfT5cbiAgICAgICAge3RleHR9XG5cbiAgICAgICAgPEljb25XcmFwcGVyIGljb249e2ljb25zLmNoZWNrfSAvPlxuICAgICAgPC9MYWJlbD5cbiAgICA8L0dyb3VwPlxuICApO1xufTtcbiJdfQ==