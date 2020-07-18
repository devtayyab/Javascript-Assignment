function content(){
    var cont=document.getElementById("main-content")
    var data=document.getElementsByTagName("p")
    var p = data.childNodes[0].childNodes[1].childNodes[1].childNodes[1]; 
    console.log(p.innerHTML);
    console.log(cont[1].innerHTML)
}
content()