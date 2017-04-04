// SHOW CALENDAR ITEMS

function showCalendarItems() {
    locallp.find({
    selector: {type: {$eq: 'calendar'}},
    include_docs: true,
    attachments: true,
    descending: false
    }).then(function (doc) {
        buildCalendarItem(doc.docs);
    }).catch(function (err) {
        console.log(err);
    });
}
      
function buildCalendarItem(agendas) {
    var ul = document.getElementById('calendar-day-list');
    agendas.forEach(function(Aitem) {
        ul.appendChild(createCalendarListItem(Aitem));
    });
}
    
function createCalendarListItem(Aitem) {
    var label = document.createElement('a');
    label.className = 'item-text';
    label.href = 'calendar-details.html#' + Aitem._id;
    label.appendChild(document.createTextNode(' ' + Aitem.title));
    
    var icon = document.createElement('p');
    icon.className = 'text-center item-text fa-font';
    icon.appendChild(document.createTextNode(' ' + Aitem.icon));
    
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
    divDisplay.className = 'calendar-item tile col-xs-12';
    divDisplay.appendChild(div1);
    divDisplay.appendChild(div2);
    divDisplay.appendChild(div3);
        
    var li = document.createElement('li');
    li.id = 'li_' + Aitem._id;
    li.appendChild(divDisplay);
        
    return li;
}