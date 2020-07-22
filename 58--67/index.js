function content(){
    var main=document.getElementById("main-content");
    var child=console.log(main.childNodes)
   var rend= document.getElementsByClassName("render")
    console.log(main.firstChild.nodeValue)
    document.write(child)
}
content()

function fill(){
    var val=document.getElementById("firstName")
  var textval=val.innerHTML="first name : muhammad tyyab"
    

}
fill()
function fill1(){
    var val=document.getElementById("lastName")
  var textval=val.innerHTML="last name : haris ali"
    

}
fill1()
// question No 2
function formcontent(){
    var content=document.getElementById("form-content")
   document.write(content.nodeType)
}
formcontent()
function formcontent1(){
    var g=document.getElementById("last-name")
   console.log(g.nodeType)
}
formcontent1()

