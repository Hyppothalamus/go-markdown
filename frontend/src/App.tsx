import React from "react";
import './main.css'
import LineInput from './components/LineInput'
import { InputProvider, useInputHandlerContext } from "./context/InputHandler";
import MarkdownView from "react-showdown";

function InsertedApp() {

    const { markdown } = useInputHandlerContext();

    return React.createElement('div', null,
        React.createElement('h1', { className: 'text-lg underline bold' }, 'Go-markdown'),
        React.createElement(LineInput, {}, null),
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
