// // var recordRTC = RecordRTC(mediaStream);
// // recordRTC.startRecording();
// // recordRTC.stopRecording(function(audioURL) {
// //    mediaElement.src = audioURL;
// // });

// // var options = {
// //    type: 'video',
// //    video: {
// //       width: 320,
// //       height: 240
// //    },
// //    canvas: {
// //       width: 320,
// //       height: 240
// //    }
// // };
// // var recordRTC = RecordRTC(mediaStream, options);
// // recordRTC.startRecording();
// // recordRTC.stopRecording(function(videoURL) {
// //    mediaElement.src = videoURL;
// // });


// // you must link:
// // https://cdn.webrtc-experiment.com/gif-recorder.js

// $('#vidrecord').click(function(){
// 	recordRTC.startRecording()
// })

// $('#recordstop').click(function(){
// 	recordRTC.stopRecording(function(gifURL) {
//    mediaElement.src = gifURL;
//    });
// })

// var options = {
//    type: 'gif',
//    video: {
//       width: 320,
//       height: 240
//    },
//    canvas: {
//       width: 320,
//       height: 240
//    },
//    frameRate: 200,
//    quality: 10
// };
// var recordRTC = RecordRTC(mediaStream, options);