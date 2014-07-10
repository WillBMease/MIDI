 
 // var createUser = require('./users.js')

//var 
 var conn = [] ;
 conn[0] = 0;
 conn[1] = 0;
 conn[2] = 0;
 var x = 0 ;

var me ;
var user = [] 
// user[0] = createUser(null, null, user[])
// user[1] = createUser(null, null, user[])
// user[2] = createUser(null, null, user[])
// me = createUser(randID, null, user[])



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



function createTest(index, connection){
  user[index] = connection

}


function connect(c) {

    $('#chat_area').show();

///////////////////// 1st USER CONNECTION


    // Assign the connection to the user (array for multiple connections?)
    if (user[0] == 0)
    {
         createTest(0,c);
          // Receive the incoming message and play it calling midi function
              $('#messages').empty().append('Now chatting with ' + user[0].peer);
    user[0].on('data', function(data){
      // $('#messages').append('<br>' /* + conn[x].peer + ':<br>' */ + data[0] + ": " + data[1] + " " + data[2] + " " + data[3] + " " + data[4] + " " + 'from x sender');


    if (user[0] != 0 && data[0] == user[0].peer)
    {
      console.log ('from ' + user[0].peer)
    }

      if (data[1] == '0' && data[2] == '0')
      {

        console.log('I received the ping: ' + data[2]);
        data[2] = '1' ;
        user[0].send(data) ;
        console.log('Now I sent the ping back: ' + data[2])
        $('#messages').append('<br>' + 'sent ping back to ' + user[0].peer);

      }

          else if (data[1] == '0' && data[2] == '1')
          {
            endTime = new Date();
            rttTime = (endTime - startTime) / 2 ;
            console.log('Latency is ' + rttTime + 'ms');
            var rttString = rttTime.toString() ;
       $('#messages').append('<br> Latency for ' + user[0].peer + ': ' + '  - - -  ' + rttString + 'ms');
          }

      else if (data[1] == 1){
      triggerMidiDevice(0, data) ;
     }

      else if (data[1] == 2){
      triggerSample(0, data[2]) ;
      console.log('got the keyboard data');
     }

     else if (data[1] == 3)
     {
        if (data[2] == 0)
        {
        generateNotes(0, bass)
        }
        else if (data[2] == 1)
        {
        generateNotes(0, harp)
        }
        else if (data[2] == 2)
        {
        generateNotes(0, gPiano)
        }
        else if (data[2] == 3)
        {
        generateNotes(0, jazzdrums)
        }
     }


    });
          user[0].on('close', function(err){ alert(user[0].peer + ' has left the chat.') });

    }


///////////////////// 2nd USER CONNECTION


    else if (user[0] != 0 && user[1] == 0)
    {
          createTest(1,c);
       $('#messages').append('<br>' + 'Now chatting with ' + user[1].peer);   
          // Receive the incoming message and play it calling midi function
    user[1].on('data', function(data){
      // $('#messages').append('<br>' /* + user[x].peer + ':<br>' */ + data[0] + ": " + data[1] + " " + data[2] + " " + data[3] + " " + data[4] + " " + 'from x sender');


    if (user[1] != 0 && data[0] == user[1].peer)
    {
      console.log ('from ' + user[1].peer)
    }

      if (data[1] == '0' && data[2] == '0')
      {

        console.log('I received the ping: ' + data[2]);
        data[2] = '1' ;
        user[1].send(data) ;
        console.log('Now I sent the ping back: ' + data[2])
        $('#messages').append('<br>' + 'sent ping back to ' + user[1].peer);

      }

          else if (data[1] == '0' && data[2] == '1')
          {
            endTime = new Date();
            rttTime = (endTime - startTime) / 2 ;
            console.log('Latency is ' + rttTime + 'ms');
            var rttString = rttTime.toString() ;
       $('#messages').append('<br> Latency for ' + user[1].peer + ': ' + '  - - -  ' + rttString + 'ms');
          }

      else if (data[1] == 1){
      triggerMidiDevice(1, data) ;
     }

      else if (data[1] == 2){
      triggerSample(1, data[2]) ;
      console.log('got the keyboard data');
     }

     else if (data[1] == 3)
     {
        if (data[2] == 0)
        {
        generateNotes(1, bass)
        }
        else if (data[2] == 1)
        {
        generateNotes(1, harp)
        }
        else if (data[2] == 2)
        {
        generateNotes(1, gPiano)
        }
        else if (data[2] == 3)
        {
          generateNotes(1, jazzdrums)
        }
     }

    });
          user[1].on('close', function(err){ alert(user[1].peer + ' has left the chat.') });
    }


///////////////////// 3rd USER CONNECTION

    else if (user[0] != 0 && user[1] != 0 && user[2] == 0)
    {
            createTest(2,c);
    $('#messages').append('<br>' + ' Now chatting with ' + user[2].peer);
          // Receive the incoming message and play it calling midi function
    user[2].on('data', function(data){
      // $('#messages').append('<br>' /* + user[x].peer + ':<br>' */ + data[0] + ": " + data[1] + " " + data[2] + " " + data[3] + " " + data[4] + " " + 'from x sender');


    if (user[2] != 0 && data[0] == user[2].peer)
    {
      console.log ('from ' + user[2].peer)
    }

      if (data[1] == '0' && data[2] == '0')
      {

        console.log('I received the ping: ' + data[2]);
        data[2] = '1' ;
        user[2].send(data) ;
        console.log('Now I sent the ping back: ' + data[2])
        $('#messages').append('<br>' + 'sent ping back to ' + user[2].peer);

      }

          else if (data[1] == '0' && data[2] == '1')
          {
            endTime = new Date();
            rttTime = (endTime - startTime) / 2 ;
            console.log('Latency is ' + rttTime + 'ms');
            var rttString = rttTime.toString() ;
            console.log('string is' + rttString) ;
       $('#messages').append('<br> Latency for ' + user[2].peer + ': ' + '  - - -  ' + rttString + 'ms');
          }

      else if (data[1] == '1'){
      triggerMidiDevice(2, data) ;
     }

      else if (data[1] == '2'){
      triggerSample(2, data[2]) ;
      console.log('got the keyboard data');
     }

     else if (data[1] == 3)
     {
        if (data[2] == 0)
        {
        generateNotes(2, bass)
        }
        else if (data[2] == 1)
        {
        generateNotes(2, harp)
        }
        else if (data[2] == 2)
        {
        generateNotes(2, gPiano)
        }
        else if (data[2] == 3)
        {
          generateNotes(2, jazzdrums)
        }
     }

    });
          user[2].on('close', function(err){ alert(user[2].peer + ' has left the chat.') });
    }

  }
















$(document).ready(function() {
    // Connect to a peer

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

      if (user[0] != 0)
      {
      user[0].send(midiMsg);
      console.log('I sent the ping: ' + midiMsg[2] + " to " + user[0].peer);
      }
      if (user[1] != 0)
      {
      user[1].send(midiMsg);
      console.log('I sent the ping: ' + midiMsg[2] + " to " + user[1].peer);
      }
      if (user[2] != 0)
      {
      user[2].send(midiMsg);
      console.log('I sent the ping: ' + midiMsg[2] + " to " + user[2].peer);
      }
    //  $('#text').val('');
    });

    $('#changeBass').click(function(){
      midiMsg[0] = randID ;
      midiMsg[1] = '3' ;
      midiMsg[2] = '0' ;

      generateNotes('me', bass)

      if (user[0] != 0)
      {
      user[0].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[0].peer);
      }
      if (user[1] != 0)
      {
      user[1].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[1].peer);
      }
      if (user[2] != 0)
      {
      user[2].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[2].peer);
      }

    });

    $('#changeHarp').click(function(){

      midiMsg[0] = randID ;
      midiMsg[1] = '3' ;
      midiMsg[2] = '1' ;

      generateNotes('me', harp)

      if (user[0] != 0)
      {
      user[0].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[0].peer);
      }
      if (user[1] != 0)
      {
      user[1].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[1].peer);
      }
      if (user[2] != 0)
      {
      user[2].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[2].peer);
      }

    });

    $('#changePiano').click(function(){

      midiMsg[0] = randID ;
      midiMsg[1] = '3' ;
      midiMsg[2] = '2' ;

      generateNotes('me', gPiano)

      if (user[0] != 0)
      {
      user[0].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[0].peer);
      }
      if (user[1] != 0)
      {
      user[1].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[1].peer);
      }
      if (user[2] != 0)
      {
      user[2].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[2].peer);
      }

});

      $('#changeDrums').click(function(){

      midiMsg[0] = randID ;
      midiMsg[1] = '3' ;
      midiMsg[2] = '3' ;

      generateNotes('me', jazzdrums)

      if (user[0] != 0)
      {
      user[0].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[0].peer);
      }
      if (user[1] != 0)
      {
      user[1].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[1].peer);
      }
      if (user[2] != 0)
      {
      user[2].send(midiMsg);
      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[2].peer);
      }

    });
    // Show browser version
   // $('#browsers').text(navigator.userAgent);
  });