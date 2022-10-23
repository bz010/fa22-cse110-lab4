function getTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
// Set interval to call function every 1000 ms
setInterval(getTime, 1000);