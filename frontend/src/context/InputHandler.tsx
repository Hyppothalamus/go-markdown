import { createContext, useMemo, FC, useCallback, useContext, useState, ReactNode } from 'react'

type Props = {
    children : ReactNode
}
export const InputProvider: FC<Props> = (props: Props) => {

    const [markdown, setMarkdown] = useState<string>('');

    const handleInput = useCallback((event: any) => {
        // TODO handle tabs?
        // TODO add cursor
        console.log(event.key)
        if (event.key === 'Enter') {
            setMarkdown(markdown + '\n')
        } else if (event.key === 'Backspace') {
            setMarkdown(markdown.slice(0, -1))
        }
        else {
            setMarkdown(markdown + event.target.value)
            event.target.value = '';
        }
    }, [setMarkdown, markdown])

    const saveCurrent = useCallback(() => {
        // TODO format lines and give them to go to store them with dialog
        window.go.main.App.SaveFile(markdown).then((data: number) => {
            // TODO handle result from wails
            console.log(data)
        })
    }, [markdown])

    const api: any = useMemo(() => ({
        handleInput, markdown, setMarkdown, saveCurrent
    }), [handleInput, markdown, setMarkdown, saveCurrent])

   return (
       <InputContext.Provider value={api}>{props.children}</InputContext.Provider>
   )
}

const InputContext = createContext<any>({});

export const useInputHandlerContext = () => useContext(InputContext)
