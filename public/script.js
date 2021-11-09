function highReverse(input) {
    const reversed = input.split('').reverse().join('');
    return reversed.toUpperCase();
}

function countSubStr(input, sub) {
    return input.split(sub).length - 1;
}

const highReverseOutput  = highReverse('hello');
console.log('highReverse',  highReverseOutput);

const countSubStrOutput  = countSubStr('hello', 'l');
console.log('countSubStr',  countSubStrOutput);