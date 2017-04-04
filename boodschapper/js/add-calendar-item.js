function addCalendarItem() {
    
    //get file
    var inputFile = document.querySelector('#inputFile');
    var getFile = inputFile.files[0];
    
    //get info
    var calendarTitle = document.getElementById('calendarTitle').value;
    var calendarIcon = document.getElementById('calendarIcon').value;
    var calendarDesc = document.getElementById('calendarDesc').value;
    var calendarDate = document.getElementById('calendarDate').value;
    var calendarTime = document.getElementById('calendarTime').value;
    var calendarType = 'calendar';
      
    //get correct database
    console.log(loggedHex);
    console.log(loggedInUsername);
    
    locallp.put({
    _id: new Date().toISOString(),
    title: calendarTitle,
    icon: calendarIcon,
    description: calendarDesc,
    date: calendarDate,
    time: calendarTime,
    type: calendarType,
    _attachments: {
        "file": {
            content_type: getFile.type,
            data: getFile
        }
    } 
    }).then(function(){
      console.log("Added to the database");
        location.href = "calendar-day.html";  
    }).catch(function(err){
       console.log(err);
    });

}