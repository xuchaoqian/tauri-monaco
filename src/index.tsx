/* @refresh reload */
import { render } from "solid-js/web";
import { Editor } from './components/Editor';

render(() => <Editor />, document.getElementById("root") as HTMLElement);
