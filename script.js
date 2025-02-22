
function isSameType(value1, value2) {
	  const type1 = typeof value1;
  const type2 = typeof value2;

  if (type1 === type2) {
    return true;
  }
}
// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));
