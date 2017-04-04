function addInformationItem() {
    
    //get file
    var inputFile = document.querySelector('#inputFile');
    var getFile = inputFile.files[0];
    
    //get info
    var infoTitle = document.getElementById('infoTitle').value;
    var infoIcon = document.getElementById('infoIcon').value;
    var infoDesc = document.getElementById('infoDesc').value;
    var infoDate = document.getElementById('infoDate').value;
    var infoTime = document.getElementById('infoTime').value;
    var infoUrl = document.getElementById('infoUrl').value;
    var infoType = 'information';
      
    //get correct database
    console.log(loggedHex);
    console.log(loggedInUsername);
      
    locallp.put({
    _id: new Date().toISOString(),
    title: infoTitle,
    icon: infoIcon,
    description: infoDesc,
    date: infoDate,
    time: infoTime,
    url: infoUrl,
    type: infoType,
    _attachments: {
        "file": {
            content_type: getFile.type,
            data: getFile
        }
    } 
    }).then(function(){
      console.log("Added to the database");
        location.href = "information.html";  
    }).catch(function(err){
       console.log(err);
    });

}