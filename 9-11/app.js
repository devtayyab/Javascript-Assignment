// assignment 7 
// question 1
var a=prompt("Enter your city");
if(a==="karachi"){
    document.write("wellcome to  the city of light");
}
else if(a==="faislabad"){
    document.write("wellcome to city of manchester");

}
// assignment 7 
// question 2
var b=prompt("Enter your gender");
if(b==="male"){
    document.write(" <br> Good morning sir");
}
else if(b==="female"){
    document.write(" <br> good morning mam");

}
// assignment 7 
// question 3
var c=prompt("Enter the color of road:");
if(c==="red"){
    document.write("Must stop");
}
else if(c==="yellow"){
    document.write(" <br> ready to move");

}
else{
    document.write(" <br> move now");

}
var a = 4;
 if (++a === 5){ 
     alert("given condition for variable a is true"); 
    } 
var b = 82;
 if (b++ === 83){
      alert("given condition for variable b is true");
    }
var c = 12;
 if (c++ === 13){
     
    alert("condition 1 is true");
 } 
if (c === 13){
      alert("condition 2 is true");
     } 
if (++c < 14){
     alert("condition 3 is true");
} 
if(c === 14){
     alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
     alert("The cost equals");
}
if (true){
     alert("True");
     }
if (false){
     alert("False");
}
var firstvalue=prompt("enter first value to calculate");
var secondvalue=prompt("enter second value to calculate");
var opertaor=prompt("enter operator to calculate");
var total="";
if(opertaor=='+'){
    alert("sum of number is   =" + (+firstvalue)+(+secondvalue));
}
if(opertaor=='-'){
    alert("subtraction  of umber is   =" + firstvalue - secondvalue);
}
if(opertaor=='*'){
    alert("multiplication of number is   =" + firstvalue * +secondvalue);
}
if(opertaor=='/'){
    alert("division of number is   =" + firstvalue / secondvalue);
}
