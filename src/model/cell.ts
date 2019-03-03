export class Cell {
    connections: Cell[] = [];
    valuesInTime: number[] = [0];
    numberOfValues: number = 2;

    sumConnections = (): number => {
        let sum = 0;
        for(let cell of this.connections) {
            sum += cell.currentValue();
        }
        return sum;
    }

    currentValue = (): number => {
        return this.valuesInTime[this.valuesInTime.length - 1];
    }
}