//Build Template

//TODO: run this in postgres
// CREATE TABLE testbase (
//     id SERIAL PRIMARY KEY,
//     item_name character varying(255),
//     item_amount integer
// );

//TODO: change json title, desc, etc.
//TODO: npm install dependencies
//TODO: check /routes/testRoute.js for additional settup



var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var AccessToken = require('twilio').AccessToken;
var IpMessagingGrant = AccessToken.IpMessagingGrant;


// just twilio things
var accountSid = 'ACbb77777fcddd099e0e68163a767c22b0';
var authToken = "afb276bdebc44e26159780283a514850";
var chatSid = 'IS18dcc9ff703341bf86b7f9f3e185f384';
var apiKey = 'SKdd87da444537867ceb84e82d2d39300f';
var apiSecret = '8b4iVlshPvsH8ctS4mqcjS2tBnVao7oa';
var channelSid = 'CH8011c3874d37465ca2fce9b8275b79e5';

var client = require('twilio')(accountSid, authToken);
var IpMessagingClient = require('twilio').IpMessagingClient;

var chatClient = new IpMessagingClient(accountSid, authToken);
var service = chatClient.services(chatSid);


app.use(bodyParser.urlencoded({
    extended: true
}));



//modules
var testModule = require("./modules/testModule.js");
console.log(testModule.test("app.js: testing module connection"));



//routes
var testRoute = require("./routes/testRoute.js");
app.use('/testRoute', testRoute);
app.post('/chat', function (req, res) {
  res.send('ok');

  client.sendMessage({
      messagingServiceSid: 'MGf4cba72add262c61b0fb27539f8cc1db',
      to: '+19524841727',
      body: req.body.Body
  }, function(err, message) {
      console.log(err);
  });
});


/*
Generate an Access Token for a chat application user - it generates a random
username for the client requesting a token, and takes a device ID as a query
parameter.
*/
app.get('/token', function(request, response) {
    var appName = 'TwilioChatDemo';
    var identity = 'Anonymous Youth';
    var deviceId = request.query.device;

    // Create a unique ID for the client on their current device
    var endpointId = appName + ':' + identity + ':' + deviceId;

    // Create a "grant" which enables a client to use IPM as a given user,
    // on a given device
    var ipmGrant = new IpMessagingGrant({
        serviceSid: chatSid,
        endpointId: endpointId
    });

    // Create an access token which we will sign and return to the client,
    // containing the grant we just created
    var token = new AccessToken(
        accountSid,
        apiKey,
        apiSecret
    );
    token.addGrant(ipmGrant);
    token.identity = identity;

    // Serialize the token to a JWT string and include it in a JSON response
    response.send({
        identity: identity,
        token: token.toJwt()
    });
});

app.post('/sms/inbound', function (req, res) {

  service.channels(channelSid).messages.create({
      body: req.body.Body
  }).then(function(response) {
      res.send('');
      console.log(response);
  }).fail(function(error) {
      res.send('');
      console.log(error);
  });

});

app.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('server is running on port', app.get('port'));

});
