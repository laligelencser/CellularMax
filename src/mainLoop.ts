import { Grid } from "./model/grid";
import { appState } from "./appState";
import { setRectConnection } from "./connectionManager";
import { render } from "./render/render";
import { setNextState } from "./stateManager";

export const init = (rootElement: HTMLElement) => {
	appState.rectWidth = Math.floor(rootElement.clientWidth / appState.numberOfHorizontalCells);
	appState.rectHeight = Math.floor(rootElement.clientHeight / appState.numberOfVerticalalCells);
	appState.grid = new Grid();
	appState.grid.cells = appState.grid.createGrid(appState.numberOfHorizontalCells, appState.numberOfVerticalalCells);

	appState.canvas = createCanvas(rootElement.clientWidth, rootElement.clientHeight);
	appState.canvas.onclick = canvasClick;
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
		setTimeout(update, appState.callbackTime);
	}
}

function canvasClick(e: MouseEvent){
    let xOffset = appState.canvas.getBoundingClientRect().left;
    let rowIndex = Math.floor(e.clientY / appState.rectHeight);
    let columnIndex = Math.floor((e.clientX - xOffset) / appState.rectWidth);
    appState.grid.flipCellValue(rowIndex, columnIndex);
    render();
}