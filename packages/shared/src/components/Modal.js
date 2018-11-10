"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 5px;\n  padding: 30px;\n  text-align: center;\n  left: 50%;\n  top: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100vh - 50px);\n  background: rgb(0, 0, 0, 0.8);\n  position: relative;\n  z-index: 1200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: absolute;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-bottom: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Description = _theme.styled.p(_templateObject(), function (props) {
  return props.theme.colors.secondary;
});

var Overlay = _theme.styled.div(_templateObject2());

var Wrapper = _theme.styled.div(_templateObject3(), function (props) {
  return props.theme.colors.primary;
});

var ConfirmButton = (0, _theme.styled)(_Button.Button)(_templateObject4());

var Modal = function Modal(_ref) {
  var buttonWasClicked = _ref.buttonWasClicked,
      description = _ref.description,
      props = _objectWithoutProperties(_ref, ["buttonWasClicked", "description"]);

  return _react.default.createElement(Overlay, props, _react.default.createElement(Wrapper, null, _react.default.createElement(Description, null, description), _react.default.createElement(ConfirmButton, {
    onClick: buttonWasClicked,
    size: "medium",
    color: "primary"
  }, "Ok")));
};

exports.Modal = Modal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsLnRzeCJdLCJuYW1lcyI6WyJEZXNjcmlwdGlvbiIsInN0eWxlZCIsInAiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwiT3ZlcmxheSIsImRpdiIsIldyYXBwZXIiLCJwcmltYXJ5IiwiQ29uZmlybUJ1dHRvbiIsIkJ1dHRvbiIsIk1vZGFsIiwiYnV0dG9uV2FzQ2xpY2tlZCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxjQUFPQyxDQUFWLG9CQUNOLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsU0FBdkI7QUFBQSxDQURDLENBQWpCOztBQUtBLElBQU1DLE9BQU8sR0FBR04sY0FBT08sR0FBVixvQkFBYjs7QUFhQSxJQUFNQyxPQUFPLEdBQUdSLGNBQU9PLEdBQVYscUJBQ0csVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CSyxPQUF2QjtBQUFBLENBRFIsQ0FBYjs7QUFXQSxJQUFNQyxhQUFhLEdBQUcsbUJBQU9DLGNBQVAsQ0FBSCxvQkFBbkI7O0FBU08sSUFBTUMsS0FBdUIsR0FBRyxTQUExQkEsS0FBMEIsT0FJMUI7QUFBQSxNQUhYQyxnQkFHVyxRQUhYQSxnQkFHVztBQUFBLE1BRlhDLFdBRVcsUUFGWEEsV0FFVztBQUFBLE1BRFJaLEtBQ1E7O0FBQ1gsU0FDRSw2QkFBQyxPQUFELEVBQWFBLEtBQWIsRUFDRSw2QkFBQyxPQUFELFFBQ0UsNkJBQUMsV0FBRCxRQUFjWSxXQUFkLENBREYsRUFHRSw2QkFBQyxhQUFEO0FBQWUsSUFBQSxPQUFPLEVBQUVELGdCQUF4QjtBQUEwQyxJQUFBLElBQUksRUFBQyxRQUEvQztBQUF3RCxJQUFBLEtBQUssRUFBQztBQUE5RCxVQUhGLENBREYsQ0FERjtBQVdELENBaEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbidcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJy4uL3RoZW1lJztcblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEyMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5gXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5gXG5cbmNvbnN0IENvbmZpcm1CdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgbWFyZ2luLXRvcDogMTBweDtcbmBcblxudHlwZSBQcm9wcyA9IHtcbiAgYnV0dG9uV2FzQ2xpY2tlZDogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IE1vZGFsOiBSZWFjdC5TRkM8UHJvcHM+ID0gKHtcbiAgYnV0dG9uV2FzQ2xpY2tlZCxcbiAgZGVzY3JpcHRpb24sXG4gIC4uLnByb3BzXG59OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxPdmVybGF5IHsuLi5wcm9wc30+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L0Rlc2NyaXB0aW9uPlxuXG4gICAgICAgIDxDb25maXJtQnV0dG9uIG9uQ2xpY2s9e2J1dHRvbldhc0NsaWNrZWR9IHNpemU9XCJtZWRpdW1cIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICBPa1xuICAgICAgICA8L0NvbmZpcm1CdXR0b24+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9PdmVybGF5PlxuICApXG59XG4iXX0=