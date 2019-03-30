import { Cell } from "./model/cell";
import { Grid } from "./model/grid";
import { applyRuleGameOfLife } from "./ruleFunctions/gameOfLife";

let currentRule = applyRuleGameOfLife;

export const setNextState = (grid: Grid) => {
    grid.iterate((cell: Cell) => {
        currentRule(cell);
    });
    grid.iterate((cell: Cell) => {
        cell.setCurrentValue();
    })
}