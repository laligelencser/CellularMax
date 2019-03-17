import { Grid } from './model/grid';
import { render } from './render/render';
import { setRectConnection } from './connectionManager';
import { setNextState } from './stateManager';
import { Cell } from './model/cell';

export interface AppState {
	grid: Grid,
	canvas: HTMLCanvasElement,
	rectWidth: number,
	rectHeight: number,
	isPaused: boolean
}

let appState: AppState = {
	grid: null,
	canvas: null,
	rectWidth: 0,
	rectHeight: 0,
	isPaused: true
};

function init(rootElement: HTMLElement) {
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
	render(appState);
	if (!appState.isPaused) {
		update();
	}
}

function update() {
	setNextState(appState.grid);
	render(appState);
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
		render(appState);
	}
	appState.canvas.onclick = canvasClick;
}

export const createCanvas = (width: number, height: number): HTMLCanvasElement => {
	let canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	return canvas;
}

function play(){
	if(appState.isPaused){
		appState.isPaused = false;
		update();
	}else{
		appState.isPaused = true;
	}
}

function run() {
	let element: HTMLElement = document.createElement('div');
	element.style.width = 1200 + "px";
	element.style.height = 600 + "px";
	document.body.appendChild(element);
	init(element);
}
run();

window.addEventListener('keypress', (e: KeyboardEvent) => {
	switch(e.key){
		case ' ':
			play();
			break;
		case 'n':
			update();
			break;
		/*case 'k':
			setFPS(view.fps + 1);
			break;
		case 'l':
			setFPS(view.fps - 1);
			break;
		case 'o':
			setBrush(view.brushSize + 1);
			break;
		case 'p':
			setBrush(view.brushSize - 1);
			break;*/
		default: break;
	}
});