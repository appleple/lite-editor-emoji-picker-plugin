import EmojiPicker from 'rm-emoji-picker';

const defaultCategories = [
  {
    title: 'People',
    icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-people" aria-hidden="true"></i>'
  },
  {
    title: 'Nature',
    icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-nature" aria-hidden="true"></i>'
  },
  {
    title: 'Foods',
    icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-food" aria-hidden="true"></i>'
  },
  {
    title: 'Activity',
    icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-activity" aria-hidden="true"></i>'
  },
  {
    title: 'Places',
    icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-place" aria-hidden="true"></i>'
  },
  {
    title: 'Symbols',
    icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-symbol" aria-hidden="true"></i>'
  },
  {
    title: 'Flags',
    icon: '<i class="lite-editor-emoji-font lite-editor-emoji-font-flag" aria-hidden="true"></i>'
  }
];

const fireClick = (node) => {
  if (document.createEvent) {
    const evt = document.createEvent('MouseEvents');
    evt.initEvent('click', true, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

export default ({
    label = 'emoji', group, categories = defaultCategories,
    default_footer_message =  "Please select an emoji from the list above"
}) => {
  let picker = null;
  return {
    label,
    group,
    action: 'extra',

    onInit: (editor, target) => {
      const container = document.querySelector(`[data-id="${editor.id}"]`);
      const editable = container.querySelector('[data-selector="lite-editor"]');
      container.style.position = 'relative';
      picker = new EmojiPicker({
        callback: (a) => {
          editor.onInput();
        },
        default_footer_message,
        categories
      });
      picker.listenOn(target, container, editable);
    }
  };
};
