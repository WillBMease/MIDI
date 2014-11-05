// function webrtcStart(){

var user = [] 
var userLimit = 4
var firstDate = 0
var lastDate = 0
// var peer

  // var numOfKey 
  // var rowX 
  // var rowY 

for (var i = 0 ; i < userLimit ; i++) {
      user[i] = 0
     // user[i].peer = 0
}
  // Connect to PeerJS, have server assign an ID instead of providing one
  
// $(document).ready(function() {
  
  // Generate random ID between 1 and 999 for the user
  var userID = Math.floor(Math.random() * 9999) + 1 ;

  // Create a new peer, and assign the randID as "label" in peer
  // the label is assigned automatically by how i passed it in
  // the key connects the peer to the server that does the handshake
  //var peer = new Peer(randID, {key: 'lwjd5qra8257b9', debug: true});

var peer = new Peer(userID, {key: 'lwjd5qra8257b9'});

  //   var peer = new Peer(userID, {
  //           host: "54.191.34.54",
  //           port: 9000,
  //           path: '/peerjs-server',
  //           debug: 3
  // });

// setTimeout(function(){

// var peer = new Peer(userID, {
//           host: "54.191.34.54",
//           port: 9000,
//           path: '/peerjs-server',
//           config: {
//             'iceServers': [
//             { url: 'stun:54.186.225.6:3478' },
//             { url: 'turn:54.186.225.6:3478',
//               credential: 'jvsecretkey',
//               realm: 'jvturn'
//             }]}
// });

  //    var peer = new Peer(userID, {
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
// }, 4)

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

      callPeer()

}

} // end connect()


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

  // });

// } // end webrtcStart()



if (!MediaStreamTrack) document.body.innerHTML = '<h1>Incompatible Browser Detected. Try <strong style="color:red;">Chrome Canary</strong> instead.</h1>';

var experiments = document.querySelector('.experiment');
MediaStreamTrack.getSources(function (media_sources) {
    var sources = [];
    for (var i = 0; i < media_sources.length; i++) {
        sources.push(media_sources[i]);
    }

    getAllUserMedias(sources);
});

var devicesFetched = {};
var index = 0;

function getAllUserMedias(media_sources) {
    var media_source = media_sources[index];
    if (!media_source) return;

    // to prevent duplicated devices to be fetched.
    if (devicesFetched[media_source.id]) {
        index++;
        return getAllUserMedias(media_sources);
    }
    devicesFetched[media_source.id] = media_source;

    var constraints = {};

    if (media_source.kind == 'audio') {
        constraints.audio = {
            optional: [{
                sourceId: media_source.id
            }]
        };
    }

    if (media_source.kind == 'video') {
        constraints.video = {
            optional: [{
                sourceId: media_source.id
            }]
        };
    }

    navigator.webkitGetUserMedia(constraints, function (stream) {
        experiments.appendChild(document.createElement('br'));
        experiments.appendChild(document.createElement('br'));
        
        var h2 = document.createElement('div');
        experiments.appendChild(h2);

        experiments.appendChild(document.createElement('br'));
        experiments.appendChild(document.createElement('br'));

        if (media_source.kind === 'audio') {
            h2.innerHTML = media_source.label || 'microphone ' + index;
        } else if (media_source.kind === 'video') {
            h2.innerHTML = media_source.label || 'camera ' + index;
        } else {
            h2.innerHTML = 'Some other kind of source: ' + JSON.stringify(media_source, null, '&nbsp;');
        }

        var mediaElement = document.createElement(media_source.kind);
        mediaElement.src = window.URL.createObjectURL(stream);
        experiments.appendChild(mediaElement);
        mediaElement.controls = true;
        mediaElement.play();
    }, function (e) {
        experiments.appendChild(document.createElement('br'));
        var h2 = document.createElement('div');
        h2.innerHTML = JSON.stringify(e);
        experiments.appendChild(h2);
    });

    index++;
    getAllUserMedias(media_sources);
}