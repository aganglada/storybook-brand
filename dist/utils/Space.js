"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var smallSpace = (0, _styledComponents.css)(_templateObject());
var mediumSpace = (0, _styledComponents.css)(_templateObject2());
var largeSpace = (0, _styledComponents.css)(_templateObject3());

var Wrapper = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.size === 'small' ? smallSpace : null;
}, function (props) {
  return props.size === 'medium' ? mediumSpace : null;
}, function (props) {
  return props.size === 'large' ? largeSpace : null;
});

function Space(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      children = _ref.children;
  return _react.default.createElement(Wrapper, {
    size: size
  }, children);
}

var _default = Space;
exports.default = _default;