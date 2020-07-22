function submitt(){
    var data=document.getElementById("input")
    var p=document.createElement("p")
    var node=document.createTextNode(data.value)
    p.appendChild(node)
    var show=document.getElementById("show")
    show.appendChild(p)

    console.log(p)
    return(
        submitt1(),
        submitt2(),
        submitt3()
    )
    function submitt1(){
        var data=document.getElementById("input1")
        var p=document.createElement("p")
        var node=document.createTextNode(data.value)
        p.appendChild(node)
        var show=document.getElementById("show")
        show.appendChild(p)
        console.log(p)
    }
    function submitt1(){
        var data=document.getElementById("input1")
        var p=document.createElement("p")
        var node=document.createTextNode(data.value)
        p.appendChild(node)
        var show=document.getElementById("show")
        show.appendChild(p)
        console.log(p)
    }
    function submitt2(){
        var data=document.getElementById("input2")
        var p=document.createElement("p")
        var node=document.createTextNode(data.value)
        var H=p.appendChild(node)
        var show=document.getElementById("show")
        show.appendChild(p)
        console.log(H)
    }
    
    function submitt3(){
        var data=document.getElementById("input3")
        var p=document.createElement("p")
        var node=document.createTextNode(data.value)
        var H=p.appendChild(node)
        var show=document.getElementById("show")
        show.appendChild(p)
        console.log(H)
    }
}

function paragraph(){
    var paragaph="I am proud as a student of syalani mass It training .My best teacher is Muhammad Ali Mughal"
    var good=document.getElementById("para");
    good.innerHTML=paragaph;
}
