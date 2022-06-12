import React from "react";
import './main.css'
import LineInput from './components/LineInput'
import { InputProvider, useInputHandlerContext } from "./context/InputHandler";
import MarkdownView from "react-showdown";

function InsertedApp() {

    const { markdown, saveCurrent, openFile } = useInputHandlerContext();

    return React.createElement('div', null,
        React.createElement('h1', { className: 'text-lg underline bold' }, 'Go-markdown'),
        React.createElement(LineInput, {}, null),
        React.createElement('button', { className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded', onClick:() => {
            saveCurrent()
        }, }, 'Save'),
        React.createElement('button', { className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded', onClick:() => {
            openFile()
        }, }, 'Open File'),
        React.createElement(MarkdownView, {markdown: markdown, options: {tables: true, emoji: true}, flavor: 'github'}, null)
    )

}

function App() {

    return (
        <InputProvider>
            <InsertedApp />
        </InputProvider>
    )
}

export default App;
