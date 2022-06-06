export interface go {
  "main": {
    "App": {
		SaveFile(arg1:Array<Line>,arg2:string):Promise<number>
    },
  }

}

declare global {
	interface Window {
		go: go;
	}
}
