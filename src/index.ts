import { Grid } from './grid';

function init(rootElement: HTMLElement) {
    let canvas: HTMLElement = createCanvas(100, 100);
	rootElement.appendChild(canvas);
}

export const createCanvas = (width: number, height: number): HTMLElement => {
	let canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	return canvas;
}

// const grid = new Grid();
// grid.cells = grid.createGrid(3, 2);
let element: HTMLElement = document.createElement('div');
init(element);
document.body.appendChild(element);