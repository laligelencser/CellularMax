import { Grid } from "./model/grid";
import { appState } from "./appState";
import { setRectConnection } from "./connectionManager";
import { render } from "./render/render";
import { setNextState } from "./stateManager";

export const init = (rootElement: HTMLElement) => {
	const gridWidth = 30;
	const gridHeight = 30;
	appState.rectWidth = Math.floor(rootElement.clientWidth / gridWidth);
	appState.rectHeight = Math.floor(rootElement.clientHeight / gridHeight);
	appState.grid = new Grid();
	appState.grid.cells = appState.grid.createGrid(gridWidth, gridHeight);

	appState.canvas = createCanvas(rootElement.clientWidth, rootElement.clientHeight);
	registerCanvasClickEvent();
	rootElement.appendChild(appState.canvas);
	setRectConnection(appState.grid, 1);
	render();
	if (!appState.isPaused) {
		update();
	}
}

export const createCanvas = (width: number, height: number): HTMLCanvasElement => {
	let canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	return canvas;
}

export const play = () => {
	if(appState.isPaused){
		appState.isPaused = false;
		update();
	} else{
		appState.isPaused = true;
	}
}

export const update = () => {
	setNextState(appState.grid);
	render();
	console.log('updated', 'paused: ' + appState.isPaused);
	if (!appState.isPaused) {
		setTimeout(update, 1000);
	}
}

function registerCanvasClickEvent() {
	function canvasClick(e: MouseEvent){
		let xOffset = appState.canvas.getBoundingClientRect().left;
		let rowIndex = Math.floor(e.clientY / appState.rectHeight);
		let columnIndex = Math.floor((e.clientX - xOffset) / appState.rectWidth);
		appState.grid.flipCellValue(rowIndex, columnIndex);
		render();
	}
	appState.canvas.onclick = canvasClick;
}