import { capitalize } from "./capitalize";

test('Capitalize string', () => expect(capitalize('abc')).toBe('ABC'));
test('Capitalize string', () => expect(capitalize('jest test is love')).toBe('JEST TEST IS LOVE'));
test('Capitalize string', () => expect(capitalize('bruh what is tdd')).toBe('BRUH WHAT IS TDD'));