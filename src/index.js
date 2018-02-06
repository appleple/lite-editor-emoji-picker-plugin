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

export default ({
    label = 'emoji', group, categories = defaultCategories,
    default_footer_message = 'Please select an emoji from the list above'
}) => ({
  label,
  group,
  action: 'extra',
  onInit: (editor, target) => {
    const container = document.querySelector(`[data-id="${editor.id}"]`);
    const editable = container.querySelector('[data-selector="lite-editor"]');
    container.style.position = 'relative';
    const picker = new EmojiPicker({
      callback: () => {
        editor.onInput();
      },
      default_footer_message,
      categories
    });
    picker.listenOn(target, container, editable);
  }
});
