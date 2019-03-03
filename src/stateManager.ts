import { Cell } from "./model/cell";

export const setNextState = (cell: Cell, applyRule: Function) => {
    applyRule(cell);
}