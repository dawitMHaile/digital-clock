const hour  = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const day = document.getElementById("day")
var mothName = [
"january",
"february",
"march",
"april",
"may",
"june",
"july",
"August",
"september",
"October",
"November",
"December"

]
const clock = setInterval(function time(){
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()


    day.innerHTML = `${d} ${mothName[m]} ${y}`
    hour.innerText = h;
    minute.innerText = min;
    second.innerText = sec;
})
