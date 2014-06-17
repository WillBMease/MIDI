var midi = require("../midi.js");

var input = new midi.input();
input.on('message', function(deltaTime, message) {
  console.log('m:' + message + ' d:' + deltaTime);
});
input.openVirtualPort("JellyVibes Out");

// setTimeout(function() {
//   input.closePort();
// }, 20000);
