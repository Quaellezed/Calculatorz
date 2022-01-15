const ElZero = document.getElementById("el-zero")
const ElUno = document.getElementById("el-uno")
const ElDuo = document.getElementById("el-duo")
const ElUno = document.getElementById("el-uno")
const ElUno = document.getElementById("el-uno")
const ElUno = document.getElementById("el-uno")
const ElUno = document.getElementById("el-uno")
const ElUno = document.getElementById("el-uno")
const ElUno = document.getElementById("el-uno")
const ElUno = document.getElementById("el-uno")
const ElUno = document.getElementById("el-uno")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function pad() {
 //   ElZero.addEventListener("click", countEl =0 )
    countEl.textContent = 2 
}