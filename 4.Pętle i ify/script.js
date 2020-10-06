// Zadanie 1
const x = 5;
const y = 10;

if(x > y) {
    console.log(x); // 5
} else {
    console.log(y); // 10
}

//Zadanie 2
const num1 = 13;
const num2 = 7;
const num3 = 11;

if(num1 > num2 && num1 > num3) {
    console.log(num1); // 13
} else if(num2 > num1 && num2 > num3) {
    console.log(num2); // 7
} else {
    console.log(num3); // 11
}

//Zadanie 3
for(let i=0; i<10; i++) {
    console.log("Lubię JavaScript");
}

//Zadanie 4
let result = 0;
for(let i=1; i<=10; i++) {
    result += i;
}

//Zadanie 5
var n = 5;
for(let i=0; i<=n; i++) {
    if(i % 2 == 0) {
        console.log(i + " - parzysta");
    } else {
        console.log(i + " - nieparzysta");
    }
}

//Zadanie 6
for(let i=0; i<10; i++) {
    for(let j=0; j<10; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}

//Zadanie 7
for(let i=0; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) { 
        console.log(`${i} Buzz`);
    } else {
        console.log(`${i}`);
    }
}

//Zadanie 8a
let star = 5;
let result2 = '';

for(let i=1; i<=star; i++) {
    for(let j=0; j<i; j++) {
        result2 += "*";
    }
    console.log(result2);
    result2 = "";
}

//Zadanie 8b
let asterisk = 5;
let left = 4;
let right = 4;
for(let i=0; i<asterisk; i++) {
    let x = 4 - left;
    process.stdout.write(" ".repeat(left));
    for(let j=0; j<x; j++) {
        if(j % 2 == 0) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    
    if(i % 2 == 0) {
        process.stdout.write("*");
    } else {
        process.stdout.write(" ");
    }

    let y = 4 - right;
    for(let j=0; j<y; j++) {
        if(j % 2 == 0) {
            if(i % 2 != 0) {
                process.stdout.write("*"); 
            } else {
                process.stdout.write(" "); 
            }   
        } else {
            if(i % 2 != 0) {
                process.stdout.write(" ");
            } else {
                process.stdout.write("*");
            }  
        }
    }
    process.stdout.write(" ".repeat(right));

    right--;
    left--;
    console.log();
}

//Zadanie 8c
let asteriskC = 5;
let leftC = 4;
let rightC = 4;
for(let i=0; i<asteriskC; i++) {
    let x = 4 - leftC;
    process.stdout.write(" ".repeat(leftC));
    for(let j=0; j<x; j++) {
        process.stdout.write("*");
    }

    process.stdout.write("*");

    let y = 4 - rightC;
    for(let j=0; j<y; j++) {
        process.stdout.write("*");  
    }
    process.stdout.write(" ".repeat(rightC));

    rightC--;
    leftC--;
    console.log();
}

//Zadanie 8d
let leftD = 1;
let rightD = 4
let incr = 1
for(let i=0; i<5; i++) {
    process.stdout.write("*".repeat(leftD));
    for(let j=0; j<rightD; j++) {
        process.stdout.write(`${j + incr}`);
    }
    leftD++;
    rightD--;
    incr++;
    console.log()
}
process.stdout.write("-".repeat(5));
console.log();
leftD = 5
rightD = 0
incr = 5;
for(let i=0; i<5; i++) {
    process.stdout.write("*".repeat(leftD));
    for(let j=0; j<rightD; j++) {
        process.stdout.write(`${j + incr}`);
    }
    leftD--;
    rightD++;
    incr--;
    console.log();
}

//Zadanie 8e
let asteriskE = 5;
let leftE = 4;
let rightE = 4;
for(let i=0; i<asteriskE; i++) {
    let x = 4 - leftE;
    process.stdout.write(" ".repeat(leftE));
    for(let j=0; j<x; j++) {
        if(j % 2 == 0) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    
    if(i % 2 == 0) {
        process.stdout.write("*");
    } else {
        process.stdout.write(" ");
    }

    let y = 4 - rightE;
    for(let j=0; j<y; j++) {
        if(j % 2 == 0) {
            if(i % 2 != 0) {
                process.stdout.write("*"); 
            } else {
                process.stdout.write(" "); 
            }   
        } else {
            if(i % 2 != 0) {
                process.stdout.write(" ");
            } else {
                process.stdout.write("*");
            }  
        }
    }
    process.stdout.write(" ".repeat(rightE));

    rightE--;
    leftE--;
    console.log();
}
for(let i=0; i<3; i++) {
    process.stdout.write(" ".repeat(4));
    process.stdout.write("*");
    
    console.log();
}
