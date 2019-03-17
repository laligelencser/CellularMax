import { Grid } from "./model/grid";

interface AppState {
	grid: Grid,
	canvas: HTMLCanvasElement,
	rectWidth: number,
	rectHeight: number,
	isPaused: boolean
}

export let appState: AppState = {
	grid: null,
	canvas: null,
	rectWidth: 0,
	rectHeight: 0,
	isPaused: true
};