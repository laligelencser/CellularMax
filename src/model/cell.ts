interface ICell {
    connections: ICell[];
    value: number;
}

export class Cell implements ICell {
    connections: ICell[] = [];
    value: number = 0;
}