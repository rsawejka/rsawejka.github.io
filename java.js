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
  var button1 = "<a href='http://rsawejka.bitlampsites.com/wpd/wordpress/wordpressfinal/'><div id='view'><div id='viewButton'><span>view</span></div></div></a>";

  thumbNailOne.addEventListener("mouseenter", ()=>{
    thumbNailOne.innerHTML = button1;
})
  thumbNailOne.addEventListener("mouseleave", ()=>{
    thumbNailOne.innerHTML = "";
})

var thumbNailTwo = document.getElementById("p2");
var button2 = "<a href='http://rsawejka.bitlampsites.com/wpd/web2Final/schedule.php'><div id='view'><div id='viewButton'><span>view</span></div></div></a>";
thumbNailTwo.addEventListener("mouseenter", ()=>{
  thumbNailTwo.innerHTML = button2;
})
thumbNailTwo.addEventListener("mouseleave", ()=>{
  thumbNailTwo.innerHTML = "";
})


var thumbNailThree = document.getElementById("p3");
var button3 = "<a href='http://rsawejka.bitlampsites.com/js2/final/'><div id='view'><div id='viewButton'><span>view</span></div></div></a>";
thumbNailThree.addEventListener("mouseenter", ()=>{
  thumbNailThree.innerHTML = button3;
})
thumbNailThree.addEventListener("mouseleave", ()=>{
  thumbNailThree.innerHTML = "";
})

var thumbNailFour = document.getElementById("p4");
var button4 = "<a href='https://final-ei55cb6qb-rsawejka.vercel.app/'><div id='view'><div id='viewButton'><span>view</span></div></div></a>";
thumbNailFour.addEventListener("mouseenter", ()=>{
  thumbNailFour.innerHTML = button4;
})
thumbNailFour.addEventListener("mouseleave", ()=>{
  thumbNailFour.innerHTML = "";
})

})
 
    ////////////////////////


