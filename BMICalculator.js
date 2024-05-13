let start = ' ';
do {
    mass = parseFloat(prompt("enter your weight in kg "));
    height = parseFloat(prompt("enter your height in cm"));
    bmi = mass / ((height / 100) ** 2);
    if (bmi < 18.5) {
        alert("you are underweight" + bmi);
    }
    else if (bmi < 25) {
        alert("normal" + bmi);
    }
    else {
        alert("you are obese" + bmi);
    }
    start = prompt("enter yes or no to continue");
}
while (start == "yes") 