export function reverseString(string) {
    if (typeof string === 'string') {
        const splitStringArray = string.split('');
        const reverseArray = splitStringArray.reverse();
        const newString = reverseArray.join('');
        return newString;
      }
      return 'not a string';
}  