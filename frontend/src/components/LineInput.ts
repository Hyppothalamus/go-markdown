import React, { FC } from 'react';
import InputHandler from '../context/InputHandler';

const LineInput: FC = () => {

    const hInput = React.useContext(InputHandler)

    // TODO: move this to context to dynamically add blocks to entire App.ts
    function handleInput(event: KeyboardEvent) {
        hInput?.handleInput(event)
    }

    // TODO: remove all styling from textarea
    return React.createElement('textarea', {
        className: "block w-full border border-solid border-gray-300",
        onKeyUp: (e: KeyboardEvent) => {
            handleInput(e)
        }
    }, null)
}

export default LineInput;