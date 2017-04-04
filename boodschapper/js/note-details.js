var clickedId = window.location.hash.substr(1);
console.log(clickedId);

function showNoteDetails() {
  locallp.find({
  selector: {_id: {$eq: clickedId}},
  include_docs: true,
  attachments: true,
  descending: false
}).then(function (doc) {

      console.log(doc);
      console.log(doc.docs);
      var specificDetails = doc.docs;
      console.table(specificDetails);

    var ul = document.getElementById('note-list');
    ul.innerHTML = '';
    ul.appendChild(createList(specificDetails));

}).catch(function (err) {
      console.log(err);
  });
}

function createList(item) {

    item.map(function(i) {
        specTitle = i.title;
        specDescr = i.description;
        specId = i._id;
        specDate = i.date;
        specTime = i.time;
    });


    //Title
    var titleIcon = document.createElement('i');
    	titleIcon.className = 'fa fa-pencil fa-fw text-center item-text';
	
    var title = document.createElement('p');
      title.className = 'item-text';
      title.appendChild(document.createTextNode(' ' + specTitle));
	
		//Date
    var dateIcon = document.createElement('i');
    	dateIcon.className = 'fa fa-calendar fa-fw text-center content-text';

    var date = document.createElement('p');
      date.className = 'content-text';
      date.appendChild(document.createTextNode(' ' + specDate));

		//Description
    var descIcon = document.createElement('i');
    	descIcon.className = 'fa fa-align-right fa-rotate-180 fa-fw text-center content-text';

    var description = document.createElement('p');
      description.className = 'content-text';
      description.appendChild(document.createTextNode(' ' + specDescr));


		//Columns containing title items
	  var titleIconCol = document.createElement('div');
    	titleIconCol.className = 'col-xs-1';
    	titleIconCol.appendChild(titleIcon);
    
    var titleCol = document.createElement('div');
    	titleCol.className = 'col-xs-10';
    	titleCol.appendChild(title);
	
		//Columns containing date items
	  var dateIconCol = document.createElement('div');
    	dateIconCol.className = 'col-xs-1';
    	dateIconCol.appendChild(dateIcon);
    
    var dateCol = document.createElement('div');
    	dateCol.className = 'col-xs-11';
    	dateCol.appendChild(date);
	
		//Columns containing description items
	  var descIconCol = document.createElement('div');
    	descIconCol.className = 'col-xs-1';
    	descIconCol.appendChild(descIcon);
    
    var descCol = document.createElement('div');
    	descCol.className = 'col-xs-10';
    	descCol.appendChild(description);


    //Rows with all collumns
    var titleRow = document.createElement('div');
      titleRow.className = 'row title-row';
      titleRow.appendChild(titleIconCol);
      titleRow.appendChild(titleCol);
	
    var contentRow = document.createElement('div');
      contentRow.className = 'row content-row';
      contentRow.appendChild(dateIconCol);
      contentRow.appendChild(dateCol);
      contentRow.appendChild(descIconCol);
      contentRow.appendChild(descCol);
	
	
		//Container with all rows
    var con = document.createElement('div');
      con.className = 'container note-item tile full-item';
      con.appendChild(titleRow);
      con.appendChild(contentRow);


    //List with all containers
    var li = document.createElement('li');
      li.id = 'li_' + specId;
      li.appendChild(con);

    return li;
}
