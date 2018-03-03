function convertDemicalToBinary (number){
    var binary = '';
    var result;
    var surplus;
    result = Math.floor(number/2);
    surplus = number%2;
    binary = surplus + binary;
    while(result > 0){
        surplus = result%2;
        binary = surplus + binary;
        result = Math.floor(result/2);
    }
    return binary
}


console.log(convertDemicalToBinary(25));




