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
        const rowLength = this.cells.length;
        for(let i = 0; i < rowLength; i++) {
            const columnLength = this.cells[i].length;
            for(let j = 0; j < columnLength; j++) {
                iterator(this.cells[i][j], i, j);
            }   
        }
    }

    activateCell = (i: number, j: number) => {
        this.cells[i][j].activate();
    }
}