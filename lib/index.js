'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rmEmojiPicker = require('rm-emoji-picker');

var _rmEmojiPicker2 = _interopRequireDefault(_rmEmojiPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultCategories = [{
  title: 'People',
  icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-people" aria-hidden="true"></i>'
}, {
  title: 'Nature',
  icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-nature" aria-hidden="true"></i>'
}, {
  title: 'Foods',
  icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-food" aria-hidden="true"></i>'
}, {
  title: 'Activity',
  icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-activity" aria-hidden="true"></i>'
}, {
  title: 'Places',
  icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-place" aria-hidden="true"></i>'
}, {
  title: 'Symbols',
  icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-symbol" aria-hidden="true"></i>'
}, {
  title: 'Flags',
  icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-flag" aria-hidden="true"></i>'
}];

var fireClick = function fireClick(node) {
  if (document.createEvent) {
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', true, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

exports.default = function (_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === undefined ? 'emoji' : _ref$label,
      group = _ref.group,
      _ref$categories = _ref.categories,
      categories = _ref$categories === undefined ? defaultCategories : _ref$categories,
      _ref$default_footer_m = _ref.default_footer_message,
      default_footer_message = _ref$default_footer_m === undefined ? "Please select an emoji from the list above" : _ref$default_footer_m;

  var picker = null;
  return {
    label: label,
    group: group,
    action: 'extra',

    onClick: function onClick(editor) {
      if (!picker) {
        var e = editor.e;
        var target = e.target;
        var container = document.querySelector('[data-id="' + editor.id + '"]');
        var editable = container.querySelector('[data-selector="lite-editor"]');
        container.style.position = 'relative';
        picker = new _rmEmojiPicker2.default({
          callback: function callback() {
            editor.onInput();
          },
          default_footer_message: default_footer_message,
          categories: categories
        });
        picker.listenOn(target, container, editable);
        fireClick(target);
      }
    }
  };
};

module.exports = exports['default'];