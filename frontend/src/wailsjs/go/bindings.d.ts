export interface go {
  "main": {
    "App": {
		SaveFile(arg1:string):Promise<number>
    },
  }

}

declare global {
	interface Window {
		go: go;
	}
}
