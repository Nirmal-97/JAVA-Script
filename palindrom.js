function palindrome(str) {

    var len = str.length;
    var word = Math.floor(len/2);

    for ( var i = 0; i < word; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome("malayalam"));