let count = 0;
let interval = setInterval(function() {
    console.log("Cześć po raz " + (count + 1));
    count++;
    if(count === 15) {
        clearInterval(interval);
    }
}, 3000);