import { Cell } from "./model/cell";

export const applyRuleGameOfLife = (cell: Cell) => {
    const valueSum = cell.sumConnections();
    if (valueSum < 2 || valueSum > 3) {
        cell.addNewValue(0);
    } else if (valueSum === 3 && cell.currentValue() === 0) {
        cell.addNewValue(1);
    } else {
        cell.addNewValue(cell.currentValue());
    }
}