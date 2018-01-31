import EmojiPicker from "rm-emoji-picker";

export default ({
    label = 'emoji', tag = 'span', className, group
}) => {
  let picker = null; 
  return {
    label,
    tag,
    className,
    group,
    action: 'extra',
    onClick: (editor) => {
      if (!picker) {
        const container = document.querySelector(`[data-id="${editor.id}"]`);
        const editable = container.querySelector('[data-selector="lite-editor"]');
        const picker = new EmojiPicker();
        picker.listenOn(editor.e.target, container, editable);
        picker.openPicker(editor.e);
      }
    }
  }
};