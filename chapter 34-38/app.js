// task 1
function date(){
    var d=new Date();
    return d;
}
document.write( date());
// task 2
function name(){
    var first="Muhammad";
    var last="tayyab";
    var full=first+last;
    return full;

}
document.write("</br>"+ name())
// task 3
function sum(){
    var a=prompt("enter first Number");
    var b=prompt("enter second Number");
    var total=+a + +b;
    return total;
}
document.write("</br> sum of number is : " + sum())
// task 4
function calc(num1,num2,opr){
   if (opr==='+'){
    return num1+num2;
    
   }
   if (opr==='-') {
    return num1-num2;
    
       
   } if(opr==='*') {
    return num1*num2;
    
       
   }
   if(opr==='/'){
    return num1/num2;
    
   }
   else{
   document.write("please enter correct opertator")
   }
}
var a=prompt("please enter first num");
var b=prompt("please enter second num");
var c=prompt("please enter operato");
document.write("your result is :" +calc(a,b,c));
// task 5
function squre(a){
    return a*a;
}
var sq=+prompt("please enter number for squre")
document.write("</br>" + squre(sq))
// task 6
function factorial(a){
    for(i=1; i<a;i++){
        var fac=a*i

    }
    return fac;
}
var fact=+prompt("please enter number for factorial")
document.write("</br>" + factorial(fact))
// task 7
function range(a,b){
    Count=a;
    for(i=a; i<b-1; i++){
        Count+=1;
        document.write( Count);
    }
}
var e=+prompt("please enter start number ");
var f=+prompt("please enter end number")
document.write("</br>" + range(e,f));
// task 8
function hypotenus(a,b){
    var hypotenuse=a*a * b*b;
    return hypotenuse;
}
var e=+prompt("please enter start number ");
var f=+prompt("please enter end number")
document.write("</br>" + hypotenus(e,f));
// task 9
function area(a,b){
    var area=a*b;
    return area;
}
var sec=+prompt("plese enter second value");
document.write("</br>"+area(5,sec));
// task 10
