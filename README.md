# Lite Editor Emoji Plugin

<img src="./screenshot.jpg">

## Usage

```js
import LiteEditor from 'lite-editor';
import liteEditorEmojiPicker from '../src';

const editor = new LiteEditor('.js-editor');
editor.registerButton(liteEditorEmojiPicker({
    label: 'emoji'
}));
```
