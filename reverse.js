var newString = "";
function reverseString(str) {
    for (var i = str.length-1; i >= 0; --i) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));

// console.log(2 + '2');