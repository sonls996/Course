function hi(){
    alert(" Hello world");
    alert(" Bạn thấy đó, Javascript thật dễ dàng phải không :D")
}



var menu = document.getElementById("colapsee");
menu.addEventListener("click",kaka);
function kaka(){
    let kiki= document.getElementById("colapseMenu");
    if(kiki.style.maxHeight<="0px"){
        kiki.style.maxHeight="600px";
    }
    else{
        kiki.style.maxHeight="0px";
    }
}



function getVA(){
    console.log("hihi");
    
    var textChange = document.getElementById("tare").value;
    document.getElementById("box").innerHTML= textChange;
}