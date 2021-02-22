window.addEventListener("load", function () {
  
  var sideBarButton = document.getElementById("sideBarButton");
  var sideBarButtonClose = document.getElementById("sideBarButtonClose");
  
  sideBarButton.addEventListener("click", () => {
    
    document.getElementById("sidebar").classList.toggle('active');

  });
  sideBarButtonClose.addEventListener("click", () => {
    
    document.getElementById("sidebar").classList.remove('active');

  });

})
    ////////////////////////


