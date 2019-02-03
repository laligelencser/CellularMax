import { Grid } from './model/grid';
import { render } from './render/render';
import { setRectConnection } from './connectionManager';

function init(rootElement: HTMLElement) {
	const gridWidth = 5;
	const gridHeight = 5;
	const rectWidth = Math.floor(rootElement.clientWidth / gridWidth);
	const rectHeight = Math.floor(rootElement.clientHeight / gridHeight);
    let canvas: HTMLCanvasElement = createCanvas(rootElement.clientWidth, rootElement.clientHeight);
	rootElement.appendChild(canvas);
	const grid = new Grid();
	grid.cells = grid.createGrid(gridWidth, gridHeight);
	setRectConnection(grid, 1);
	console.log(grid);
	render(canvas.getContext('2d'), grid, {rectWidth, rectHeight});
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
//run();