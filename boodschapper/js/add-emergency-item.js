/*document.addEventListener('DOMContentLoaded', function(){
    var inputFile = document.querySelector('#inputFile');
    var getFile;*/


function addEmergencyItem() {
    
    //get file
    var inputFile = document.querySelector('#inputFile');
    var getFile = inputFile.files[0];
    
    //get info
    var noodTitle = document.getElementById('noodTitle').value;
    var noodIcon = document.getElementById('noodIcon').value;
    var noodDesc = document.getElementById('noodDesc').value;
    var noodDate = document.getElementById('noodDate').value;
    var noodTime = document.getElementById('noodTime').value;
    var noodUrl = document.getElementById('noodUrl').value;
    var noodTel = document.getElementById('noodTel').value;
    var noodPrio = document.getElementById('noodPrio').value;
    var noodAudio = audioData;
    var noodAudioName = audioName;
    var noodAudioType = audioType;
    
    var noodType = 'emergency';
      
    //get correct database
    console.log(loggedHex);
    console.log(loggedInUsername);
    /*  
    //add item to database
    var addnood = {
    _id: new Date().toISOString(),
    title: noodTitle,
    description: noodDesc,
    date: noodDate,
    time: noodTime,
    type: noodType,
    _attachments: {
        "file": {
            content_type: getFile.type,
            data: getFile
        }
    }
        
    };
    */
    
    locallp.put({
    _id: new Date().toISOString(),
    title: noodTitle,
    icon: noodIcon,
    description: noodDesc,
    date: noodDate,
    time: noodTime,
    url: noodUrl,
    tel: noodTel,
    prio: noodPrio,
    type: noodType,
    _attachments: {
        "file": {
            content_type: getFile.type,
            data: getFile
        },
        "audiofile": {
            content_type: noodAudioType,
            data: noodAudio
        }
    } 
    }).then(function(){
        console.log("goed");
        console.log(noodAudio);
        console.log(noodAudioName);
        console.log(noodAudioType);
      console.log("Added to the database");
        location.href = "emergency.html";  
    }).catch(function(err){
        console.log("error");
        console.log(noodAudio);
        console.log(noodAudioName);
        console.log(noodAudioType);
       console.log(err);
    });
    
    
    /*
    locallp.put(addnood).then(function (result){
        console.log("Added to the database");
        location.href = "nood.html";
    }).catch(function (err){
        console.log("someting bad happened. error code: 005");
        console.log(err);
    });
    */
}
    
//}); 