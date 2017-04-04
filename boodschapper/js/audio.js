var audioData = '';
var audioName = '';
var audioType = '';

function audioCapture() {
    console.log("1");
    var options = {
        limit: 1
    };
    console.log("2");
    navigator.device.capture.captureAudio(onSuccess, onError, options);
    console.log("3");
    function onSuccess(mediaFiles){
        var i, path, len;
        
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            console.log(mediaFiles);
            //console.log(path);
            var audiofile = document.getElementById('audiodiv');
            audiofile.src = path;
            
            console.log(mediaFiles.type);
            console.log(mediaFiles[i].type);
            
            audioData = mediaFiles[i];
            audioName = mediaFiles[i].name;
            audioType = mediaFiles[i].type;
        }
    }
    
    function onError(error){
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    }
}
