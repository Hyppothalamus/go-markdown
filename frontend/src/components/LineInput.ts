import React, { FC } from 'react';

const LineInput: FC = () => {
    return React.createElement('textarea', {className: "block w-full border border-solid border-gray-300", placeholder: "Hello World"}, null)
}

export default LineInput;