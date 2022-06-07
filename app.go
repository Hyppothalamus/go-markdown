package main

import (
	"context"
	"fmt"
	"os"
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

func (a *App) SaveFile(data []Line, name string) int {
	// not implemented
	// TODO remove trailing "\n"
	var res string
	for _, line := range data {
		// TODO handle all types of html.
		// tables will come later
		if line.Type == "p" {
			res = fmt.Sprintf("%s %s\n", res, line.Value)
		} else if line.Type == "h1" {
			res = fmt.Sprintf("%s # %s\n", res, line.Value)
		}
	}
	err := os.WriteFile("/tmp/temp1.md", []byte(res), 0644)
	if err != nil {
		fmt.Printf("error while writing file: %s\n", err)
	}
	fmt.Println("writing succesfull")
	return 0
}

type Line struct {
	Type  string
	Value string
}
