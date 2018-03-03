function convertDemicalToBinary(number) {
    var binary = '';
    var result;
    var surplus;
    result = Math.floor(number / 2);
    surplus = number % 2;
    binary = surplus + binary;
    while (result > 0) {
        surplus = result % 2;
        binary = surplus + binary;
        result = Math.floor(result / 2);
    }
    return binary
}


function balance(number1, number2) {
    var binaryNumber1 = convertDemicalToBinary(number1);
    var binaryNumber2 = convertDemicalToBinary(number2);
    var subtration;
    if (binaryNumber1.length > binaryNumber2.length) {
        subtration = binaryNumber1.length - binaryNumber2.length;
        while (subtration > 0) {
            binaryNumber2 = 0 + binaryNumber2;
            subtration--;
        }
    } else if (binaryNumber2.length > binaryNumber1.length) {
        subtration = binaryNumber2.length - binaryNumber1.length;
        while (subtration > 0) {
            binaryNumber1 = 0 + binaryNumber1;
            subtration--;
        }
    }
    return { binaryNumber1, binaryNumber2 }

}


function addBinary(number1, number2) {
    var binaryNumber1 = balance(number1, number2).binaryNumber1;
    var binaryNumber2 = balance(number1, number2).binaryNumber2;
    var surplus = 0;
    var sum = '';
    for (var i = binaryNumber1.length - 1; i >= 0; i--) {
        if (Number(binaryNumber1[i]) !== Number(binaryNumber2[i])) {
            if (surplus === 0) {
                sum = 1 + sum;
            } else {
                sum = 0 + sum;
                surplus = 1;
            }
        } else if (Number(binaryNumber1[i]) === 0 && Number(binaryNumber2[i]) === 0) {
            sum = 0 + surplus + sum;
            surplus = 0;
        } else if (Number(binaryNumber1[i]) === 1 && Number(binaryNumber2[i]) === 1) {
            sum = 0 + surplus + sum;
            surplus = 1;
        }
    }
    if (surplus === 1) {
        sum = 1 + sum;
    }
    return sum
}

console.log(addBinary(12, 13));