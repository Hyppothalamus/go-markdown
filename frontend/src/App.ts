import React from "react";
import './main.css'
import LineInput from './components/LineInput'

function App() {

    return React.createElement('div', null,
        React.createElement('h1', { className: 'text-lg underline bold' }, 'Go-markdown'),
        React.createElement(LineInput, {}, null)
    )
}

export default App;