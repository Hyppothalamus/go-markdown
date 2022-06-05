import * as React from 'react'

export class InputHandlerClass {

    constructor() { }

    public handleInput(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            console.log(event.key)
        }
    }

}

const InputHandler = React.createContext<InputHandlerClass | null>(null)

export default InputHandler