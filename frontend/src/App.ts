import React from "react";
import './index.css'

function App() {
    return React.createElement("div", null,
        React.createElement("h1", {className: "text-3xl font-bold underline"},
            "Hello World"
        ), React.createElement("p", null, "It is I, Kasper")
    )
}

export default App;