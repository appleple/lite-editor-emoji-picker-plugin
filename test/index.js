import LiteEditor from 'lite-editor';
import liteEditorEmoji from '../src';

const editor = new LiteEditor('.js-editor');
editor.registerButton(liteEditorEmoji());