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
                type: 'p',
                value: event.target.value
            }
            event.target.value = '';
            setBlocks([...blocks, obj])
        }
    }, [setBlocks, blocks])

    const saveCurrent = useCallback(() => {
        // TODO format lines and give them to go to store them with dialog
        console.log(JSON.stringify(blocks.slice(1)))
        window.go.main.App.SaveFile(blocks.slice(1), "swakke.md")
    }, [blocks])

    const api: any = useMemo(() => ({
        handleInput, saveCurrent, blocks, setBlocks
    }), [handleInput, saveCurrent, blocks, setBlocks])

   return (
       <InputContext.Provider value={api}>{props.children}</InputContext.Provider>
   )
}

const InputContext = createContext<any>({});

export const useInputHandlerContext = () => useContext(InputContext)