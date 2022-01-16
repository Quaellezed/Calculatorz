const countEl = document.getElementById("count-el")

let count = 0
let button ={}
let operations =["+","-","*","/"]
let BtnOp ={}

function createButton(){
    for( let i = 0; i < 10; i++ ){
        button[i] = document.createElement('button')
        button[i].innerHTML = `${i}`
        button[i].onclick = function(){
            countEl.textContent = countEl.textContent + i
            count = i
        }
    document.body.appendChild(button[i])
    }
}

function createBtnOp(){
    for( let i = 0; i < operations.length; i++ ){
        BtnOp[operations[i]] = document.createElement('button')
        BtnOp[operations[i]].innerHTML = `${operations[i]}`
        BtnOp[operations[i]].onclick = function(){
            countEl.textContent = countEl.textContent + operations[i]
        }
    document.body.appendChild(BtnOp[operations[i]])
    }
}

function makeClear() {
    countEl.textContent = 0
}

function equals() {
    for ( let i = 0; i < countEl.textContent.length; i++) {
        if( countEl.textContent[i] == "+") {
            count = (parseInt(countEl.textContent.substr(i+1, countEl.textContent.length)) +
            parseInt(countEl.textContent.substr(0, i)))
            countEl.textContent = count
        }
        else if( countEl.textContent[i] == "-") {
            count = (parseInt(countEl.textContent.substr(0, i)) -
            parseInt(countEl.textContent.substr(i+1, countEl.textContent.length)))
            countEl.textContent = count
        }
        else if( countEl.textContent[i] == "*") {
            count = (parseInt(countEl.textContent.substr(0, i)) *
            parseInt(countEl.textContent.substr(i+1, countEl.textContent.length)))
            countEl.textContent = count
        }
        else if( countEl.textContent[i] == "/") {
            count = (parseInt(countEl.textContent.substr(0, i)) /
            parseInt(countEl.textContent.substr(i+1, countEl.textContent.length)))
            countEl.textContent = count
        }
    }
    if (isNaN(parseInt(countEl.textContent))) {
        countEl.textContent = 0
    }
}
        