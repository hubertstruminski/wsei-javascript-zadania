//Zadanie 1
let count = 0;
let interval = setInterval(function() {
    console.log("Cześć po raz " + (count + 1));
    count++;
    if(count === 15) {
        clearInterval(interval);
    }
}, 3000);

//Zadanie 2
const array = ["a", "b", "c", "d", "e", "f", "g", "h"];

let timeout = setTimeout(iterate, 2000);
let flag = false;
function iterate() {
    for(let i=0; i<array.length; i++) {
        process.stdout.write(array[i]);
        if(i === array.length - 1) {
            flag = true;
        }     
    }
    if(flag) {
        console.log();
        clearTimeout(timeout);
    }
}

let count2 = 0;
let interval2 = setInterval(function() {
    console.log(array[count2]);
    count2++;
    if(count2 === array.length) {
        clearInterval(interval2);
    }
}, 3000);
