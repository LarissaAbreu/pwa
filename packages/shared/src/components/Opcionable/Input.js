"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _theme = require("../../theme");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  &:checked ~ label {\n    color: ", ";\n  }\n\n  &:checked ~ label span {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _theme.styled.input(_templateObject(), function (props) {
  return props.theme.colors.third;
}, function (props) {
  return props.theme.colors.third;
});

exports.Input = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LnRzeCJdLCJuYW1lcyI6WyJJbnB1dCIsInN0eWxlZCIsImlucHV0IiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsInRoaXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsS0FBSyxHQUFHQyxjQUFPQyxLQUFWLG9CQUlMLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQUpBLEVBUUwsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBUkEsQ0FBWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCIuLi8uLi90aGVtZVwiO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgJjpjaGVja2VkIH4gbGFiZWwge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50aGlyZH07XG4gIH1cblxuICAmOmNoZWNrZWQgfiBsYWJlbCBzcGFuIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGhpcmR9O1xuICB9XG5gO1xuIl19