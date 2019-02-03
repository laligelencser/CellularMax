import { Grid } from "./model/grid";
import { Cell } from "./model/cell";

export const setRectConnection = (grid: Grid, reach: number) => {
    if(reach < 1 || reach > grid.cells.length || reach > grid.cells[0].length) {
        return;
    }
    grid.iterate((cell: Cell, rowIndex: number, columnIndex: number) => {
        for(let i = rowIndex - reach; i <= rowIndex + reach; i++){
            for(let j = columnIndex - reach; j <= columnIndex + reach; j++){
                if(grid.cells[i] && grid.cells[i][j] && !(i == rowIndex && j == columnIndex)){
                    cell.connections.push(grid.cells[i][j]);
                }
            }
        }
    });
}