const userInput = document.getElementById("userInput");
const input = document.getElementsByName("name").placeholder;
var expression ='';

function press(num){
    expression += num;
    userInput.value = expression;
}
function equal(){
    userInput.value = eval(expression);
    expression ='';
}
function erase(){
    expression = '';
    userInput.value = expression;
    input = '0';  
}