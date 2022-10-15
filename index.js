const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const customInput = document.getElementById("custom-btn");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerAmount = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tip");
const resetAll = document.getElementById("reset-button");
const error = document.getElementById("error");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
customInput.addEventListener("input", tipCustomFun);
resetAll.addEventListener("click", reset);

tips.forEach(function(val){
    val.addEventListener("click", handleclick)
});

billInput.value = "0.0";
peopleInput.value = "0";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2)
totalPerAmount.innerHTML = "$" + (0.0).toFixed(2)

let billValue = "0.0";
let peopleValue = "1";
let tipValue = "0.15";

function billInputFun(){
    billValue = parseFloat(billInput.value);
    calculatorTip();
}

function peopleInputFun(){
    peopleValue = parseFloat(peopleInput.value);
    calculatorTip();

    if (peopleValue < 1){
        error.style.visibility = "visible"
        peopleInput.style.border = "thin solid red"
    }else{
        error.style.visibility = "hidden"
        peopleInput.style.border = "none"
        calculatorTip();
    }
}

function tipCustomFun(){
    tipValue = parseFloat(customInput.value / 100);
    tips.forEach(function(val){
        val.classList.remove("active-tip");
    })
    calculatorTip();
}

function handleclick(event){
    tips.forEach(function(val){
        val.classList.remove("active-tip")
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip")
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
    calculatorTip();
}

function calculatorTip(){
    if (peopleValue >=1){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue * tipAmount) / peopleValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2)
        totalPerAmount.innerHTML = "$" + total.toFixed(2)
    }
}

function reset(){
    billInput.value = "0.0";
    billInputFun();
    peopleInput.value = "0";
    peopleInputFun()
    customInput.value = "";
}