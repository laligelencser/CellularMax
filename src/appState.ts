import { Grid } from "./model/grid";

interface AppState {
	grid: Grid,
	canvas: HTMLCanvasElement,
	rectWidth: number,
	rectHeight: number,
    isPaused: boolean,
    canvasWidth: number,
    canvasHeight: number,
    numberOfHorizontalCells: number,
    numberOfVerticalalCells: number,
    fps: number,
    callbackTime: number
}

export let appState: AppState = {
	grid: null,
	canvas: null,
	rectWidth: 0,
	rectHeight: 0,
    isPaused: true,
    canvasWidth: 0,
    canvasHeight: 0,
    numberOfHorizontalCells: 20,
    numberOfVerticalalCells: 20,
    fps: 24,
    callbackTime: Math.floor(1000 / 24)
};