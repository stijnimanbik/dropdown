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
            specTel = i.tel;
            specPrio = i.prio;
        });
        document.getElementById('noodTitle').value += specTitle;
        $('option[value=' + specIcon + ']').attr('selected', true);
        document.getElementById('noodDesc').value += specDesc;
        document.getElementById('noodDate').value += specDate;
        document.getElementById('noodTime').value += specTime;
        document.getElementById('noodUrl').value += specUrl;
        document.getElementById('noodTel').value += specTel;
        $('option[value=' + specPrio + ']').attr('selected', true);
        
        
        
    }).catch( function(err){
        console.log(err);
    });
}

//edit information
function editEmergencyItem(){
    var itemTitle = document.getElementById('noodTitle').value;
    var itemIcon = document.getElementById('noodIcon').value;
    var itemDesc = document.getElementById('noodDesc').value;
    var itemDate = document.getElementById('noodDate').value;
    var itemTime = document.getElementById('noodTime').value;
    var itemUrl = document.getElementById('noodUrl').value;
    var itemTel = document.getElementById('noodTel').value;
    var itemPrio = document.getElementById('noodPrio').value;
    locallp.get(clickedId).then( function(doc){
        doc.title = itemTitle;
        doc.icon = itemIcon;
        doc.description = itemDesc;
        doc.date = itemDate;
        doc.time = itemTime;
        doc.url = itemUrl;
        doc.tel = itemTel;
        doc.prio = itemPrio;
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
    setTimeout(function(){location.href="emergency.html";},500);
    }).catch(function (err) {
        console.log(err);
    });
}