"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);

 function generateUniqueId() {
  return _crypto2.default.randomBytes(4).toString('HEX');
} exports.default = generateUniqueId;
