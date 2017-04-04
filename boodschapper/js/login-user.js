//Remember user credentials
$(function() {
  
                if (localStorage.chkbx && localStorage.chkbx != '') {
                    $('#rememberMe').attr('checked', 'checked');
                    $('#userName').val(localStorage.usrname);
                    $('#userPassword').val(localStorage.pass);
                } else {
                    $('#rememberMe').removeAttr('checked');
                    $('#userName').val('');
                    $('#userPassword').val('');
                }
  
  $('#rememberMe').click(function() {
						 
						 if ($('#rememberMe').is(':checked')) {
						 localStorage.chkbx = $('#rememberMe').val();
						 } else {
						 localStorage.chkbx = '';
						 }
						 });
  
  });

//LOGIN

function loginUser() {
	
    //user data in variables
    var userName = document.getElementById('userName').value;
    var userPassword = document.getElementById('userPassword').value;
    
    db.login(userName, userPassword, function (err, response) {
        if (err) {
            if (err.name === 'unauthorized') {
                console.log('Unauthorized!');
            } else {
                console.log('someting bad happened. error code: 002')
            }
        } else {
			var name = response['name'];
			
			localStorage.usrname = $('#userName').val();
			localStorage.pass = $('#userPassword').val();
			localStorage.keepUserLoggedIn = true;
			 
            location.href = "menu.html";
        }
    }); 
} //end loginUser function

//LOGOUT
function logoutUser() {
    db.logout(function (err, response) {
    if (err) {
      console.log('someting bad happened. error code: 003');
    } else {
			  
	  window.localStorage.removeItem('keepUserLoggedIn');
			  
      location.href = "index.html";
    }
  });
} //end logoutUser function
