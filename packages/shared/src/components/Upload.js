"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Upload = void 0;

var React = _interopRequireWildcard(require("react"));

var _Group = require("./Opcionable/Group");

var _Label = require("./Opcionable/Label");

var _Input = require("./Opcionable/Input");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Upload = function Upload(_ref) {
  var id = _ref.id,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["id", "text"]);

  return React.createElement(_Group.Group, null, React.createElement(_Input.Input, _extends({
    id: id,
    multiple: true,
    accept: "image/png, image/jpeg",
    type: "file"
  }, props)), React.createElement(_Label.Label, {
    htmlFor: id
  }, text));
};

exports.Upload = Upload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVwbG9hZC50c3giXSwibmFtZXMiOlsiVXBsb2FkIiwiaWQiLCJ0ZXh0IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQVFPLElBQU1BLE1BQXdCLEdBQUcsU0FBM0JBLE1BQTJCLE9BQW1DO0FBQUEsTUFBaENDLEVBQWdDLFFBQWhDQSxFQUFnQztBQUFBLE1BQTVCQyxJQUE0QixRQUE1QkEsSUFBNEI7QUFBQSxNQUFuQkMsS0FBbUI7O0FBQ3pFLFNBQ0Usb0JBQUMsWUFBRCxRQUNFLG9CQUFDLFlBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBRUYsRUFETjtBQUVFLElBQUEsUUFBUSxFQUFFLElBRlo7QUFHRSxJQUFBLE1BQU0sRUFBQyx1QkFIVDtBQUlFLElBQUEsSUFBSTtBQUpOLEtBS01FLEtBTE4sRUFERixFQVNFLG9CQUFDLFlBQUQ7QUFBTyxJQUFBLE9BQU8sRUFBRUY7QUFBaEIsS0FBcUJDLElBQXJCLENBVEYsQ0FERjtBQWFELENBZE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi9PcGNpb25hYmxlL0dyb3VwXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuL09wY2lvbmFibGUvTGFiZWxcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vT3BjaW9uYWJsZS9JbnB1dFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZ1xufTtcblxuZXhwb3J0IGNvbnN0IFVwbG9hZDogUmVhY3QuU0ZDPFByb3BzPiA9ICh7IGlkLCB0ZXh0LCAuLi5wcm9wcyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHcm91cD5cbiAgICAgIDxJbnB1dFxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG11bHRpcGxlPXt0cnVlfVxuICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxuICAgICAgICB0eXBlPXtgZmlsZWB9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG5cbiAgICAgIDxMYWJlbCBodG1sRm9yPXtpZH0+e3RleHR9PC9MYWJlbD5cbiAgICA8L0dyb3VwPlxuICApO1xufTtcbiJdfQ==