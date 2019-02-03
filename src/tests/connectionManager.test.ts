import { Grid } from "../model/grid";
import { setRectConnection } from "../connectionManager";

test('setting rectangle connections width 0', () => {
    const grid = new Grid();
    grid.cells = grid.createGrid(3, 3);
    setRectConnection(grid, 0);
    expect(grid.cells[1][1].connections.length).toBe(0);
    
});

test('setting rectangle connections width 1', () => {
    const grid = new Grid();
    grid.cells = grid.createGrid(3, 3);
    setRectConnection(grid, 1);
    expect(grid.cells[0][0].connections.length).toBe(3);
    expect(grid.cells[0][2].connections.length).toBe(3);
    expect(grid.cells[1][1].connections.length).toBe(8);
    expect(grid.cells[2][0].connections.length).toBe(3);
    expect(grid.cells[2][2].connections.length).toBe(3);
});

test('setting rectangle connections width 2', () => {
    const grid = new Grid();
    grid.cells = grid.createGrid(5, 5);
    setRectConnection(grid, 2);
    expect(grid.cells[0][0].connections.length).toBe(8);
    expect(grid.cells[2][2].connections.length).toBe(24);
    expect(grid.cells[3][3].connections.length).toBe(15);
});