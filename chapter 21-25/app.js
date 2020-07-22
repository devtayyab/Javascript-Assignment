//task 1
var fnmae=prompt("enter first name");
var lname=prompt("enter last name");
var fullname=fnmae + " " + lname;
document.write("Asslamoalikum   " + fullname  + "</br>");

//task 2
var fmobile=prompt("  enter your favourte mobile");
document.write("My favourte phone is : " + fmobile +  " </br> length of  string is " +  fmobile.length);

//task 3
var country="pakistan";
document.write("string : " + country + "</br> index of n  is : " + country.indexOf("n"));
//task 4
 var greet="hello world ";
 document.write("</br>  string : " + greet +" </br> last index of 'l' : " + greet.lastIndexOf("l"));
 //task 5
 document.write("</br>  string is: " + country + "</br>  character at index 3 :" + country.charAt("3") );

//task 6
var city="hyderabad";
document.write(" </br> city : " + city +"</br> After Replacement  : " + city.replace("hyder","islam"))
//task 7
var message =("Ali and Sami are best friends. They play cricket and football together.");
var message=message.replace(/and/g, "&");
document.write("</br> " + message)
//task 8
var value="478";
document.write("</br> Type is : " + typeof(value));
value=+value;
document.write("</br> Type is : " + typeof(value));
//task 9
var input=prompt("enter the som string");
 document.write("</br> User input : " + input + "</br> Upper case " + input.toLocaleUpperCase());
//task 11
var input1=prompt("enter the som string");
var tittle=input1.slice(0,1);
var baqi=input1.slice(1,input1.length);
 document.write("</br> User input : " + input1 + "</br> Tittle case " + tittle.toUpperCase()+ baqi);
//task 16
var universty="university of karachi";
for(i=0; i<universty.length; i++){
    document.write("</br>" + universty[i])
}
// task 17
var userin=prompt("enter a string");
for(i=o; i>userin.length+1; i++){

    

}
document.write("</br>"+ userin[i])

