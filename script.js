let count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerText = count
}

function decrese() {
   if (count > 1){
    count--
    document.getElementById("counter").innerText = count
}
}