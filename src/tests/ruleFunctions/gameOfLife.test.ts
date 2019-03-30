import { Cell } from "../../model/cell";
import { applyRuleGameOfLife } from "../../ruleFunctions/gameOfLife";

test('rule: game of life new cell born from 3 active connection', () => {
    let cell = new Cell();
    cell.addNewValue(0);
    for(let i = 0; i < 3; i++) {
        let connectionCell = new Cell();
        connectionCell.addNewValue(1);
        cell.connections.push(connectionCell);
    }
    
    applyRuleGameOfLife(cell);

    expect(cell.currentValue()).toBe(1);
});

test('rule: game of life new cell born from 3 active and 5 dead connection', () => {
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

    expect(cell.currentValue()).toBe(1);
});

test('rule: game of life cell die', () => {
    let cell = new Cell();
    cell.addNewValue(1);
    for(let i = 0; i < 4; i++) {
        let connectionCell = new Cell();
        connectionCell.addNewValue(1);
        cell.connections.push(connectionCell);
    }
    applyRuleGameOfLife(cell);

    expect(cell.currentValue()).toBe(0);
});

test('rule: game of life cell survive with 3 active connection', () => {
    let cell = new Cell();
    cell.addNewValue(1);
    for(let i = 0; i < 3; i++) {
        let connectionCell = new Cell();
        connectionCell.addNewValue(1);
        cell.connections.push(connectionCell);
    }

    applyRuleGameOfLife(cell);
    expect(cell.currentValue()).toBe(1);
});

test('rule: game of life cell survive with 2 active connection', () => {
    let cell = new Cell();
    cell.addNewValue(1);
    for(let i = 0; i < 2; i++) {
        let connectionCell = new Cell();
        connectionCell.addNewValue(1);
        cell.connections.push(connectionCell);
    }

    applyRuleGameOfLife(cell);
    expect(cell.currentValue()).toBe(1);
});