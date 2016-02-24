
function translateToRna(input) {
    var string = '';
    var inputArray = input.split('');
    console.log(inputArray);
    for (var i = 0; i < input.length; i++) {
        if (input.indexOf('C') > -1) {
            string += 'G';
        } if (input.indexOf('G') > -1) {
            string += 'C';
        } if (input.indexOf('A') > -1) {
            string += 'U';
        } if (input.indexOf('T') > -1) {
            string += 'A';
        }
    }
    inputArray.splice(inputArray[i], 1);
    console.log(inputArray);
    console.log(string);
    return string;
}

translateToRna('C');
translateToRna('G');
translateToRna('A');
translateToRna('T');
translateToRna('ACGTGGTCTTAA');

