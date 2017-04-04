
// Wait for device API libraries to load
function onLoad() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

//device APIs are available
function onDeviceReady() {
  document.addEventListener("backbutton", function (e){
    e.preventDefault();
}, false);
}