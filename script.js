//declaration
const weightInput = document.querySelector(".weight");
const heightInput = document.querySelector(".height");
const outputWeight = document.querySelector(".weight-value");
const outputHeight = document.querySelector(".height-value");
const submitButton = document.querySelector(".submit");
const clearButton = document.querySelector(".clear");
const result = document.querySelector(".result");
const message = document.querySelector(".message");
const types = ["underweight" , "normal" , "overweight" , "obese"]


function calculateBMI(){
 const weight = parseFloat(weightInput.value);
 const height = parseFloat(heightInput.value) / 100; // convert to m
 if(!isNaN(weight) && !isNaN(height) && weight>0 && height>0){ // check numbers
    const bmi = weight / (height * height);
    result.textContent = bmi.toFixed(2) // rounded to two decimal places
    let type;
    if(bmi <18.5){
        type = types[0];
    }
    else if(bmi >18.5 && bmi < 25){
        type = types[1]
    }
    else if(bmi >25  && bmi <30){
        type = types[2];
    }
    else{
        type = types[3]
    }
    // display
    message.textContent = "Your BMI is " + type;

 }
 else{
    message.textContent = "Enter  valid number";
    result.textContent = 0;
 }
}

function clear(){
    result.textContent = "N/A";
    message.textContent = "Output for BMI";
    weightInput.value = 0;
    heightInput.value = 0;
    outputWeight.textContent = `Weight(${weightInput.value}kg)`;
    outputHeight.textContent = `Height(${heightInput.value}cm)`;
}

// event listeners
weightInput.addEventListener("input" , () =>{
    outputWeight.textContent = `Weight(${weightInput.value}kg)`;
})
heightInput.addEventListener("input" , () =>{
    outputHeight.textContent = `Height(${heightInput.value}cm)`;
})
submitButton.addEventListener("click" , calculateBMI);
clearButton.addEventListener("click" , clear);