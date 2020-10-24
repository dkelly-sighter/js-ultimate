import { Field } from '../app/field';

test("field constructor", () => {
    let field = new Field(2, 6, 9);
    expect(field.getWidth()).toBe(10);
    expect(field.getLength()).toBe(9);
});