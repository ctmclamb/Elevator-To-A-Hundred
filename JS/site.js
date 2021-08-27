
//Get the values from the page 
//Start or controller function
function getValues() {
//Get values from the page 
let startValue= document.getElementById("startValue").value;
let endValue= document.getElementById("endValue").value;



//We need to validate our input
//parse into integers
startValue = parseInt(startValue);
endValue = parseInt(endValue);

if(Number.isInteger(startValue) && Number.isInteger(endValue)) {

    //We Call generateNumbers 
   let numbers = generateNumbers(startValue, endValue);
    //We Call displayNumbers
    displayNumbers(numbers);

} else {
    alert("You must enter integers")
}






}




//Generate numbers from the start value to the end value
//Logic function 

function generateNumbers(sValue, eValue) {

    let numbers = [];

    //We want to get all numbers from start to end
    // index = index +1 is the same thing as index++
    for(let index = sValue; index <= eValue; index++){

        //this will excute into a loop until index equals eValue

            numbers.push(index);
    }

    return numbers;

}

//Display the numbers and mark the even numbers in bold
//Display or view function

function displayNumbers(numbers){

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let className = "even"

        let number = numbers[index];

        if(number % 2 == 0) {

            className="even"

        } else{
            className="odd"
        }
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        
    }

    document.getElementById("results").innerHTML = templateRows;
}