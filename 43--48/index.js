function delfun(){
const id=document.getElementsByClassName("row")
delete id;
console.log(id)
}
function increase(){
    var text=document.getElementById("counter")
    text.innerHTML = +text.innerHTML+1;
    
}
function decrease(){
    var text=document.getElementById("counter")
    text.innerHTML -= 1;

}