'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rmEmojiPicker = require('rm-emoji-picker');

var _rmEmojiPicker2 = _interopRequireDefault(_rmEmojiPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === undefined ? 'emoji' : _ref$label,
      _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? 'span' : _ref$tag,
      className = _ref.className,
      group = _ref.group;

  var picker = null;
  return {
    label: label,
    tag: tag,
    className: className,
    group: group,
    action: 'extra',
    onClick: function onClick(editor) {
      if (!picker) {
        var container = document.querySelector('[data-id="' + editor.id + '"]');
        var editable = container.querySelector('[data-selector="lite-editor"]');
        var _picker = new _rmEmojiPicker2.default({
          callback: function callback() {
            editor.onInput();
          }
        });
        _picker.listenOn(editor.e.target, container, editable);
        _picker.openPicker(editor.e);
      }
    }
  };
};

module.exports = exports['default'];