// Create local database
var local = new PouchDB('bsdblocal');

// Create remote database
var db = new PouchDB('http://46.249.60.42:5984/bsdb', {skipSetup: true});

// Sync local database
local.sync(db, {live: true, retry: true}).on('error', console.log.bind(console));


var loggedInUsername; //username from current session
var loggedHex; // Hex username from current session
var dbrp; // Link to personal database from current user
var locallp; // Local database in sync with private remote database

//email validation
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

//hex convert function
function _convertToHex(str) {
    var hex = '';
    for (var i = 0; i < str.length; i++) {
        hex += '' + str.charCodeAt(i).toString(16);
    }
    return hex;
}

//define private remote database
function define(){      
 dbrp = new PouchDB('http://46.249.60.42:5984/userdb-' + loggedHex, {
   skip_setup: true
 });
        
 locallp = new PouchDB('bsdblplocal-'+loggedHex);
 locallp.sync(dbrp, {live: true, retry: true}).on('error', console.log.bind(console));  //sync
    
    window.dispatchEvent(new CustomEvent('databaseReady'));
    
}

// sets the correct variables for authenticated user
function setAuthenticatedUserVariables(username) {
	
	console.log('Username: ' + username);
	loggedInUsername = username;
	console.log('the loggedInUsername = ' + loggedInUsername);
	loggedHex = _convertToHex(loggedInUsername);
	console.log(loggedHex);
	
}

function hideLoadingScreen()
{
	$("#loader").addClass('fade');
	
	setTimeout(function(){
		$('#loader').remove();
	}, 400);
}

//Get current session
db.getSession(function (err, response) {
if (err) {
  console.log('There is a network problem. Please try again later.');
			  
	hideLoadingScreen();
} else if (!response.userCtx.name) {
			  
  console.log('nobody is logged in. If this is not the case, please try logging out and in again.');
			  
	if (window.localStorage.getItem('keepUserLoggedIn') && window.localStorage.getItem('usrname') && window.localStorage.getItem('pass'))
	{
		var userName = localStorage.usrname;
		var userPassword = localStorage.pass;

		setAuthenticatedUserVariables(userName);

		db.login(userName, userPassword, function (err, response) {
			if (err) {
				if (err.name === 'unauthorized') {
					console.log('Unauthorized!');
				} else {
					console.log('someting bad happened. error code: 002')
				}
				 
				 hideLoadingScreen();
			} else {
				 
				hideLoadingScreen();
				 
				setTimeout(function(){
					location.href = "menu.html";
				}, 400);
			}
		});
	}
	else
	{
		hideLoadingScreen();
	}
			  
} else {
	setAuthenticatedUserVariables(response.userCtx.name);
}
define();
});
