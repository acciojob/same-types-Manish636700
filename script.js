function isSameType(value1, value2) {
    return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Try converting to numbers if possible
if (!isNaN(value1) && value1.trim() !== "") value1 = Number(value1);
if (!isNaN(value2) && value2.trim() !== "") value2 = Number(value2);

alert(isSameType(value1, value2));

