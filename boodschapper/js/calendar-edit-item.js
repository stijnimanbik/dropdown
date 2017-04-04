var clickedId = window.location.hash.substr(1);
console.log(clickedId);

//fill input field with current information
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
            specDate = i.date;
            specTime = i.time;
        });
        document.getElementById('agendaTitle').value += specTitle;
        document.getElementById('agendaDesc').value += specDesc;
        document.getElementById('agendaDate').value += specDate;
        document.getElementById('agendaTime').value += specTime;
    }).catch( function(err){
        console.log(err);
    });
}

//edit information
function editItem(){
    var itemTitle = document.getElementById('agendaTitle').value;
    var itemDesc = document.getElementById('agendaDesc').value;
    var itemDate = document.getElementById('agendaDate').value;
    var itemTime = document.getElementById('agendaTime').value;
    locallp.get(clickedId).then( function(doc){
        doc.title = itemTitle;
        doc.description = itemDesc;
        doc.date = itemDate;
        doc.time = itemTime;
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
    setTimeout(function(){location.href="calendar-day.html";},500);
    }).catch(function (err) {
        console.log(err);
    });
}