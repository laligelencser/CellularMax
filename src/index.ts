import { Grid } from './model/grid';
import { render } from './render/render';
import { setRectConnection } from './connectionManager';
import { setNextState } from './stateManager';

export interface AppState {
	grid: Grid,
	canvas: HTMLCanvasElement,
	rectWidth: number,
	rectHeight: number
}

let appState: AppState = {
	grid: new Grid(),
	canvas: null,
	rectWidth: 0,
	rectHeight: 0
};

function init(rootElement: HTMLElement) {
	const gridWidth = 5;
	const gridHeight = 5;
	appState.rectWidth = Math.floor(rootElement.clientWidth / gridWidth);
	appState.rectHeight = Math.floor(rootElement.clientHeight / gridHeight);
	appState.grid.cells = appState.grid.createGrid(gridWidth, gridHeight);

	appState.canvas = createCanvas(rootElement.clientWidth, rootElement.clientHeight);
	registerCanvasClickEvent();
	rootElement.appendChild(appState.canvas);
	setRectConnection(appState.grid, 1);
	console.log(appState.grid);
	render(appState);
	update();
}

function update() {
	appState.grid.iterate(setNextState);
	render(appState);
	console.log('updated');
	setTimeout(update, 3000);
}

function registerCanvasClickEvent() {
	function canvasClick(e: MouseEvent){
		let xOffset = appState.canvas.getBoundingClientRect().left;
		let rowIndex = Math.floor(e.clientY / appState.rectHeight);
		let columnIndex = Math.floor((e.clientX - xOffset) / appState.rectWidth);
		appState.grid.activateCell(rowIndex, columnIndex);
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

function run() {
	let element: HTMLElement = document.createElement('div');
	element.style.width = 1200 + "px";
	element.style.height = 600 + "px";
	document.body.appendChild(element);
	init(element);
}
run();