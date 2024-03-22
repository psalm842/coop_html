let count = 0;

function getDate() {
    setInterval(function() {document.getElementById("date").innerHTML=Date()}, 1000) 
}

function countUp() {
    count = count + 1;
    document.getElementById("counter").innerHTML = count; 
    console.log("Count is", count)
}

function setupEventListeners(event) {
    document.getElementById("increment").addEventListener("click", countUp)
    document.getElementById("date_button").addEventListener("click", getDate)
}

window.addEventListener('load', setupEventListeners);
