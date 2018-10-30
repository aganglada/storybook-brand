"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Colour", {
  enumerable: true,
  get: function get() {
    return _Colour.default;
  }
});
Object.defineProperty(exports, "Space", {
  enumerable: true,
  get: function get() {
    return _Space2.default;
  }
});
Object.defineProperty(exports, "Font", {
  enumerable: true,
  get: function get() {
    return _Font.default;
  }
});
exports.Utils = void 0;

var _Space = _interopRequireDefault(require("./components/utils/Space"));

var _Colour = _interopRequireDefault(require("./components/Colour"));

var _Space2 = _interopRequireDefault(require("./components/Space"));

var _Font = _interopRequireDefault(require("./components/Font"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utils = {
  Space: _Space.default
};
exports.Utils = Utils;