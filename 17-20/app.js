// assignment 10
// question 1
var arr=[[],[]];
// assignment 10
// question 2
// assignment 10
// question 2
var arr=[[0,1,2,3] ,[1,0,1,2],[2,1,0,1]]
document.write(arr[0]+ "<br>"+ arr[1]+ "<br>"+ arr[2]+"<br>");
// assignment 10
// question 3
for(i=0; i<=10; i++){
    document.write(i +"<br>");
}
// assignment 10
// question 4
var num=prompt("enter the table number");
var lngth=prompt("enter length of table");
for(i=1; i<=lngth; i++){
    document.write(num + " * " + i + " = "  + num*i + "<br>" )
}
// assignment 10
// question 5
var fruits=["apple","banana","mango","orange","strawberry"]
for(i=0; i<=fruits.length; i++){
    document.write(fruits[i] + "<br>")
}
// assignment 10
// question 6
var A=["apple", "cookie", "chips", "patties"]
var serch=prompt("Weelcome to Abc Bkery,What do you want to order")

for(i=0;i<=A.length ;i++ ){
    if(serch==A[i]){
        document.write(A[i] +"is availble at index "+ i)
        break
    }
    else{
        document.write("your search is not available <br>")
    
    }

}
// assignment 10
// question 7
var a=[22,33,44,55,66,88]
var larger=0;
document.write("array element is " + a  + "<br>")
for(i=0; i<=a.length; i++){
    if (a[i] > larger){
        larger=a[i]
    }

}
document.write("larger number is  = "   + larger + "<br>")
// assignment 10
// question 8
var a=[22,33,44,55,18,88]
var smaller=a[0];
document.write("array element is " + a  + "<br>")
for(i=0; i<=a.length; i++){
    if (a[i] < smaller){
      smaller  =a[i]
    }

}
document.write("smaller number is  = "   + smaller + "<br>")
// assignment 10
// question 10
for(i=0; i<=100; i++){
    if (i%5==0){
        document.write(i +"," )
    }
}