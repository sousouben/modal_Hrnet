"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  var closeModal = _ref.closeModal,
    message = _ref.message;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "bcgModal"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close",
    onClick: function onClick() {
      return closeModal(false);
    }
  }, " ", "X", " "), /*#__PURE__*/_react.default.createElement("p", null, message)));
}
var _default = Modal;
exports.default = _default;