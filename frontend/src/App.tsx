import React from "react";
import './main.css'
import LineInput from './components/LineInput'
import { InputProvider } from "./context/InputHandler";

function InsertedApp() {

    return React.createElement('div', null,
        React.createElement('h1', { className: 'text-lg underline bold' }, 'Go-markdown'),
        React.createElement(LineInput, {}, null)
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