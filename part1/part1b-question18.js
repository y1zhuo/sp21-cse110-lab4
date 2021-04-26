// prints out the time every second (for 10 seconds)
var intervalID = setInterval(printTime, 1000);
var s = new Date();
var d = s;
function printTime() {
let time = d.toLocaleTimeString();
console.log(time);
if(d.getSeconds() - s.getSeconds() === 10){
    clearInterval(intervalID);
}
d = new Date();
}

