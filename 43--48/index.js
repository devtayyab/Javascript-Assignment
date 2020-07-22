function delfun(e){
 var c= e.parentElement
c.parentElement.remove()
console.log(e)
}
function increase(){
    var text=document.getElementById("counter")
    text.innerHTML = +text.innerHTML+1;
    
}
function decrease(){
    var text=document.getElementById("counter")
    text.innerHTML -= 1;

}