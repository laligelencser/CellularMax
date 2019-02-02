import { Grid } from "../grid";
import { Cell } from "../cell";

export const render = (ctx: CanvasRenderingContext2D, grid: Grid, settings: any = {}) => {
    grid.iterate((cell: Cell, rowIndex: number, columnIndex: number) => {
        const x = settings.rectWidth * columnIndex;
        const y = settings.rectHeight * rowIndex;
        ctx.fillRect(x, y, settings.rectWidth - 1, settings.rectHeight - 1);
        console.log(x, y)
    });
}