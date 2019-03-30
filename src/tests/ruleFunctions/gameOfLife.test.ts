import { Cell } from "../../model/cell";
import { applyRuleGameOfLife } from "../../ruleFunctions/gameOfLife";
import { Grid } from "../../model/grid";
import { setRectConnection } from "../../connectionManager";

test('new cell born from 3 active connection', () => {
    let cell = new Cell();
    cell.addNewValue(0);
    for(let i = 0; i < 3; i++) {
        let connectionCell = new Cell();
        connectionCell.addNewValue(1);
        cell.connections.push(connectionCell);
    }
    
    applyRuleGameOfLife(cell);

    expect(cell.currentValue).toBe(1);
});

test('new cell born from 3 active and 5 dead connection', () => {
    let cell = new Cell();
    cell.addNewValue(0);
    for(let i = 0; i < 8; i++) {
        let connectionCell = new Cell();
        if ( i < 3) {
            connectionCell.addNewValue(1);
        } else {
            connectionCell.addNewValue(0);
        }
        cell.connections.push(connectionCell);
    }

    applyRuleGameOfLife(cell);

    expect(cell.currentValue).toBe(1);
});

test('new cell born with grid', () => {
    const grid = new Grid();
    grid.cells = grid.createGrid(3, 3);
    setRectConnection(grid, 1);
    grid.cells[0][0].addNewValue(1);
    grid.cells[0][1].addNewValue(1);
    grid.cells[0][2].addNewValue(1);
    grid.iterate((cell: Cell) => {
        applyRuleGameOfLife(cell);
    })
    expect(grid.cells[1][1].currentValue).toBe(1);
});

test('cell die', () => {
    let cell = new Cell();
    cell.addNewValue(1);
    for(let i = 0; i < 4; i++) {
        let connectionCell = new Cell();
        connectionCell.addNewValue(1);
        cell.connections.push(connectionCell);
    }
    applyRuleGameOfLife(cell);

    expect(cell.currentValue).toBe(0);
});

test('cell survive with 3 active connection', () => {
    let cell = new Cell();
    cell.addNewValue(1);
    for(let i = 0; i < 3; i++) {
        let connectionCell = new Cell();
        connectionCell.addNewValue(1);
        cell.connections.push(connectionCell);
    }

    applyRuleGameOfLife(cell);
    expect(cell.currentValue).toBe(1);
});

test('cell survive with 2 active connection', () => {
    let cell = new Cell();
    cell.addNewValue(1);
    for(let i = 0; i < 2; i++) {
        let connectionCell = new Cell();
        connectionCell.addNewValue(1);
        cell.connections.push(connectionCell);
    }

    applyRuleGameOfLife(cell);
    expect(cell.currentValue).toBe(1);
});