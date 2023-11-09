export function analyzeArray(arr) {
    let object = {};
    object.average = arr.reduce((x, y) => x + y) / arr.length;
    arr.sort();
    object.min = arr[0];
    object.max = arr[arr.length - 1];
    object.length = arr.length;
    return object;
}