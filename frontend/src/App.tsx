import React from "react";
import './main.css'
import LineInput from './components/LineInput'
import { InputProvider, useInputHandlerContext } from "./context/InputHandler";
import { Line } from "./models/line";

function InsertedApp() {

    const { blocks, saveCurrent } = useInputHandlerContext();

    return React.createElement('div', null,
        React.createElement('h1', { className: 'text-lg underline bold' }, 'Go-markdown'),
        blocks.map((block: Line) => {return React.createElement(block.type, {key: block.value}, block.value)}),
        React.createElement(LineInput, {}, null),
        React.createElement('button', {onClick: () => {
            saveCurrent();
        }}, 'save')
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