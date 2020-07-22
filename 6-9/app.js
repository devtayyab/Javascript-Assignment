// assignment 6
// question 1
var a=10;
document.write("Result: <br> the value of a is  = 10 <br> ................................. <br><br> The vale of a++ = 11<br> <br>")
a=a++
document.write("The vale of a++ = 11<br> Now the value of a++ = 12 <br><br>")
a=a--
document.write("The vale of a-- = 11<br> Now the value of a-- = 11 <br><br>")
a=a--
document.write("The vale of a++ = 11<br> Now the value of a++ = 10 <br><br>")
// assignment 6
// question 2
var a=2;
var b=1;
var result=--a - --b + ++b + b--;
document.write(" The Value of a is"+result +"<br>");
document.write("The Value of --a is "+ --a +"<br>");
document.write("The Value this excutaion  "+--a - --b +"<br>");
document.write("The Value excuation  " +--a - --b + ++b +"<br>");