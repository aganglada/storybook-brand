"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 30px;\n  padding: 5px 10px;\n  border-right: 1px solid;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid;\n  border-radius: 3px;\n  display: inline-flex;\n  align-items: center;\n  background-color: white;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject());

var Visual = _styledComponents.default.span(_templateObject2());

var Value = _styledComponents.default.span(_templateObject3());

function Space(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return _react.default.createElement(Wrapper, null, _react.default.createElement(Visual, {
    value: value
  }, value), _react.default.createElement(Value, null, children));
}

var _default = Space;
exports.default = _default;