import { Cell } from "../model/cell";
import { appState } from "../appState";

export const render = () => {
    const ctx = appState.canvas.getContext('2d');
    ctx.clearRect(0, 0, appState.canvas.width, appState.canvas.width);
    appState.grid.iterate((cell: Cell, rowIndex: number, columnIndex: number) => {
        const x = appState.rectWidth * columnIndex;
        const y = appState.rectHeight * rowIndex;
        if (cell.currentValue() === 1) {
            ctx.fillRect(x, y, appState.rectWidth, appState.rectHeight);
        } else {
            ctx.strokeRect(x, y, appState.rectWidth, appState.rectHeight);
        }
    });
}