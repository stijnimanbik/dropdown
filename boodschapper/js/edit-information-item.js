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
            specIcon = i.icon;
            specDesc = i.description;
            specDate = i.date;
            specTime = i.time;
            specUrl = i.url;
        });
        document.getElementById('infoTitle').value += specTitle;
        $('option[value=' + specIcon + ']').attr('selected', true);
        document.getElementById('infoDesc').value += specDesc;
        document.getElementById('infoDate').value += specDate;
        document.getElementById('infoTime').value += specTime;
        document.getElementById('infoUrl').value += specUrl;
        
        
        
    }).catch( function(err){
        console.log(err);
    });
}

//edit information
function editInformationItem(){
    var itemTitle = document.getElementById('infoTitle').value;
    var itemIcon = document.getElementById('infoIcon').value;
    var itemDesc = document.getElementById('infoDesc').value;
    var itemDate = document.getElementById('infoDate').value;
    var itemTime = document.getElementById('infoTime').value;
    var itemUrl = document.getElementById('infoUrl').value;
    locallp.get(clickedId).then( function(doc){
        doc.title = itemTitle;
        doc.icon = itemIcon;
        doc.description = itemDesc;
        doc.date = itemDate;
        doc.time = itemTime;
        doc.url = itemUrl;
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
    setTimeout(function(){location.href="information.html";},500);
    }).catch(function (err) {
        console.log(err);
    });
}