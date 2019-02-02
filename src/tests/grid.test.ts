import { Grid } from "../grid";
import { Cell } from "../cell";

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
    grid.iterate((cell: Cell) => valueSum += cell.value);
    expect(valueSum).toBe(0);
});