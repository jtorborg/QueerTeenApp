// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'ACbb77777fcddd099e0e68163a767c22b0';
var authToken = "afb276bdebc44e26159780283a514850";
var client = require('twilio')(accountSid, authToken);

client.sendMessage({
    messagingServiceSid: 'MG9752274e9e519418a7406176694466fa',
    to: '+16122347468',
    body: ''
}, function(err, message) {
    console.log(message);
});
