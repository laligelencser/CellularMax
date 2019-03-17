import { Cell } from "../model/cell";
import { applyRuleGameOfLife } from "../ruleFunctions";

test('rule: game of life new cell born', () => {
    let cell = new Cell();
    let cellConnection1 = new Cell();
    cellConnection1.addNewValue(1);
    let cellConnection2 = new Cell();
    cellConnection1.addNewValue(1);
    let cellConnection3 = new Cell();
    cellConnection1.addNewValue(1);

    cell.connections.push(cellConnection1);
    cell.connections.push(cellConnection2);
    cell.connections.push(cellConnection3);

    applyRuleGameOfLife(cell);

    expect(cell.currentValue()).toBe(1);
});

test('rule: game of life cell die', () => {
    let cell = new Cell();
    let cellConnection1 = new Cell();
    cellConnection1.addNewValue(1);
    let cellConnection2 = new Cell();
    cellConnection1.addNewValue(1);
    let cellConnection3 = new Cell();
    cellConnection1.addNewValue(1);
    let cellConnection4 = new Cell();
    cellConnection1.addNewValue(1);

    cell.connections.push(cellConnection1);
    cell.connections.push(cellConnection2);
    cell.connections.push(cellConnection3);
    cell.connections.push(cellConnection4);

    applyRuleGameOfLife(cell);

    expect(cell.currentValue()).toBe(0);
});

test('rule: game of life cell survive', () => {
    let cell = new Cell();
    cell.addNewValue(1);
    let cellConnection1 = new Cell();
    cellConnection1.addNewValue(1);
    let cellConnection2 = new Cell();
    cellConnection1.addNewValue(1);
    let cellConnection3 = new Cell();
    cellConnection1.addNewValue(1);

    cell.connections.push(cellConnection1);
    cell.connections.push(cellConnection2);
    

    applyRuleGameOfLife(cell);

    expect(cell.currentValue()).toBe(1);

    cell.connections.push(cellConnection3);
    expect(cell.currentValue()).toBe(1);
});