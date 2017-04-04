function cameraTakePicture() {
   navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 50,
      saveToPhotoAlbum: true,
      correctOrientation: true,
      destinationType: Camera.DestinationType.DATA_URL
   });

   function onSuccess(imageData) {
       alert('Afbeelding opgeslagen in uw galerij!');
   }

   function onFail(message) {
      alert('De afbeelding kon niet opgeslagen worden. De reden is: ' + message);
   }
}