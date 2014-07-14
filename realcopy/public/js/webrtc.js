var user = [] 
var userLimit = 4
var audioPrc = 0
var firstDate = 0
var lastDate = 0

for (var i = 0 ; i < userLimit ; i++) {
      user[i] = 0
}
  // Connect to PeerJS, have server assign an ID instead of providing one
  
  // Generate random ID between 1 and 999 for the user
  var randID = Math.floor(Math.random() * 999) + 1 ;

  // Create a new peer, and assign the randID as "label" in peer
  // the label is assigned automatically by how i passed it in
  // the key connects the peer to the server that does the handshake
  var peer = new Peer(randID, {key: 'lwjd5qra8257b9', debug: true});
 
  // Open the peer using the randID "label" we assigned
  peer.on('open', function(label){
    $('#pid').text(label);
  });  

  // Await connections from others
  peer.on('connection', connect);

  var startTime ;
  var endTime ;
  var rttTime ;


function connect(c) {

   $('#chat_area').show();
   var done = false

for (var i = 1 ; i < userLimit || done == true ; i++) {
    
    if (user[i] == 0) {
        dataProcess(i, c)
      i = userLimit
    }
  }


} // end connect function


$(document).ready(function() {
    // Connect to a peer

    $('#connect').click(function(){
      var c = peer.connect($('#rid').val());
      c.on('open', function(){
        connect(c);
      });
      c.on('error', function(err){ alert(err) });  
    });
   // Ping for latency
    $('#send-ping').click(function(){
      Ping()
    });

    $('.changeInstrument').click(function(){
      var instr = $(this).attr('id')
      instrumentChange(instr)
    })

    $('#audio-test').click(function(){
      firstDate = new Date()
      audioTest()
    })

  });