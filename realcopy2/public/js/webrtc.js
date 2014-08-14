var user = [] 
var userLimit = 4
var firstDate = 0
var lastDate = 0

  // var numOfKey 
  // var rowX 
  // var rowY 

for (var i = 0 ; i < userLimit ; i++) {
      user[i] = 0
     // user[i].peer = 0
}
  // Connect to PeerJS, have server assign an ID instead of providing one
  
  // Generate random ID between 1 and 999 for the user
  var userID = Math.floor(Math.random() * 9999) + 1 ;

  // Create a new peer, and assign the randID as "label" in peer
  // the label is assigned automatically by how i passed it in
  // the key connects the peer to the server that does the handshake
  //var peer = new Peer(randID, {key: 'lwjd5qra8257b9', debug: true});

// var peer = new Peer(userID, {key: 'lwjd5qra8257b9'});

  //   var peer = new Peer(userID, {
  //           host: "54.191.34.54",
  //           port: 9000,
  //           path: '/peerjs-server',
  //           debug: 3
  // });


var peer = new Peer(userID, {
          host: "54.191.34.54",
          port: 9000,
          path: '/peerjs-server',
          config: {
            'iceServers': [
            { url: 'stun:54.186.225.6:3478' },
            { url: 'turn:54.186.225.6:3478',
              credential: 'jvsecretkey',
              realm: 'jvturn'
            }]}
});

  //   var peer = new Peer(userID, {
  //           host: "54.191.34.54",
  //           port: 9000,
  //           path: '/peerjs-server',
  //           config: {
  //             'iceServers': [
  //             { url: 'stun:54.186.225.6:3478?proto=udp' },
  //             { url: 'turn:jvtest1@54.186.225.6:3478?proto=udp',
  //               credential: 'jvsecretkey'
  //             }]},
  //           debug: 3
  // });
 
  // Open the peer using the randID "label" we assigned
  peer.on('open', function(label){
    $('#pid').text(label);
  });  

  // Await connections from others
  peer.on('connection', connect);

  var startTime = [] ;
  var endTime ;
  var rttTime ;

  startTime[1] = 0


function connect(c) {

   $('#chat_area').show();
   var makeNew = true

for (var i = 0 ; i < userLimit ; i++)
{
  if (user[i] != 0) {
    if (user[i].peer == c.peer)
      makeNew = false
  }
}

if (makeNew) {

for (var i = 1 ; i < userLimit ; i++) {    
    if (user[i] == 0) {
      dataProcess(i, c)
      i = userLimit
    }
  }

      // callPeer()

}

} // end connect function


$(document).ready(function() {
    // Connect to a peer

    $('#connect').click(function(){
      var c = peer.connect($('#rid').val());
      console.log('this is a TEST: ' + c)
      c.on('open', function(){
        connect(c);
      });
      c.on('error', function(err){ alert(err) });  
    });
   // Ping for latency
    $('#send-ping').click(function(){
      Ping()
    });

    $('#audio-test').click(function(){
      audioTest()
    })

  });