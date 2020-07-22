// task 1
var date=Date();
document.write(date);
// task 2
var month=['january','febrauary','march','April','may','june','july','aughust']
var a= new Date();
document.write(" </br> current Month: " +month[a.getMonth()]);
// task 3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay]; 
document.write("</br>today is " + nameOfToday)
// task 4
if (theDay==0 || 6){
    document.write("</br>It is fun day");
}
// task 5
var dat=now.getDate();
if( dat< 15){
document.write("</br>first fifteen date of month");
}
// task 6
document.write("</br>" +date)
var nine=now.getTime();
document.write("<br> Elapsd time in second from 1, 1970 : " + nine);
document.write("<br> Elapsd time in minute from 1, 1970 : " + nine/60 +"</br>")
// task 7
var hr=now.getHours();
if(hr<12 ){
    document.write("it's AM ")
}
else{
    document.write("it's PM")
}
// task 8
var laterdate=new Date();
laterdate=laterdate.setDate(31);
document.write(laterdate);
//task 9
var dat=new Date()
var NoOfUn=+prompt("enter number of units");
var price=+prompt("enter price of units");
total=NoOfUn*price;
document.write("<h1>K Electric Bill</h1> </br>" + "coustomer Name : ABC coustomer </br> Months :  Febraury </br> Number of units :  " + NoOfUn + "</br>  Charges per unit : " + price +"</br> Net Amount Payable(Within due Date) :" + total + "</br> Late PAyment Surcharge : 350 </br> Gross Amount (payable after Due date)"+ (+total)+(+350) )