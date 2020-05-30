const ngrok = require('ngrok');
const request = require('request');

//use ngrok to expose localhost:3000 to the internet
//for easily showing on progress local work 
(async function() {
  console.log('Waiting for ngrok to connect...');

  const url = await ngrok.connect({
    addr: 'http://localhost:3000',
    region: 'eu',
    hostHeader: 'localhost:3000'
    // ,onStatusChange: status => {
    //   console.log(status);
    // }
    // ,onLogEvent: data => {
    //   console.log(data);
    // }
  });

  console.log();
  console.log('Access local here:');
  console.log(url);
})();
