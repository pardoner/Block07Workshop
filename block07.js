// this vault requires 3 math calculations to generate codes in a combination lock
// the JS console will create the 3 variables, each one being a result of calculations
// the combination lock is 10 - 40 - 39

// in line 6 we declare a string containing the message introducing the vault combo
const str = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
//line 8 assigns the first number in the combination to the variable num1, solved by dividing 20 by 2.
let num1 = 20/2;
//line 10 assigns the second value in the combination to num2, achieved by multiplying 20 by 2 to get 40.
let num2 = 20 * 2;
//line 12 assigns the final value in the combination lock to num 3, by substracted 1 from 40 to get 39.
let num3 = 40 -1;
//creating a dialog box in the line below to display our string message as well as the lock's combination.
alert(str + " " + num1 + " " + num2+ " " + num3);
