// Getting Credentials
const room = getCreds('room');
const user = localStorage.getItem('HHUser') || "Anonymous";
var admin = localStorage.getItem('HHAdmin') || false;
var presenter = false;

if (!room) {
    // window.location="../../HeavyHurdle-LS/index.html"
}
else {
    joinRoom(true);
}

// Uses GET For Javascript
function getCreds(key='') {
    var url = location.href;
    var query = decodeURIComponent(url).split('#', 2)[0].split('?', 2)[1];
    if(query){
        let splittedQStrings = query.split('&');
        if(splittedQStrings.length){
            let queryStringObj = {};
            splittedQStrings.forEach(function(keyValuePair){
                let keyValue = keyValuePair.split('=', 2);
                if(keyValue.length){
                    queryStringObj[keyValue[0]] = keyValue[1];
                }
            });            
            return key ? (queryStringObj[key] ? queryStringObj[key] : null) : queryStringObj;
        }
        return null;
    }
    return null;
}