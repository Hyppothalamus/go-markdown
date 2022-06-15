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
        window.go.main.App.SaveFile(markdown).then((data: number) => {
            // TODO handle result from wails
            // For example kind of poput with error message or succes
            console.log(data)
        })
    }, [markdown])

    const openFile = useCallback(() => {
        window.go.main.App.OpenFile().then((data: string) => {
            // TODO md doesnt work? need to fix
            // probably by reading line by line and adding incremental
            // line split up first add tag after add data?
            // this shit doesn't make any sense what the fuck kill me
            for (let s of data) {
                setMarkdown(markdown + s)
            } 
            console.log(markdown)
        })
    }, [setMarkdown, markdown])

    const api: any = useMemo(() => ({
        handleInput, markdown, setMarkdown, saveCurrent, openFile
    }), [handleInput, markdown, setMarkdown, saveCurrent, openFile])

   return (
       <InputContext.Provider value={api}>{props.children}</InputContext.Provider>
   )
}

const InputContext = createContext<any>({});

export const useInputHandlerContext = () => useContext(InputContext)
