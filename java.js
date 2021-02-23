window.addEventListener("load", function () {
  
  var sideBarButton = document.getElementById("sideBarButton");
  var sideBarButtonClose = document.getElementById("sideBarButtonClose");
  
  sideBarButton.addEventListener("click", () => {
    
    document.getElementById("sidebar").classList.toggle('active');

  });
  sideBarButtonClose.addEventListener("click", () => {
    
    document.getElementById("sidebar").classList.remove('active');

  });
  var thumbNailOne = document.getElementById("p1");
  var button = "<a href='resume.html'><button  id='view'>view</button></a>";

  thumbNailOne.addEventListener("mouseenter", ()=>{
    thumbNailOne.innerHTML = button;
})
  thumbNailOne.addEventListener("mouseleave", ()=>{
    thumbNailOne.innerHTML = "";
})

})
 
    ////////////////////////


