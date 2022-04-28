function clearscreen(){
    document.getElementById("result").value = "";
}
//this function display value
function display(value){
    document.getElementById("result").value += value;
}
//this value will calculate the numbers
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}