import LiteEditor from 'lite-editor';
import liteEditorEmojiPicker from '../src';

const editor = new LiteEditor('.js-editor');
editor.registerButton(new liteEditorEmojiPicker({
  default_footer_message: '上から絵文字を選択してください'
}));