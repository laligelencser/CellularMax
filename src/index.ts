import { init, play, update } from "./mainLoop";
import { appState } from "./appState";

window.onload = run;
window.addEventListener('keypress', (e: KeyboardEvent) => {
	switch(e.key){
		case ' ':
			play();
			break;
		case 'n':
			if (appState.isPaused) update();
			break;
		default: break;
	}
})

function run() {
	let element: HTMLElement = document.createElement('div');
	element.style.width = 600 + "px";
	element.style.height = 600 + "px";
	document.body.appendChild(element);
	init(element);
}