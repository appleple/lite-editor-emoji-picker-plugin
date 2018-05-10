'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rmEmojiPicker = require('rm-emoji-picker');

var _rmEmojiPicker2 = _interopRequireDefault(_rmEmojiPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var LiteEditorEmojiPicker = function () {
  function LiteEditorEmojiPicker(_ref) {
    var _ref$label = _ref.label,
        label = _ref$label === undefined ? '<i class="lite-editor-emoji-font lite-editor-emoji-font-smile"></i>' : _ref$label,
        group = _ref.group,
        _ref$categories = _ref.categories,
        categories = _ref$categories === undefined ? defaultCategories : _ref$categories,
        _ref$default_footer_m = _ref.default_footer_message,
        default_footer_message = _ref$default_footer_m === undefined ? 'Please select an emoji from the list above' : _ref$default_footer_m;

    _classCallCheck(this, LiteEditorEmojiPicker);

    this.label = label;
    this.group = group;
    this.categories = categories;
    this.default_footer_message = default_footer_message;
    this.action = 'extra';
    this.firstClicked = false;
  }

  _createClass(LiteEditorEmojiPicker, [{
    key: 'onInit',
    value: function onInit(editor, target) {
      var container = document.querySelector('[data-id="' + editor.id + '"]');
      var editable = container.querySelector('[data-selector="lite-editor"]');
      container.style.position = 'relative';
      this.editable = editable;
      this.editor = editor;
      this.container = container;
      this.target = target;
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var default_footer_message = this.default_footer_message,
          categories = this.categories,
          container = this.container,
          editable = this.editable,
          target = this.target,
          editor = this.editor;

      if (this.firstClicked) {
        return;
      }
      this.firstClicked = true;
      editor.saveSelection();
      var picker = new _rmEmojiPicker2.default({
        callback: function callback() {
          editor.onInput();
        },
        default_footer_message: default_footer_message,
        categories: categories
      });
      picker.listenOn(target, container, editable);
      editor.restoreSelection();
      picker.editor.selectLastNode();
      picker.picker_open = true;
      picker.openPicker(editor.e);
    }
  }, {
    key: 'onRender',
    value: function onRender(editor, target) {
      if (editor.data.showSource) {
        target.setAttribute('disabled', true);
      } else {
        target.removeAttribute('disabled');
      }
    }
  }]);

  return LiteEditorEmojiPicker;
}();

exports.default = LiteEditorEmojiPicker;
module.exports = exports['default'];