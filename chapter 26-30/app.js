//task 1
var num=+prompt("enter a potive NUMBER");
document.write("Number is : " + num + " </br>round of vale : " + Math.round(num) + "</br> FLoor value : " + Math.floor(num) + "</br> Ceil value is :  " + Math.ceil(num))
//task 2
var num1=+prompt("enter a NEGTIVE NUMBER");
document.write("</br> Number is : " + num1 + " </br>round of vale : " + Math.round(num1) + "</br> FLoor value : " + Math.floor(num1) + "</br> Ceil value is :  " + Math.ceil(num))
// task 3
var num2=+prompt("enter number for find absolute value");
document.write("</br> absolute value of " + num2 + " is " + Math.abs(num2))
// task 4
var num3=Math.random();
var dice=num3 *6;
document.write("random dice value is  " + Math.round(dice));
// task 5
var num4=Math.random();
var tass=num4 *2;
var check=Math.round(tass);
if (check==1){
document.write("</br> 1  </br> random coin value is  : Tails");
}
else{
    document.write("</br> 2  </br> random coin value is  : head");

}
// task 6
var rand=Math.random();
var ct=Math.round(rand*100);
document.write("</br> random value b/w 1 to 100 :  " + ct );
//task 7
var weight=prompt("enter your weight");
document.write("</br> The weight of User is " + weight + " kilograms")
//task 8
var num7=Math.round(Math.random()*10);
alert(num7)
var con=+prompt("enter NUmber for matching");
if(num7===con){
    document.write("</br> Congratulation")

}
else{
    alert("try again")
}
