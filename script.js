
function bmiCalculator(weight,height){
    var bmi = Math.floor(weight/(height*height));
    return bmi;
}

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);

