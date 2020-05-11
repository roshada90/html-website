function addTShirt(){
    sessionStorage.setItem('item1', 'T-Shirt');
}
function addJeans(){
    sessionStorage.setItem('item2', 'Jeans');
}

function nav(){
    window.location.href="./cart.html"
}

function getStorage(){
  if(sessionStorage.length>0){
  document.getElementById("result1").innerHTML = sessionStorage.getItem("item1");
  document.getElementById("result2").innerHTML = sessionStorage.getItem("item2");
  document.getElementById("resultbutton").textContent="Buy Now";
  } else {
      document.getElementById("result1").innerHTML = "Cart Empty";
  }
  }
  function navMaps(){
      window.location.href="./map.html";
  }

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var x = document.getElementById("demo");
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude+"<br> Order Placed";

}

function drop(event){
  event.preventDefault();
  var data=event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}

function allowDrop(event){
  event.preventDefault();
}

function drag(event){
  event.dataTransfer.setData("Text", event.target.id);
}