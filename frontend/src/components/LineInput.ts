import React, { FC } from 'react';

const LineInput: FC = () => {

    // TODO: move this to context to dynamically add blocks to entire App.ts
    function handleInput(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            console.log(event.key)
        }
    }

    return React.createElement('textarea', {
        className: "block w-full border border-solid border-gray-300",
        placeholder: "Hello World",
        onKeyUp: (e: KeyboardEvent) => {
            handleInput(e)
        }
    }, null)
}

export default LineInput;
