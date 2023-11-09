import caesarCipher from "./caesarCipher";

test('Cipher text with 1 shift', () => 
expect(caesarCipher('defend the east wall of the castle', 1))
.toBe('efgfoe uif fbtu xbmm pg uif dbtumf'));

test('Cipher text with diff case', () => 
expect(caesarCipher('Defend the East Wall of The Castle', 1))
.toBe('Efgfoe uif Fbtu Xbmm pg Uif Dbtumf'));