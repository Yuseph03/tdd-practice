const error = 'Non-integer input';

const isValidArgs = (a, b) => {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return false;
    } else {
        return true;
    }
}

const add = (a, b) => {
    if(isValidArgs(a, b)) {
        return a + b;
    }
    return error;
}

const sub = (a, b) => {
    if(isValidArgs(a, b)) {
        return a - b;
    }
    return error;
}

const divide = (a, b) => {
    if(isValidArgs(a, b)) {
        return a / b;
    }
    return error;
}

const multiply = (a, b) => {
    if(isValidArgs(a, b)) {
        return a * b;
    }
    return error;
}

const calculator = {
    isValidArgs,
    add,
    sub, 
    divide, 
    multiply
}

export default calculator;