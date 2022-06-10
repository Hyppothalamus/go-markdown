package main

import (
	"context"
	"fmt"
	"os"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called at application startup
func (a *App) startup(ctx context.Context) {
	// Perform your setup here
	a.ctx = ctx
}

// domReady is called after the front-end dom has been loaded
func (a App) domReady(ctx context.Context) {
	// Add your action here
}

// shutdown is called at application termination
func (a *App) shutdown(ctx context.Context) {
	// Perform your teardown here
	// TODO save current progress in /tmp on programm crash
}

func (a *App) SaveFile(data string) int {
    // open file dialog
    fileName, err := runtime.SaveFileDialog(a.ctx, runtime.SaveDialogOptions{
        Title: "Save File",
        CanCreateDirectories: true,
    })
    if err != nil {
        fmt.Printf("error saving file?: %s\n", err)
        return 1
    }
    fmt.Printf("file from dialog: %s\n", fileName)
    err = os.WriteFile(fileName, []byte(data), 0644)
	if err != nil {
		fmt.Printf("error while writing file: %s\n", err)
        return 1
	}
	fmt.Println("writing succesfull")
	return 0
}

type Line struct {
	Type  string
	Value string
}
