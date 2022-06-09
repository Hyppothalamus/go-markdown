import { createContext, useMemo, FC, useCallback, useContext, useState, ReactNode } from 'react'
import { Line } from '../models/line'

type Props = {
    children : ReactNode
}
export const InputProvider: FC<Props> = (props: Props) => {

    const [blocks, setBlocks] = useState<Line[]>([{type: "h1", value: ""}])

    const handleInput = useCallback((event: any) => {
        if (event.key === 'Enter') {
            // TODO detect line md tag (#, *, -, ...)
            const value: string = event.target.value;
            const obj: Line = {
                type: '',
                value: value.split('\n')[0]
            }
            if (value.startsWith('#')) {
                // TODO check for multiple hashtags (smaller headings)
                // TODO remove tags from value but not now i am tired xD
                const amount = value.split('#').length - 1
                const realV = value.split('#'.repeat(amount))
                console.log('amount: %s -- splits: %s', amount, realV.join(' - '))

                if (realV[1].includes('#')) {}

                obj.value = obj.value.split('# ')[1]
                obj.type = "h1"
            } else obj.type = 'p'
            event.target.value = '';
            setBlocks([...blocks, obj])
        }
    }, [setBlocks, blocks])

    const saveCurrent = useCallback(() => {
        // TODO format lines and give them to go to store them with dialog
        const data = blocks.slice(1)
        window.go.main.App.SaveFile(data, "swakke.md").then((data: number) => {
            // TODO handle result from wails
            console.log(data)
        })
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
