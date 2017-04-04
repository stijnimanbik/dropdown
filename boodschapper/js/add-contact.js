function addContactItem() {
    //get info
    var contactTitle = document.getElementById('contactTitle').value;
    var contactIcon = document.getElementById('contactIcon').value;
    var contactPhone = document.getElementById('contactPhone').value;
    var contactEmail = document.getElementById('contactEmail').value;
    var contactType = 'contact';
      
    //get correct database
    console.log(loggedHex);
    console.log(loggedInUsername);
      
    //add item to database
    var addcontact = {
    _id: new Date().toISOString(),
        title: contactTitle,
        icon: contactIcon,
        phone: contactPhone,
        email: contactEmail,
        type: contactType
    };
    locallp.put(addcontact).then(function (result){
        console.log("Added to the database");
        location.href = "contacts.html";
    }).catch(function (err){
        console.log("someting bad happened. error code: 005");
        console.log(err);
    });
}