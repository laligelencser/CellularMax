export class Cell {
    connections: Cell[] = [];
    valuesInTime: number[] = [0];
    numberOfValues: number = 2;
    activateValue: number = 1;

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

    addNewValue = (value: number): void => {
        if (this.valuesInTime.length === this.numberOfValues) {
            this.valuesInTime.shift();
        }
        this.valuesInTime.push(value);
    }

    activate = (): void => {
        this.valuesInTime[this.valuesInTime.length] = this.activateValue;
    }
}