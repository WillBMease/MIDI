var server = require("./server") ;
var router = require("./router") ;
var requestHandlers = require("./requestHandlers") ;

var handle = {} 
handle["/"] = requestHandlers.start ;
handle["/start"] = requestHandlers.start ;
handle["/upload"] = requestHandlers.upload ;
handle["/show"] = requestHandlers.show ;

var midi = require("../midi.js");

var output1 = new midi.output();
output1.openVirtualPort("JellyVibes1");

server.start(router.route, handle) ;