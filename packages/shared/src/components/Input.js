"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = require("../theme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 5px;\n  top: 12px;\n  color: ", ";\n  pointer-events: none;\n  transition: 0.2s ease-out;\n  font-size: 14px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 0 5px;\n  border: none;\n  border-radius: 0;\n  height: 40px;\n  box-shadow: none;\n  border-bottom: 1px solid ", ";\n  outline: none;\n  cursor: text;\n  background: transparent;\n  color: ", ";\n  transition: 0.4s ease;\n  font-size: 14px;\n\n  &:focus ~ label,\n  &:valid ~ label {\n    top: -12px;\n    font-size: 12px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  padding: 0;\n  border: none;\n  overflow: visible;\n  margin-bottom: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Group = _theme.styled.div(_templateObject());

var Field = _theme.styled.input(_templateObject2(), function (props) {
  return props.theme.colors.fourth;
}, function (props) {
  return props.theme.colors.third;
});

var Label = _theme.styled.label(_templateObject3(), function (props) {
  return props.theme.colors.third;
});

var Input = function Input(_ref) {
  var text = _ref.text,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["text", "id"]);

  return React.createElement(Group, null, React.createElement(Field, _extends({
    id: id,
    name: id,
    type: "text"
  }, props)), React.createElement(Label, {
    htmlFor: id
  }, text));
};

exports.Input = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LnRzeCJdLCJuYW1lcyI6WyJHcm91cCIsInN0eWxlZCIsImRpdiIsIkZpZWxkIiwiaW5wdXQiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiZm91cnRoIiwidGhpcmQiLCJMYWJlbCIsImxhYmVsIiwiSW5wdXQiLCJ0ZXh0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxjQUFPQyxHQUFWLG1CQUFYOztBQVNBLElBQU1DLEtBQUssR0FBR0YsY0FBT0csS0FBVixxQkFPa0IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUF2QjtBQUFBLENBUHZCLEVBV0EsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxLQUF2QjtBQUFBLENBWEwsQ0FBWDs7QUFzQkEsSUFBTUMsS0FBSyxHQUFHVCxjQUFPVSxLQUFWLHFCQUlBLFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsS0FBdkI7QUFBQSxDQUpMLENBQVg7O0FBVU8sSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxFQUFULFFBQVNBLEVBQVQ7QUFBQSxNQUFnQlQsS0FBaEI7O0FBQUEsU0FDbkIsb0JBQUMsS0FBRCxRQUNFLG9CQUFDLEtBQUQ7QUFBTyxJQUFBLEVBQUUsRUFBRVMsRUFBWDtBQUFlLElBQUEsSUFBSSxFQUFFQSxFQUFyQjtBQUF5QixJQUFBLElBQUksRUFBQztBQUE5QixLQUF5Q1QsS0FBekMsRUFERixFQUVFLG9CQUFDLEtBQUQ7QUFBTyxJQUFBLE9BQU8sRUFBRVM7QUFBaEIsS0FBcUJELElBQXJCLENBRkYsQ0FEbUI7QUFBQSxDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICcuLi90aGVtZSc7XG5cbmNvbnN0IEdyb3VwID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbmBcblxuY29uc3QgRmllbGQgPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5mb3VydGh9O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHRleHQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGhpcmR9O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxuICAmOmZvY3VzIH4gbGFiZWwsXG4gICY6dmFsaWQgfiBsYWJlbCB7XG4gICAgdG9wOiAtMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbmBcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDEycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50aGlyZH07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xuICBmb250LXNpemU6IDE0cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9ICh7IHRleHQsIGlkLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxHcm91cD5cbiAgICA8RmllbGQgaWQ9e2lkfSBuYW1lPXtpZH0gdHlwZT1cInRleHRcIiB7Li4ucHJvcHN9IC8+XG4gICAgPExhYmVsIGh0bWxGb3I9e2lkfT57dGV4dH08L0xhYmVsPlxuICA8L0dyb3VwPlxuKVxuIl19