import React from "react";
import './main.css'
import LineInput from './components/LineInput'
import InputHandler, { InputHandlerClass } from "./context/InputHandler";

function InsertedApp() {

    return React.createElement('div', null,
        React.createElement('h1', { className: 'text-lg underline bold' }, 'Go-markdown'),
        React.createElement(LineInput, {}, null)
    )

}

function App() {

    return React.createElement(InputHandler.Provider, {value: new InputHandlerClass()},
        React.createElement(InsertedApp, {}, null)
        )
}

export default App;