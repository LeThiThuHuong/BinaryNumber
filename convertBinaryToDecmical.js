function convertBinary(string) {
    var sum = 0;
    for (var i = 0; i < string.length; i++) {
        sum = sum + string[i] * Math.pow(2, string.length - 1 - i);
    }
    return sum

}
// var A = '1111';
// console.log(convertBinary(A));


function and(stringA, stringB) {
    var result = '';
    for (var i = 0; i < stringA.length; i++) {
        if (Number(stringA[i]) === Number(stringB[i])) {
            result = result + stringA[i];
        } else if (Number(stringA[i]) !== Number(stringB[i])) {
            result = result + '0';
        }
    }
    return result
}
// console.log( and('101', '111'));


function xor(stringA, stringB) {
    var result = '';
    for (var i = 0; i < stringA.length; i++) {
        if (Number(stringA[i]) === Number(stringB[i])) {
            result = result + '0';
        } else if (Number(stringA[i]) !== Number(stringB[i])) {
            result = result + '1';
        }
    }
    return result
}
// console.log(xor('0110','1100'))

function not(string) {
    var result = '';
    for (var i = 0; i < string.length; i++) {
        if (Number(string[i]) === 0) {
            result = result + '1';
        } else {
            result = result + '0';
        }
    }
    return result
}
// console.log(not('1011'));

function or(stringA, stringB) {
    var result = '';
    var sum;
    for (var i = 0; i < stringA.length; i++) {
        sum = Number(stringA[i]) + Number(stringB[i]);
        if (sum > 0){
            result = result + '1';
        } else {
                result = result + '0';
        }
    }
    return result
}
// console.log(or('01011', '00111'));

function leftShift (string, n){
    var newString;
    var length = string.length + n;
    for (var i = 0; i < n; i++){
        newString = string + 0;
        while(newString.length < length){
            newString = newString + 0;
        }
    }
    newString = newString.slice((newString.length - string.length), newString.length);

    return newString

}
// console.log(leftShift('1101', 3));

function rightShift (string, n){
    var newString;
    var length = string.length + n;
    for (var i = 0; i < n; i++){
        newString = 0 + string;
        while(newString.length < length){
            newString = 0 + newString;
        }
    }
    newString = newString.slice(0,string.length);
    return newString

}
// console.log(rightShift('1101', 2));

var A = '10110111';
var B = '11100011';
console.log(convertBinary(A), convertBinary(B));
console.log(and(A, B));
console.log(xor(A,B));
console.log(not(A), not(B));
console.log(or(A,B));
console.log(leftShift(A,3), leftShift(B,3));
console.log(rightShift(A,3), rightShift(B,3));
