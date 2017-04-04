function addNoteItem() {
    //get info
    var noteTitle = document.getElementById('noteTitle').value;
    var noteDesc = document.getElementById('noteDesc').value;
    var noteType = 'note';
      
    //get correct database
    console.log(loggedHex);
    console.log(loggedInUsername);
      
    //add item to database
    var addnote = {
    _id: new Date().toISOString(),
        title: noteTitle,
        description: noteDesc,
        date: new Date().toISOString().slice(0,10),
        type: noteType
    };
    locallp.put(addnote).then(function (result){
        console.log("Added to the database");
        location.href = "notes.html";
    }).catch(function (err){
        console.log("someting bad happened. error code: 005");
        console.log(err);
    });
}