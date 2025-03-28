// Excercise 2: Program Structure
let myvar = "value";
myvar = "reassigned";

// multiple declarations
let first = 0, second = 1;

// functions
console.log("foo");
console.log(Math.max(6, 9)); // 9 <- return value

// conditional execution
if (myvar == "value")
{
    console.log("is Value")
}

if (myvar == "reassigned") console.log("no brackets needed")

if (myvar == "x"){
    // do something
} else if(myvar == "y"){
    // do something
} else {
    // do something
}

// loops
let num = 0
// may not execute
while(num < 10) {
    console.log("Num is now: ", num)
    num += 1;
}

// executes at least once
do {
    console.log("Num is now: ", num)
    num -= 1;
} while (num > 0);

for(let i = 0; i <10; i++) {
    console.log("for loop -> ", num)
}

for(let i = 0; i <10; i++) {
    if(i % 5 == 0){
        console.log("Loop Break at ", num)
        break;
    }
    console.log("for loop -> ", num)
}

// same
num = num +1;
num += 1;
num++;


// Looping Triangle Excercise
for(let tri = 0, out = ""; tri < 10; tri++) 
{
    out = out + "#"
    console.log(out);
}

// Fizz Buzz Excercise
for(let count = 1, out = ""; count <= 100; count++) 
{
    out = ""
    if(count % 3 == 0) out += "Fizz"
    if(count % 5 == 0) out += "Buzz"
    console.log(out != "" ? out : count)
}

// Chessboard Excercise
for(let x = 0, y = 0, blk = false, out = ""; y < 8; x++) 
{
    if(blk) out += "#"
    else out += " "

    if (x > 7){
        x = -1;
        console.log(out)
        out = ""
        y++
    } 
    blk = !blk
}
