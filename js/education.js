var btn = document.getElementById("toggleSearch").addEventListener("click",toggleLoggin);
function toggleLoggin(){
    var sot= document.getElementById("search");
    sot.classList.toggle("ann");
    // alert(" Thêm class thành công");
}


var btn = document.getElementById("toggleSearch1").addEventListener("click",toggleLoggin1);
function toggleLoggin1(){
    var sot= document.getElementById("search1");
    sot.classList.toggle("ann");
    // alert(" Thêm class thành công");
}


var hidden= document.getElementById("clickme");
hidden.addEventListener("click",hiddenLogin);
function hiddenLogin(){
  if( document.getElementById("mobile-wrapLogin").style.height<="0px"){
  document.getElementById("mobile-wrapLogin").style.height= "120px"
  }else{
    document.getElementById("mobile-wrapLogin").style.height="0px"
  }
}


function openNav() {
  document.getElementById("mySidebar").style.right = "0";
  // document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mySidebar").style.opacity = "1";
}
function closeNav() {
  document.getElementById("mySidebar").style.right = "-100%";
  // document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mySidebar").style.opacity = "0";
}




    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
   document.getElementById("do").addEventListener("click",hienthi);
   function hienthi(){
     if(document.getElementById("do").style.backgroundColor==="white"){
       document.getElementById("do").style.backgroundColor="red";
       document.getElementById("do").innerHTML="Click vào đây để đổi background-color thành màu trắng";
     }else{
      document.getElementById("do").style.backgroundColor="white";
      document.getElementById("do").innerHTML="Click vào đây để đổi background-color thành màu đỏ";
     }
   }