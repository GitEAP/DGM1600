// < less then
// <= less then or equal to
if (10 <= 20) {//if this is true
    console.log("10 is less then 20");
}

// > greater then
// >= greater then or equal to
if (22 >= 10) {
    console.log("20 is greater then 10");
}

// = assign to variable
var myPassword = "ou812";
// == compare values
if (1 == 1) {
    console.log("One is equal to one");
}
// != not equal
if (5 != 1) {
    console.log("5 is not equal to 1");
}
// + add
var apples = 10 + 5;
// += add to current values
apples += apples;
// - subtract
apples - 10;
// -= subtract from current values
apples -= apples;
// * multiply
var oranges = 10 * 10;
// / divide
oranges /= 5;

// ++ increment (or add one to)
oranges++;
// -- degrement (or subtract one from)
oranges--;

// && and
if (apples >= 0 && oranges > 2) {
    console.log(apples);
    console.log(oranges);
}
// || or
if (apples < 0 || oranges > 2) {
    console.log("One statement was true");
}