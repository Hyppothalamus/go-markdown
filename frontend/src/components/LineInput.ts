import React, { FC } from 'react';

const LineInput: FC = () => {
    return React.createElement('textarea', {className: "block w-full border border-solid border-gray-300", placeholder: "Hello World", onChange: () => {
        // TODO: handle keypresses and after enters handle styling and add blocks
        console.log('hello world!')
    }}, null)
}

export default LineInput;