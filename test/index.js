import LiteEditor from 'lite-editor';
import liteEditorEmojiPicker from '../src';

const editor = new LiteEditor('.js-editor');
editor.registerButton(liteEditorEmojiPicker({
  label: '<i class="lite-editor-emoji-font lite-editor-emoji-font-people" aria-hidden="true"></i>'
}));