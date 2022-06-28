const object1 = {
  id: 1,
  name: "edison",
};
const object2 = {
  id: 2,
  name: "edison",
};
function compareObjects() {
  let a = Object.getOwnPropertyNames(object1);
  let b = Object.getOwnPropertyNames(object2);
  //console.log(a);
  //console.log(b);
  if (a.length != b.length) {
    return "false";
  }
  for (let i = 0; i <= a.length; i++) {
    let prop1 = a[i];
    let prop = b[i];
    if (object1[prop1] != object2[prop]) {
      return "false";
    }
  }
  return "true";
}
console.log(compareObjects());