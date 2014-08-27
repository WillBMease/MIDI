navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

peer.on('call', function(call){
  console.log("Call received");
  // Answer the call automatically (instead of prompting user) for demo purposes
  call.answer(window.localStream);  
  processCall(call);
});

peer.on('error', function(err){
  console.log(err.message);
});


$(function(){
  $('#call').bind('click', callPeer);
  getLocalVideo();
});

$(function(){
  $('#end').bind('click', endCall);
});



// Call/Video Management
function getLocalVideo() {
  navigator.getUserMedia({audio: true, video: true}, function(stream){

    console.log("Local video streaming");
    $('#videos').append("<video id='" + peer.id + "' autoplay></video>");
    $('#' + peer.id).prop('src', URL.createObjectURL(stream));
   
console.log(stream.getAudioTracks()[0])

    // $(document).keydown(function(e){
    //   if (e.which == 32){
    //     stream.getAudioTracks()[0].enabled = true;
    //     // navigator.getUserMedia.audio = true
    //     // console.log(window.existingCall)
    //   }
    // })
//     $(document).keyup(function(e){
//       if (e.which == 32){
//         stream.getAudioTracks()[0].enabled = false;
//         // getLocalVideo(false)
//         // navigator.getUserMedia.audio = false
// }
//     })

    window.localStream = stream;

  }, function(){ /* alert('Cannot connect to webcam. Allow access.') */ });
}





function callPeer() {
  console.log("Calling peer");
  
  for (var i = 1 ; i < userLimit ; i++) {
    if (user[i] != 0)
    {
  var call = peer.call(user[i].peer, window.localStream);
  processCall(call);
    }
}

} // end callPeer

function processCall(call) {
  // Hang up on an existing call if present
  // if (window.existingCall) {
  //   window.existingCall.close();
  // }

  // Wait for stream on the call, then set peer video display
  call.on('stream', function(remoteStream){
    console.log("Adding video from " + call.peer);
    $('#videos').append("<video id='" + call.peer + "' autoplay>");
    $('#' + call.peer).prop('src', URL.createObjectURL(remoteStream));
  });

  // UI stuff
  window.existingCall = call;
  //document.getElementById('their-id').text(call.peer);
  //call.on('close', prepareDebateScreen);
}

function endCall() {
  window.existingCall.close();
  step2();
}

function retry() {
  console.log('Retry...');
}