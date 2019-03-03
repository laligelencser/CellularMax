import { Grid } from "../model/grid";
import { setRectConnection } from "../connectionManager";

test('sum connections', () => {
    const grid = new Grid();
    grid.cells = grid.createGrid(2, 2);
    setRectConnection(grid, 1);

    grid.cells[0][0].valuesInTime[0] = 1;
    grid.cells[0][1].valuesInTime[0] = 1;
    grid.cells[1][0].valuesInTime[0] = 2;
    grid.cells[1][1].valuesInTime[0] = 1;

    expect(grid.cells[0][0].sumConnections()).toBe(4);
    expect(grid.cells[1][0].sumConnections()).toBe(3);
});