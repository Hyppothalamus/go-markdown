import React, { FC } from 'react';
import { useInputHandlerContext } from '../context/InputHandler';

const LineInput: FC = () => {

    const { handleInput } = useInputHandlerContext()

    // TODO: remove all styling from textarea
    return React.createElement('textarea', {
        className: "block w-full border border-solid border-gray-300",
        onKeyUp: (e: any) => {
            handleInput(e)
        }
    }, null)

}

export default LineInput;