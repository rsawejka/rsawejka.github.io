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
  var button = "<a href='http://rsawejka.bitlampsites.com/wpd/wordpress/wordpressfinal/'><div id='top'></div><div id='view'>view</div></a>";

  thumbNailOne.addEventListener("mouseenter", ()=>{
    thumbNailOne.innerHTML = button;
})
  thumbNailOne.addEventListener("mouseleave", ()=>{
    thumbNailOne.innerHTML = "";
})

})
 
    ////////////////////////


