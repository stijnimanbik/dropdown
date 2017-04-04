// SHOW NOTE ITEMS

function showNoteItems() {
    locallp.find({
    selector: {type: {$eq: 'note'}},
    include_docs: true,
    attachments: true,
    descending: false
    }).then(function (doc) {
        buildNoteItem(doc.docs);
    }).catch(function (err) {
        console.log(err);
    });
}
      
function buildNoteItem(notes) {
    var ul = document.getElementById('notes-list');
    ul.innerHTML = '';
    notes.forEach(function(Nitem) {
        ul.appendChild(createNoteListItem(Nitem));
    });
}
    
function createNoteListItem(Nitem) {
    var label = document.createElement('a');
    label.className = 'item-text';
    label.href = 'note-details.html#' + Nitem._id;
    label.appendChild(document.createTextNode(' ' + Nitem.title));
    
    var icon = document.createElement('i');
    icon.className = 'fa fa-pencil fa-fw';
    
    var fontawesome = document.createElement('a');
    fontawesome.className = 'item-text';
    fontawesome.appendChild(icon);
    
    var image = document.createElement('img');
    image.className = 'item-button';
    image.src = 'img/open-icon.png';
    
    var div1 = document.createElement('div');
    div1.className = 'item-left col-xs-1';
    div1.appendChild(fontawesome);
    
    var div2 = document.createElement('div');
    div2.className = 'item-center col-xs-8';
    div2.appendChild(label);
    
    var div3 = document.createElement('div');
    div3.className = 'icon-right col-xs-2 pull-right';
    div3.appendChild(image);
    
    var divDisplay = document.createElement('div');
    divDisplay.className = 'note-item tile col-xs-12';
    divDisplay.appendChild(div1);
    divDisplay.appendChild(div2);
    divDisplay.appendChild(div3);
        
    var li = document.createElement('li');
    li.id = 'li_' + Nitem._id;
    li.appendChild(divDisplay);
        
    return li;
}