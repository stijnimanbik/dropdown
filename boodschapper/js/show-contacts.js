// SHOW CONTACT ITEMS

function showContactItems() {
    locallp.find({
    selector: {type: {$eq: 'contact'}},
    include_docs: true,
    attachments: true,
    descending: false
    }).then(function (doc) {
        console.log(doc.docs);
        buildContactItem(doc.docs);
    }).catch(function (err) {
        console.log(err);
    });
}
      
function buildContactItem(contacts) {
    var ul = document.getElementById('contact-list');
    ul.innerHTML = '';
    contacts.forEach(function(Citem) {
        ul.appendChild(createContactListItem(Citem));
    });
}
    
function createContactListItem(Citem) {
    var label = document.createElement('a');
    label.className = 'item-text';
    label.href = 'contact-details.html#' + Citem._id;
    label.appendChild(document.createTextNode(' ' + Citem.title));
    
    var icon = document.createElement('p');
    icon.className = 'text-center item-text fa-font';
    icon.appendChild(document.createTextNode(' ' + Citem.icon));
    
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
    divDisplay.className = 'call-item tile col-xs-12';
    divDisplay.appendChild(div1);
    divDisplay.appendChild(div2);
    divDisplay.appendChild(div3);
        
    var li = document.createElement('li');
    li.id = 'li_' + Citem._id;
    li.appendChild(divDisplay);
        
    return li;
}