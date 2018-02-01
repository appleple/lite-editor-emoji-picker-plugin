import EmojiPicker from "rm-emoji-picker";

const defaultCategories = [
  {
    title: "People",
    icon: '<i class="fa fa-smile-o" aria-hidden="true"></i>'
  },
  {
    title: "Nature",
    icon: '<i class="fa fa-leaf" aria-hidden="true"></i>'
  },
  {
    title: "Foods",
    icon: '<i class="fa fa-cutlery" aria-hidden="true"></i>'
  },
  {
    title: "Activity",
    icon: '<i class="fa fa-futbol-o" aria-hidden="true"></i>'
  },
  {
    title: "Places",
    icon: '<i class="fa fa-globe" aria-hidden="true"></i>'
  },
  {
    title: "Symbols",
    icon: '<i class="fa fa-lightbulb-o" aria-hidden="true"></i>'
  },
  {
    title: "Flags",
    icon: '<i class="fa fa-flag-checkered" aria-hidden="true"></i>'
  }
];

const fireClick = (node) => {
  if (document.createEvent) {
    const evt = document.createEvent('MouseEvents');
    evt.initEvent('click', true, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick == 'function') {
    node.onclick();
  }
}

export default ({
    label = 'emoji', group, categories = defaultCategories
}) => {
  let picker = null;
  return {
    label,
    group,
    action: 'extra',

    onClick: (editor) => {
      const e = editor.e;
      const target = e.target;
      if (!picker) {
        const container = document.querySelector(`[data-id="${editor.id}"]`);
        const editable = container.querySelector('[data-selector="lite-editor"]');
        const picker = new EmojiPicker({
          callback: () => {
            editor.onInput();
          },
          categories
        });
        picker.listenOn(target, container, editable);
        fireClick(target);
      }
    }
  }
};