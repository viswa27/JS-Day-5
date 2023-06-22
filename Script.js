function addHeading() {
    let h1 = document.createElement("h1");
    h1.textContent = "MERN stack";
    let button = document.getElementById("add-button");
    button.parentNode.insertBefore(h1, button);
}

function getFirstHeading() {
    let out = document.getElementsByTagName("h1")[0].textContent;
    let h1 = document.createElement("h1");
    h1.textContent = out;
    let button = document.getElementById("1st-button");
    button.parentNode.insertBefore(h1, button.nextSibling);
}

function clock(){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let amPm = "AM";
    if(hour > 12){
        hour -= 12;
        amPm = "PM"
    }
    let clock = hour.toString().padStart(2, '0')+" Hours "+ ':' + 
        minutes.toString().padStart(2, '0')+" Minutes "+ ':' +
        seconds.toString().padStart(2, '0')+" Seconds "+amPm;
    document.getElementById("clock").textContent = clock;
}
setInterval(clock, 1000);

function newText() {
    document.getElementById("Replace").innerHTML = "Welcome to Elevation academy";
}

function hideText() {
    document.getElementById("hide").style.display ="none" ;
}