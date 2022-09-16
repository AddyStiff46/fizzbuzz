function print(...a) {
    console.log(...a);
}

// var screen = document.getElementsByClassName(div).innerHTML;
//make a function that counts and logs each number
var i = 1;
function counter() {
    var display = document.getElementById('display');
    var displayHTML = "";
    var result = "";
    for (i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result = "Fizz";
        }
        else if (i % 3 === 0) {
            result = "Buzz";
        }
        else if (i % 5 === 0) {
            result = "FizzBUzz";
        }
        else {
            result = i;
        }
        
        displayHTML += "<div>" + result + "</div>";
    }
    display.insertAdjacentHTML('afterend', displayHTML);
    
}








