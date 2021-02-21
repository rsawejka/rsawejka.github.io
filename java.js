window.addEventListener("load", function(){
    var menuOpen = document.getElementById("menuOpen");
    var menuClose = document.getElementById("menuClose");
    var leftMenuStatus = false;



    menuOpen.addEventListener("click", function() {
        leftMenu.style.display = "block";
        leftMenuStatus = true;

        if(leftMenuStatus == true){
            menuOpen.style.display = "none";
            menuClose.style.display = "block";

        }
      });
    
      
})
    

