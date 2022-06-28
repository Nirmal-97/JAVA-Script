var num = 10;
var check = 0;

for (i = 2; i < num; i++){
    if (num % i == 0) {
        check = 1;
        break;
    }
}

if (check == 1) {
    console.log("Not a prime number");
}

else {
    console.log("Prime Number");
}