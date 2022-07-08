function reverseWords(str) {
  // let reverseWordArr = str.split(" ");
  let reverseWordArr = str.split(" ").reverse().join(" ")
  // let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(" "));
    // return reverseWordArr.join("");
    return reverseWordArr;

}

console.log(reverseWords("good morning all"));