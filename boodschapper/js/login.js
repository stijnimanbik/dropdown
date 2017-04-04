$(document).ready(function() {
    $('.eventbutton').click(function() {
      $('.add-show').hide().show('slow');
      $('.add-hide').show().hide('slow');
    });
});

// Wait for device API libraries to load
function onLoad() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

//device APIs are available
function onDeviceReady() {
  document.addEventListener("backbutton", onBackKeyDown, false);
}

//Backbutton
function onBackKeyDown(e) {
    e.preventDefault();
  location.href = "index.html";
}
