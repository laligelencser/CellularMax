import { Cell } from "./model/cell";
import { Grid } from "./model/grid";
import { applyRuleGameOfLife } from "./ruleFunctions";

let currentRule = applyRuleGameOfLife;

export const setNextState = (grid: Grid) => {
    grid.iterate((cell: Cell) => {
        currentRule(cell);
    })
}