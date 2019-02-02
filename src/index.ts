import { Cell } from './cell';

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

let c: Cell= new Cell();
let element: HTMLElement = document.createElement('div');
init(element);
document.body.appendChild(element);