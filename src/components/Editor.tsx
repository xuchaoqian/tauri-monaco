import { onCleanup, onMount } from 'solid-js';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.css';
import './applyWorker';

export const Editor = () => {
	let monacoEl: HTMLDivElement | undefined;
	let editor: monaco.editor.IStandaloneCodeEditor | null = null;

	onMount(() => {
		if (monacoEl) {
			editor = monaco.editor.create(monacoEl, {
				value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
				language: 'typescript'
			});
		}

		onCleanup(() => editor?.dispose());
	});

	return <div class={styles.Editor} ref={monacoEl}></div>;
};
