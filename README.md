# Lite Editor Emoji Plugin

<img src="./screenshot.jpg">

## examples

[https://cdn.rawgit.com/appleple/lite-editor-emoji-plugin/b5d81cc5/test/index.html](https://cdn.rawgit.com/appleple/lite-editor-emoji-plugin/b5d81cc5/test/index.html)

## Installation

via npm
```shell
npm install lite-editor-emoji-picker-plugin --save
```

or yarn

```shell
yarn add lite-editor-emoji-picker-plugin
```

## Usage

```js
import LiteEditor from 'lite-editor';
import liteEditorEmojiPicker from 'lite-editor-emoji-picker-plugin';

const editor = new LiteEditor('.js-editor');
editor.registerButton(liteEditorEmojiPicker({
    label: 'emoji'
}));
```
