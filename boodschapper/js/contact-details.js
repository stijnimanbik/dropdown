var clickedId = window.location.hash.substr(1);
console.log(clickedId);

function showContactDetails() {
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

    var ul = document.getElementById('contact-list');
    ul.innerHTML = '';
    ul.appendChild(createList(specificDetails));

}).catch(function (err) {
      console.log(err);
  });
}

function createList(item) {

    item.map(function(i) {
        specTitle = i.title;
        specIcon = i.icon;
        specPhone = i.phone;
        specId = i._id;
        specEmail = i.email;
    });


    //Title
    var titleIcon = document.createElement('p');
    	titleIcon.className = 'text-center item-text fa-font';
      titleIcon.appendChild(document.createTextNode(' ' + specIcon));
	
    var title = document.createElement('p');
      title.className = 'item-text';
      title.appendChild(document.createTextNode(' ' + specTitle));
	
		//Date
    var phoneIcon = document.createElement('i');
    	phoneIcon.className = 'fa fa-phone fa-fw text-center content-text';

    var phone = document.createElement('a');
      phone.className = 'content-text';
	    phone.href = 'tel:' + specPhone;
      phone.appendChild(document.createTextNode(' ' + specPhone));

		//Time
    var emailIcon = document.createElement('i');
    	emailIcon.className = 'fa fa-envelope-o fa-fw text-center content-text';

    var email = document.createElement('a');
      email.className = 'content-text';
	    email.href = 'mailto:' + specEmail;
      email.appendChild(document.createTextNode(' ' + specEmail));


		//Columns containing title items
	  var titleIconCol = document.createElement('div');
    	titleIconCol.className = 'col-xs-1';
    	titleIconCol.appendChild(titleIcon);
    
    var titleCol = document.createElement('div');
    	titleCol.className = 'col-xs-10';
    	titleCol.appendChild(title);
	
		//Columns containing date items
	  var phoneIconCol = document.createElement('div');
    	phoneIconCol.className = 'col-xs-1';
    	phoneIconCol.appendChild(phoneIcon);
    
    var phoneCol = document.createElement('div');
    	phoneCol.className = 'col-xs-11 col-md-6';
    	phoneCol.appendChild(phone);
	
		//Columns containing time items
	  var emailIconCol = document.createElement('div');
    	emailIconCol.className = 'col-xs-1';
    	emailIconCol.appendChild(emailIcon);
    
    var emailCol = document.createElement('div');
    	emailCol.className = 'col-xs-11 col-sm-4 col-md-3';
    	emailCol.appendChild(email);
    
    var spacerCol = document.createElement('div');
    	spacerCol.className = 'col-xs-1 spacer';


    //Rows with all collumns
    var titleRow = document.createElement('div');
      titleRow.className = 'row title-row';
      titleRow.appendChild(titleIconCol);
      titleRow.appendChild(titleCol);
	
    var contentRow = document.createElement('div');
      contentRow.className = 'row content-row';
      contentRow.appendChild(phoneIconCol);
      contentRow.appendChild(phoneCol);
      contentRow.appendChild(emailIconCol);
      contentRow.appendChild(emailCol);
      contentRow.appendChild(spacerCol);
	
	
		//Container with all rows
    var con = document.createElement('div');
      con.className = 'container call-item tile full-item';
      con.appendChild(titleRow);
      con.appendChild(contentRow);


    //List with all containers
    var li = document.createElement('li');
      li.id = 'li_' + specId;
      li.appendChild(con);

    return li;
}
