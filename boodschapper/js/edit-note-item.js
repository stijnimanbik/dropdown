var clickedId = window.location.hash.substr(1);
console.log(clickedId);

//fill inupt fields with current information
function fillInfo(){
    locallp.find({
        selector:  {_id: {$eq: clickedId}},
        include_docs: true,
        attachments: true,
        descending: false
    }).then(function (doc) {
        var fieldList = doc.docs;
        fieldList.map( function(i){
            specTitle = i.title;
            specDesc = i.description;
        });
        document.getElementById('noteTitle').value += specTitle;
        document.getElementById('noteDesc').value += specDesc;
        
    }).catch( function(err){
        console.log(err);
    });
}

//edit information
function editNoteItem(){
    var itemTitle = document.getElementById('noteTitle').value;
    var itemDesc = document.getElementById('noteDesc').value;
    locallp.get(clickedId).then( function(doc){
        doc.title = itemTitle;
        doc.description = itemDesc;
        locallp.put(doc);
        console.log('updated');
        setTimeout(function (){
            location.href='javascript:history.back()';
        }, 500);
    }).catch(function (err){
        console.log(err);
    });
}

//delete information
function deletepopup() {

locallp.find({
  selector: {_id: {$eq: clickedId}},
  include_docs: true,
  attachments: true,
  descending: false
}).then(function (doc) {
    var item = doc.docs;
    console.log(item);
    item.map(function(i) {  
        specTitle = i.title;
    });
    
    var r = confirm("U staat op het punt het volgende item te verwijderen: " + specTitle);
    if (r == true) {
        x = deleteItem();
    } else {
    }
    
    }).catch(function (err) {
        console.log(err);
    });
}

function deleteItem() {
    locallp.get(clickedId).then(function (doc) {
    locallp.remove(doc);
    console.log('removing...');
    setTimeout(function(){location.href="notes.html";},500);
    }).catch(function (err) {
        console.log(err);
    });
}