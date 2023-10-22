const ADD1 = document.getElementById('add1')
const ADD10 = document.getElementById('add10')
const RESET = document.getElementById('reset')
const RANDOM = document.getElementById('random')
const MINUS1 = document.getElementById('minus1')
const MINUS10 = document.getElementById('minus10')
const COUNT_VALUE = document.getElementById ('counter-value')
const SET_VALUE = document.getElementById('set-button')
var inputValue = document.getElementById('input-val')


let countValue = 0

ADD1.addEventListener('click', function() {
    ++countValue;
    setCounter()
})

ADD10.addEventListener('click', function() {
    countValue = countValue + 10;
    setCounter()
})

MINUS1.addEventListener('click', function() {
    --countValue;
    setCounter()
})

MINUS10.addEventListener('click', function() {
    countValue = countValue - 10;
    setCounter()
})

RESET.addEventListener('click', function() {
    countValue = 0
    setCounter()
})

RANDOM.addEventListener('click', function() {
    countValue = (Math.floor(Math.random() * 100)+1);
    setCounter()
})

inputValue.addEventListener('click', function(){
    inputValue.value = ""
    document.getElementById('input-val').style.color = "black"
})

SET_VALUE.addEventListener('click', function() {

    var inputValue = parseInt(document.getElementById('input-val').value)

    console.log(inputValue)


    if(isNaN(inputValue)){
        document.getElementById('input-val').value = "Please enter a number!"
        document.getElementById('input-val').style.color = "red"

    }else{
        countValue = inputValue;

        setCounter()
    }
})

function setCounter() {
    COUNT_VALUE.textContent = countValue;
}