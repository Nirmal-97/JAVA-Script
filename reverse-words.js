function reverseWords(str) {
  let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join("");
}

console.log(reverseWords("good '\' morning '\' all"));