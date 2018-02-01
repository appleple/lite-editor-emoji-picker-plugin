'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rmEmojiPicker = require('rm-emoji-picker');

var _rmEmojiPicker2 = _interopRequireDefault(_rmEmojiPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultCategories = [{
  title: 'People',
  icon: '<i class="fa fa-smile-o" aria-hidden="true"></i>'
}, {
  title: 'Nature',
  icon: '<i class="fa fa-leaf" aria-hidden="true"></i>'
}, {
  title: 'Foods',
  icon: '<i class="fa fa-cutlery" aria-hidden="true"></i>'
}, {
  title: 'Activity',
  icon: '<i class="fa fa-futbol-o" aria-hidden="true"></i>'
}, {
  title: 'Places',
  icon: '<i class="fa fa-globe" aria-hidden="true"></i>'
}, {
  title: 'Symbols',
  icon: '<i class="fa fa-lightbulb-o" aria-hidden="true"></i>'
}, {
  title: 'Flags',
  icon: '<i class="fa fa-flag-checkered" aria-hidden="true"></i>'
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
      categories = _ref$categories === undefined ? defaultCategories : _ref$categories;

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
        picker = new _rmEmojiPicker2.default({
          callback: function callback() {
            editor.onInput();
          },
          categories: categories
        });
        picker.listenOn(target, container, editable);
        fireClick(target);
      }
    }
  };
};

module.exports = exports['default'];