import calculator from "./calculator";

test('Add numbers', () => expect(calculator.add(13, 12)).toBe(25));
test('Error adding non-int', () => expect(calculator.add(13, 'twelve')).toBe('Non-integer input'));

test('Subtract numbers', () => expect(calculator.sub(100, 99)).toBe(1));
test('Error subtracting non-int', () => expect(calculator.sub(11, '900')).toBe('Non-integer input'));

test('Divide numbers', () => expect(calculator.divide(1000, 10)).toBe(100));
test('Error dividing non-int', () => expect(calculator.divide(10, '1')).toBe('Non-integer input'));

test('Multiply numbers', () => expect(calculator.multiply(1000, 10)).toBe(10000));
test('Multiply numbers', () => expect(calculator.multiply(5, 12)).toBe(60));
test('Error multiplying non-int', () => expect(calculator.multiply(10, '1')).toBe('Non-integer input'));
