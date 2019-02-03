import { Grid } from "../model/grid";
import { Cell } from "../model/cell";

const grid = new Grid();

beforeEach(() => {
    grid.cells = grid.createGrid(2, 3);
});

test('create grid', () => {
    expect(grid.cells.length).toBe(3);
    expect(grid.cells[0].length).toBe(2);
});

test('iterate grid', () => {
    let valueSum = 0;
    let lastIndexX = 0;
    let lastIndexY = 0;
    grid.iterate((cell: Cell, rowIndex: number, columnIndex: number) => {
        valueSum += cell.value
        lastIndexX = columnIndex;
        lastIndexY = rowIndex;
    });
    expect(valueSum).toBe(0);
    expect(lastIndexX).toBe(1);
    expect(lastIndexY).toBe(2);
});