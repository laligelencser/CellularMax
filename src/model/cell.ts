export class Cell {
    connections: Cell[] = [];
    valuesInTime: number[] = [0];
    numberOfValues: number = 2;
    activateValue: number = 1;
    defaultValue: number = 0;

    sumConnections = (): number => {
        let sum = 0;
        for(let cell of this.connections) {
            sum += cell.currentValue();
        }
        return sum;
    }

    currentValue = (): number => {
        if (this.valuesInTime.length) {
            return this.valuesInTime[this.valuesInTime.length - 1];
        }
        return null;
    }

    addNewValue = (value: number): void => {
        if (this.valuesInTime.length === this.numberOfValues) {
            this.valuesInTime.shift();
        }
        this.valuesInTime.push(value);
    }

    changeValue = (value: number): void => {
        this.valuesInTime[this.valuesInTime.length - 1] = value;
    }

    activate = (): void => {
        this.changeValue(this.activateValue);
    }

    flipValue = (): void => {
        if (this.currentValue() === this.defaultValue) {
            this.changeValue(this.activateValue);
        } else {
            this.changeValue(this.defaultValue);
        }
    }
}