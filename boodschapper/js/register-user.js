
// CREATE USER
function createUser(){
    //create user data variables
    var newUserName = document.getElementById('newUserName').value;
    var newUserPassword = document.getElementById('newUserPassword').value;
    var newUserEmail = document.getElementById('newUserEmail').value;

    // Create user
    db.signup(newUserName, newUserPassword, {
        metadata : {
            email : newUserEmail,
        }
    }, function (err, response) {
        if (err) {
            if (err.name === 'conflict') {
                console.log('Username already excists');
            } else if (err.name === 'forbidden') {
                console.log('Username invalid');
            } else {
                console.log('something bad happened. error code: 001');
                console.log(err);
            }
        } else {
            location.href = "index.html";
        } 
    });   
} //end createUser function