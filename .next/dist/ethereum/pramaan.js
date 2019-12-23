'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _epramaan = require('./build/epramaan.json');

var _epramaan2 = _interopRequireDefault(_epramaan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_epramaan2.default.interface), '0xb4aed76dcB6D135677dB1fd21cDD146Ba3F655C1');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxwcmFtYWFuLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJlcHJhbWFhbiIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFxQixBQUFyQjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLG1CQUFTLEFBQXBCLEFBRGUsWUFDaUIsQUFEakIsQUFBakIsQUFHQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJwcmFtYWFuLmpzIiwic291cmNlUm9vdCI6IkY6L1Byb2plY3QxL0VQcmFtYWFuIn0=