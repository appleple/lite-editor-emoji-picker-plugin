import LiteEditor from 'lite-editor';
import LiteEditorEmojiPicker from '../src';

const editor = new LiteEditor('.js-editor');
editor.registerButton(new LiteEditorEmojiPicker({
  default_footer_message: '上から絵文字を選択してください',
  sheets: {
    apple: 'https://github.com/RobertMenke/rm-emoji-picker/blob/master/sheets/sheet_apple_64_indexed_128.png?raw=true'
  }
}));
