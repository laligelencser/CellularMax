import { Cell } from "./cell";

export class Grid {
    cells: Cell[][] = [];

    createGrid = (width: number, height: number): Cell[][] => {
        let cells: Cell[][] = [];
        for(let i = 0; i < height; i++) {
            let cellRow: Cell[] = [];
            for(let j = 0; j < width; j++) {
                cellRow.push(new Cell());
            }
            cells.push(cellRow);
        }
        return cells;
    }
    
    iterate = (iterator: Function) => {
        for(let i = 0; i < this.cells.length; i++) {
            for(let j = 0; j < this.cells[i].length; j++) {
                iterator(this.cells[i][j]);
            }   
        }
    }
}