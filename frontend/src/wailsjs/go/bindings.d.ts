export interface go {
  "main": {
    "App": {
		OpenFile():Promise<string>
		SaveFile(arg1:string):Promise<number>
    },
  }

}

declare global {
	interface Window {
		go: go;
	}
}
