// IGNORE TOP PART

//open app
//check of er een internet connectie is
    //ja?
        //check of boolean 'isLoggedIn' true of false is
            //true?
                //open hoofdmenu, pak username die ook is opgeslagen in localstorage
            //false?
                //krijg login scherm
                    //check of 'remember me' is aangevinkt
                        //ja?
                            //sla gebruikersnaam, wachtwoord en boolean 'isLoggedIn=true' op in localstorage. dan naar hoofdmenu
                        //nee?
                            //ga naar hoofdmenu
    //nee?
        //check of boolean 'isLoggedIn' true of false is
            //true?
                //open hoofdmenu, schakel synchronisatie uit, geef aan dat er geen internet is, maar dat de app wel te gebruiken is
            //false?
                //krijg login scherm, geef error dat er geen internet connectie is


//logout
    //ga naar login scherm, verwijder localstorage data (gebruikersnaam, wachtwoord boolean 'isLoggedIn=false)

/*
document.addEventListener("deviceready", onDeviceReady(), false);

function onDeviveReady(){
    checkConnection();
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

}
document.addEventListener("offline", onOffline, false);
function onOffline() {
    console.log("geen internet!");
    //check of boolean true is
    
    //zo ja, ga naar 
}

document.addEventListener("online", onOnline, false);

function onOnline() {
    console.log("je hebt internet!");
}
*/


//check status of internet connection
document.addEventListener("deviceready", function(e){
    console.log(navigator.connection.type);
    
    //online event
    document.addEventListener("online", function(e){
        alert("Je hebt internet");
    }, false);  
    
    //offline event
    document.addEventListener("offline", function(e){
        alert("Je hebt geen internet");
    }, false);  
}, false);  


















