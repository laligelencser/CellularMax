import { createCanvas } from "../mainLoop";

test('create canvas', () => {
    let canvas = createCanvas(0, 0);
    expect(String(canvas)).toBe('[object HTMLCanvasElement]');
});