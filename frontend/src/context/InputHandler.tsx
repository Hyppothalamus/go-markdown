import React, { createContext, useMemo, FC, useCallback, useContext, useState, ReactNode } from 'react'

type Props = {
    children : ReactNode
}
export const InputProvider: FC<Props> = (props: Props) => {

    const [blocks, setBlocks] = useState([])

    const handleInput = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(event.key)
        }
    }, [])

    const api: any = useMemo(() => ({
        handleInput, blocks, setBlocks
    }), [handleInput, blocks, setBlocks])

   return (
       <InputContext.Provider value={api}>{props.children}</InputContext.Provider>
   )
}

const InputContext = createContext<any>({});

export const useInputHandlerContext = () => useContext(InputContext)