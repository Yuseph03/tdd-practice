import { reverseString } from "./reverseString";

test('Reverse string', () => expect(reverseString('abc')).toBe('cba'));
test('Capitalize string', () => expect(reverseString('test jset')).toBe('tesj tset'));
test('Capitalize string', () => expect(reverseString('Bruh Reversed')).toBe('desreveR hurB'));
test('Capitalize string', () => expect(reverseString(3)).toBe('not a string'));

