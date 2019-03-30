import { Grid } from "../model/grid";
import { setNextState } from "../stateManager";
import { Cell } from "../model/cell";
import { setRectConnection } from "../connectionManager";

test('setting next state with zero values', () => {
    const grid = new Grid();
    grid.cells = grid.createGrid(2, 2);
    setRectConnection(grid, 1);
    setNextState(grid);
    let sumValue = 0;
    grid.iterate((cell: Cell) => sumValue += cell.currentValue)
    expect(sumValue).toBe(0);
});

test('setting next state with the value of one', () => {
    const grid = new Grid();
    grid.cells = grid.createGrid(2, 2);
    setRectConnection(grid, 1);
    grid.cells[0][0].addNewValue(0);
    grid.cells[0][1].addNewValue(1);
    grid.cells[1][1].addNewValue(1);
    grid.cells[1][0].addNewValue(1);
    setNextState(grid);
    expect(grid.cells[0][0].currentValue).toBe(1);
});