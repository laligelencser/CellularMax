import { Grid } from "../model/grid";
import { Cell } from "../model/cell";
import { AppState } from "../index";

export const render = (appState: AppState) => {
    const ctx = appState.canvas.getContext('2d');
    appState.grid.iterate((cell: Cell, rowIndex: number, columnIndex: number) => {
        const x = appState.rectWidth * columnIndex;
        const y = appState.rectHeight * rowIndex;
        if (cell.currentValue() === 1) {
            ctx.fillRect(x, y, appState.rectWidth - 1, appState.rectHeight - 1);
        } else {
            ctx.strokeRect(x, y, appState.rectWidth - 1, appState.rectHeight - 1);
        }
    });
}