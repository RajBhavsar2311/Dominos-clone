"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEV_PLATFORM_COMPONENTS = exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
// import Button from '@tekion/tekion-components/atoms/Button';

var DEV_PLATFORM_COMPONENTS = 'DEV_PLATFORM_COMPONENTS';

// const TDevPlatformButton = () => <Button view={Button.VIEW.PRIMARY}>Dev Platform Button</Button>;
exports.DEV_PLATFORM_COMPONENTS = DEV_PLATFORM_COMPONENTS;
var Button = function Button() {
  return /*#__PURE__*/_react.default.createElement("button", null, "Hey, Button Here!");
};
exports.Button = Button;
