import React, { createContext, useMemo, FC, useCallback, useContext, useState, ReactNode } from 'react'
import { Line } from '../models/line'

type Props = {
    children : ReactNode
}
export const InputProvider: FC<Props> = (props: Props) => {

    const [blocks, setBlocks] = useState<Line[]>([{type: "h1", value: ""}])

    const handleInput = useCallback((event: any) => {
        if (event.key === 'Enter') {
            // TODO detect line md tag (#, *, -, ...)
            const obj: Line = {
                type: 'h1',
                value: event.target.value
            }
            event.target.value = '';
            setBlocks([...blocks, obj])
        }
    }, [setBlocks, blocks])

    const api: any = useMemo(() => ({
        handleInput, blocks, setBlocks
    }), [handleInput, blocks, setBlocks])

   return (
       <InputContext.Provider value={api}>{props.children}</InputContext.Provider>
   )
}

const InputContext = createContext<any>({});

export const useInputHandlerContext = () => useContext(InputContext)