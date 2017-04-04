var clickedId = window.location.hash.substr(1);
console.log(clickedId);

function showEmergencyDetails() {
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

    var ul = document.getElementById('emergency-list');
    ul.innerHTML = '';
    ul.appendChild(createList(specificDetails));

}).then(function(){
                return locallp.getAttachment(clickedId, 'file');
            }).then(function(blob){
                var url = URL.createObjectURL(blob);
                var img = document.createElement('img');
                img.className = 'imgtemp';
                img.src = url;
      
                var imgarea = document.getElementById('imgarea');
                imgarea.appendChild(img);
      
                //document.imgarea.appendChild(img);
                var fileSize = JSON.stringify(Math.floor(blob.size/1024));
                var contentType = JSON.stringify(blob.type);
                console.log(fileSize);
      
            }).then(function(){
                return locallp.getAttachment(clickedId, 'audiofile');
            }).then(function(audiofile){
                var audioUrl = audiofile.fullPath;
                var audio = document.createElement('audio');
                audio.controls = 'controls';
                audio.src = audioUrl;
      console.log(audioUrl);
                var audiodiv = document.getElementById('audiodiv');
                audiodiv.appendChild(audio);
                
                var fileSize1 = JSON.stringify(Math.floor(audiofile.size/1024));
                var contentType1 = JSON.stringify(audiofile.type);
                console.log(fileSize1);
      
            }).catch(function (err) {
                console.log(err);
            });
}

function createList(item) {

    item.map(function(i) {
        specTitle = i.title;
        specIcon = i.icon;
        specDescr = i.description;
        specId = i._id;
        specDate = i.date;
        specTime = i.time;
        specUrl = i.url;
        specTel = i.tel;
        specPrio = i.prio;
    });


    //Title
    var titleIcon = document.createElement('p');
    	titleIcon.className = 'text-center item-text fa-font';
      titleIcon.appendChild(document.createTextNode(' ' + specIcon));
	
    var title = document.createElement('p');
      title.className = 'item-text';
      title.appendChild(document.createTextNode(' ' + specTitle));
	
		//Date
    var dateIcon = document.createElement('i');
    	dateIcon.className = 'fa fa-calendar fa-fw text-center content-text';

    var date = document.createElement('p');
      date.className = 'content-text';
      date.appendChild(document.createTextNode(' ' + specDate));

		//Time
    var timeIcon = document.createElement('i');
    	timeIcon.className = 'fa fa-clock-o fa-fw text-center content-text';

    var time = document.createElement('p');
      time.className = 'content-text';
      time.appendChild(document.createTextNode(' ' + specTime));

		//Description
    var descIcon = document.createElement('i');
    	descIcon.className = 'fa fa-align-right fa-rotate-180 fa-fw text-center content-text';

    var description = document.createElement('p');
      description.className = 'content-text';
      description.appendChild(document.createTextNode(' ' + specDescr));

		//Link / url
    var linkIcon = document.createElement('i');
    	linkIcon.className = 'fa fa-link fa-fw text-center content-text';

    var link = document.createElement('a');
      link.className = 'content-text';
      link.href = 'http://' + specUrl;
      link.target = '_blank';
      link.appendChild(document.createTextNode(' ' + specUrl));

		//Telephone number
    var telIcon = document.createElement('i');
    	telIcon.className = 'fa fa-phone fa-fw text-center content-text';

    var tel = document.createElement('a');
      tel.className = 'content-text';
      tel.href = 'tel:' + specTel;
      tel.appendChild(document.createTextNode(' ' + specTel));

		//Priority
    var prioIcon = document.createElement('i');
    	prioIcon.className = 'fa fa-flag fa-fw text-center content-text';

    var prio = document.createElement('p');
      prio.className = 'content-text';
      prio.appendChild(document.createTextNode(' ' + specPrio));

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
    	dateCol.className = 'col-xs-6';
    	dateCol.appendChild(date);
	
		//Columns containing time items
	  var timeIconCol = document.createElement('div');
    	timeIconCol.className = 'col-xs-1';
    	timeIconCol.appendChild(timeIcon);
    
    var timeCol = document.createElement('div');
    	timeCol.className = 'col-xs-3 col-sm-4';
    	timeCol.appendChild(time);
	
		//Columns containing description items
	  var descIconCol = document.createElement('div');
    	descIconCol.className = 'col-xs-1';
    	descIconCol.appendChild(descIcon);
    
    var descCol = document.createElement('div');
    	descCol.className = 'col-xs-11';
    	descCol.appendChild(description);
	
		//Columns containing url / link items
	  var linkIconCol = document.createElement('div');
    	linkIconCol.className = 'col-xs-1';
    	linkIconCol.appendChild(linkIcon);
    
    var linkCol = document.createElement('div');
    	linkCol.className = 'col-xs-11';
    	linkCol.appendChild(link);
	
		//Columns containing telephone number items
	  var telIconCol = document.createElement('div');
    	telIconCol.className = 'col-xs-1';
    	telIconCol.appendChild(telIcon);
    
    var telCol = document.createElement('div');
    	telCol.className = 'col-xs-11';
    	telCol.appendChild(tel);
	
		//Columns containing priority items
	  var prioIconCol = document.createElement('div');
    	prioIconCol.className = 'col-xs-1';
    	prioIconCol.appendChild(prioIcon);
    
    var prioCol = document.createElement('div');
    	prioCol.className = 'col-xs-11';
    	prioCol.appendChild(prio);

    //columns containing images
    var imgCol = document.createElement('div');
        imgCol.className = 'col-xs-12';
    imgCol.id = 'imgarea';

    //columns containing audio files
    var audioCol = document.createElement('div');
        audioCol.className = 'col-xs-12';
    audioCol.id = 'audiodiv';
    
    
    //Rows with all collumns
    var titleRow = document.createElement('div');
      titleRow.className = 'row title-row';
      titleRow.appendChild(titleIconCol);
      titleRow.appendChild(titleCol);
	
    var contentRow = document.createElement('div');
      contentRow.className = 'row content-row';
      contentRow.appendChild(dateIconCol);
      contentRow.appendChild(dateCol);
      contentRow.appendChild(timeIconCol);
      contentRow.appendChild(timeCol);
      contentRow.appendChild(descIconCol);
      contentRow.appendChild(descCol);
      contentRow.appendChild(linkIconCol);
      contentRow.appendChild(linkCol);
      contentRow.appendChild(telIconCol);
      contentRow.appendChild(telCol);
      contentRow.appendChild(prioIconCol);
      contentRow.appendChild(prioCol);
      contentRow.appendChild(imgCol);
      contentRow.appendChild(audioCol);
	
	
		//Container with all rows
    var con = document.createElement('div');
      con.className = 'container warning-item tile full-item';
      con.appendChild(titleRow);
      con.appendChild(contentRow);


    //List with all containers
    var li = document.createElement('li');
      li.id = 'li_' + specId;
      li.appendChild(con);

    return li;
}
