 var conn = [] ;
 conn[0] = 0;
 conn[1] = 0;
 conn[2] = 0;
 var x = 0 ;

var me ;
var user = [] 
user[0] = 0
user[1] = 0 
user[2] = 0

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

  // Function called from line above ^
  function connect(c) {

  	//conn[0] = c ;
    $('#chat_area').show();

    x = 0 ;

    // Assign the connection to the user (array for multiple connections?)
    if (conn[0] != 0)
    {
    //   conn[0].on('data', function(data){
    //   $('#messages').append('<br>' + conn[0].peer + ':<br>' + data + 'from 0 sender');
    //   console.log("received from first connection");
    //   //triggerMidiDevice(data) ;
    //   //triggerSample1(data) ;
    // });

    //       conn[0].on('close', function(err){ alert(conn.peer + ' has left the chat.') });

		x++ ;
    }

    if (conn[1] != 0)
    {
    //   conn[1].on('data', function(data){
    //   $('#messages').append('<br>' + conn[1].peer + ':<br>' + data + 'from 1 sender');
    //   console.log("received from second connection");
    //   //triggerMidiDevice(data) ;
    //   //triggerSample(data) ;

    // });

    //       conn[1].on('close', function(err){ alert(conn.peer + ' has left the chat.') });

      x++ ;
    }

    if (conn[2] != 0)
    {
    //   conn[2].on('data', function(data){
    //   $('#messages').append('<br>' + conn[2].peer + ':<br>' + data + 'from 2 sender');
    //   console.log("I shouldn't receive this");
    //  	//triggerMidiDevice(data) ;
    //   //triggerSample(data) ;
    // });

    //       conn[2].on('close', function(err){ alert(conn.peer + ' has left the chat.') });

      x++ ;
    }

    conn[x] = c;
    $('#messages').empty().append('Now chatting with ' + conn[x].peer);

    // Receive the incoming message and play it calling midi function
    conn[x].on('data', function(data){
      $('#messages').append('<br>' /* + conn[x].peer + ':<br>' */ + data[0] + ": " + data[1] + " " + data[2] + " " + data[3] + " " + data[4] + " " + 'from x sender');
        console.log("received most recent connection from " + x);


    if (conn[0] != 0 && data[0] == conn[0].peer)
    {
      console.log ('from ' + conn[0].peer)
    }
    else if (conn[1] != 0 && data[0] == conn[1].peer)
    {
      console.log ('from ' + conn[1].peer)
    }

      if (data[1] == '0' && data[2] == '0')
      {

      	console.log('I received the ping: ' + data[2]);
      	data[1] = '1' ;
      	conn[x].send(data) ;
      	console.log('Now I sent the ping back: ' + data[2])

      }

          else if (data[1] == '0' && data[2] == '1')
          {
            endTime = new Date();
            rttTime = (endTime - startTime) / 2 ;
            console.log('Latency is ' + rttTime + 'ms');
            var rttString = rttTime.toString() ;
            console.log('string is' + rttString) ;
       $('#messages').append('<br>You:<br>' + rttString + 'ms');
          }

      else if (data[1] == 1){
     	triggerMidiDevice(data) ;
     }

      else if (data[1] == 2){
     	triggerSample(data[2]) ;
      console.log('got the keyboard data');
     }


    });

    // Close the connection if other peer leaves
    conn[x].on('close', function(err){ alert(conn.peer + ' has left the chat.') });
  }


  $(document).ready(function() {
    // Conect to a peer
    $('#connect').click(function(){
      var c = peer.connect($('#rid').val());
      c.on('open', function(){
        connect(c);
      });
      c.on('error', function(err){ alert(err) });  
    });
   // Send a chat message
    $('#send').click(function(){
      // var msg = $('#text').val();

      startTime = new Date() ;
      midiMsg[0] = randID ;
      midiMsg[1] = '0' ;
      midiMsg[2] = '0' ;

      conn[0].send(midiMsg);
      console.log('I sent the ping: ' + midiMsg[2]);


      // conn[0].on('data', function(data){

      // 		console.log('I got the ping back: ' + data);

      // 		if (data[0] == '0')
      // 		{
      // 			console.log('I should not receive this ping: ' + data);
      // 		}
      // 		else if (data[0] == '1')
      // 		{
      // 			endTime = new Date();
      // 			var rttTime = (endTime - startTime) / 2 ;
      // 			console.log('Latency is ' + rttLatency + 'ms');
      // 			var rttString = rttTime.toString() ;
      // 			console.log('string is' + rttString) ;
      //  $('#messages').append('<br>You:<br>' + rttString + 'ms');
      // 		}
      // 		endTime.clear();
      // });

    //  $('#text').val('');
    });

    // Show browser version
   // $('#browsers').text(navigator.userAgent);
  });