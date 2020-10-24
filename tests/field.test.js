import { Field } from '../app/field';

describe('field tests', () => {

    test("field constructor", () => {
        let field = new Field(2, 6, 9);
        expect(field.getWidth()).toBe(10);
        expect(field.getLength()).toBe(9);
    });

    test('field drawing', () => {
        let field = new Field(2, 6, 9);
        let beginPath = jest.fn();
        let moveTo = jest.fn();
        let lineTo = jest.fn();
        let stroke = jest.fn();
        let canvasRenderingContext2D = {
            beginPath: beginPath,
            moveTo: moveTo,
            lineTo: lineTo,
            stroke: stroke,
        };
        field.draw(canvasRenderingContext2D);
        expect(beginPath).toHaveBeenCalledTimes(2);
        expect(beginPath).toHaveBeenCalledTimes(2);
        expect(beginPath).toHaveBeenCalledTimes(2);
        expect(beginPath).toHaveBeenCalledTimes(2);
    })
});
