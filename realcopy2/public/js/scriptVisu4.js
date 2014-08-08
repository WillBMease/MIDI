
// $(window).load(function(){

//visualizer


ans[0].smoothingTimeConstant = 0.7;
console.log(ans[0]);
var soundData = new Uint8Array(ans[0].frequencyBinCount);
var  timeData = new Uint8Array(ansT[0].frequencyBinCount);

var frameSize = 256

var frameSkip = 4;

var yJit = 1

var	changePos = false
var	changeNeg = false

var frameSwitch = function() {
	if (frameSkip % 2 === 0){
		// setTimeout(function(){
		draw();
		// }, 10)
		
		frameSkip ++;
	}

	else {
		
		frameSkip ++;
	}

	requestAnimationFrame(frameSwitch);

}


var draw = function(){
	$("canvas").clearCanvas();
	ans[0].fftSize = frameSize;
	ans[0].getByteFrequencyData(soundData);
	for (var i = 3; i<ans[0].frequencyBinCount; i++){
		zX = (((i-3) * 7) +3)
		$('#visualizer1').drawLine({
		  strokeStyle: "#00FF00",
		  strokeWidth: 6,
		  x1: zX, y1:300,
		  x2: zX, y2:300-soundData[i]*1.17,
		  beginPath: true
		});
	}


		ans[1].fftSize = frameSize;
	ans[1].getByteFrequencyData(soundData);
	for (var i = 3; i<ans[1].frequencyBinCount; i++){
		zX = (((i-3) * 7) +3)
		$('#visualizer2').drawLine({
		  strokeStyle: "#FF0000",
		  strokeWidth: 6,
		  x1: zX, y1:300,
		  x2: zX, y2:300-soundData[i]*1.17,
		  beginPath: true
		});
	}


	// 	ans[2].fftSize = frameSize;
	// ans[2].getByteFrequencyData(soundData);
	// for (var i = 3; i<ans[2].frequencyBinCount; i++){
	// 	zX = (((i-3) * 7) +3)
	// 	$('#visualizer3').drawLine({
	// 	  strokeStyle: "#0000FF",
	// 	  strokeWidth: 6,
	// 	  x1: zX, y1:300,
	// 	  x2: zX, y2:300-soundData[i]*1.17,
		// beginPath: true
	// 	});
	// }



	// 	ans[3].fftSize = frameSize;
	// ans[3].getByteFrequencyData(soundData);
	// for (var i = 3; i<ans[3].frequencyBinCount; i++){
	// 	zX = (((i-3) * 7) +3)
	// 	$('#visualizer4').drawLine({
	// 	  strokeStyle: "#F0F0F0",
	// 	  strokeWidth: 6,
	// 	  x1: zX, y1:300,
	// 	  x2: zX, y2:300-soundData[i]*1.17,
	//	  beginPath: true
	// 	});
	// }

	// for (var i = 3; i<ans[0].frequencyBinCount; i++){

	// 		var xX1 = Math.cos((i-2)*5.25)
	// 		var x1 = 150 + 0.1*xX1
	// 		var zZ1 = Math.sin((i-2)*5.25)
	// 		var z1 = 75 + 0.1*zZ1

	// 		var xX2 = Math.cos((i-2)*5.25)
	// 		var x2 = 150 +(0.1+(soundData[i]*0.4))*xX2
	// 		var zZ2 = Math.sin((i-2)*5.25)
	// 		var z2 = 75+ (0.1+(soundData[i]*0.4))*zZ2
	
	// 	$("#spiral").drawLine({
	// 		strokeStyle: "#FF0000",
	// 		strokeWidth:5,
	// 		x1: x1, y1: z1, x2:x2,y2:z2,
	// 		beginPath: true
	// 	})
	// }

	// for (var i = 3; i<ans[0].frequencyBinCount; i++){

	// 		var xX1 = Math.cos((i-2)/5.25)
	// 		var x1 = 150 + 10*xX1
	// 		var zZ1 = Math.sin((i-2)/5.25)
	// 		var z1 = 75 + 10*zZ1

	// 		var xX2 = Math.cos((i-2)/5.25)
	// 		var x2 = 150 +(10+(soundData[i]*0.2))*xX2
	// 		var zZ2 = Math.sin((i-2)/5.25)
	// 		var z2 = 75+ (10+(soundData[i]*0.2))*zZ2

	// 		var hue = i/ans[0].frequencyBinCount * 360;
	// 		var hueS = hue.toString();
	// 	$("#cut").drawLine({

	// 		strokeStyle: "#000000",
	// 		strokeWidth:2,
	// 		x1: x1, y1: z1, x2:x2,y2:z2,
	//		beginPath: true
	// 	})
	// }
	

// 	ansT[0].fftSize = frameSize;
// 	ansT[0].getByteTimeDomainData(timeData);
// 	for (var i = 0; i< ansT[0].frequencyBinCount; i++){
// 		xPos = (i*1.171875);
// 		yPos = timeData[i]*0.5 + 10;

// if (yJit == 1){
// 	changePos = true
// 	changeNeg = false
// 	wait = true
// }
// else if (yJit == -1){
// 	changePos = false
// 	changeNeg = true
// 	wait = true
// }
// else if (wait == true && changePos){
// 	wait = false
// 	yJit--
// }
// else if (wait == true && changeNeg){
// 	wait = false
// 	yJit++
// }
// else if (changePos){
// 	yJit--
// }
// else if (changeNeg){
// 	yJit++
// }

// 		$("#freq1").drawRect({
// 			fillStyle:"#00FF00",
// 			x:xPos, y:(yPos+yJit),
// 			width:4,height:2,
// 			shadowBlur:1,
// 			shadowColor:"#00FF00",
// 			beginPath: true
// 		})

// 	}


// 	 ansT[1].fftSize = frameSize;
// 	 ansT[1].getByteTimeDomainData(timeData);
// 	 for (var i = 0; i< ansT[1].frequencyBinCount; i++){
// 	 	xPos = (i*1.171875);
// 	 	yPos = timeData[i]*0.5 + 10;



// 	 	$("#freq2").drawRect({
// 	 		fillStyle:"#FF0000",
// 			x:xPos, y:(yPos+yJit),
// 			width:4,height:2,
// 			shadowBlur:1,
// 			shadowColor:"#FF0000",
// 			beginPath: true
// 	 	})

// 	 }

	 	ansT[2].fftSize = frameSize;
	 ansT[2].getByteTimeDomainData(timeData);
	 for (var i = 0; i< ansT[2].frequencyBinCount; i++){
	 	xPos = (i*1.171875);
	 	yPos = timeData[i]*0.5 + 10;

	 	$("#freq3").drawRect({
	 		fillStyle:"#0000FF",
			x:xPos, y:(yPos+yJit),
			width:4,height:2,
			shadowBlur:2,
			shadowColor:"#0000FF",
			beginPath: true
	 	})

	 }

	 	ansT[3].fftSize = frameSize;
	 ansT[3].getByteTimeDomainData(timeData);
	 for (var i = 0; i< ansT[3].frequencyBinCount; i++){
	 	xPos = (i*1.171875);
	 	yPos = timeData[i]*0.5 + 10;

	 	$("#freq4").drawRect({
	 		fillStyle:"#F0F0F0",
			x:xPos, y:(yPos+yJit),
			width:4,height:2,
			shadowBlur:2,
			shadowColor:"#F0F0F0",
			beginPath: true
	 	})

	 }

}
 // calls the function to draw the frames
frameSwitch();

var osc = {};

$(document).keydown(function(event){
	if (event.which == 81){
	var audio = new Audio();
audio.src = "sounds/testSounds/test.mp3"
audio.type = "audio/mpeg"
$("body").append(audio);

	console.log(audio.readyState)
	playing = context.createMediaElementSource(audio);
	playing.connect(ans[0]);
	playing.connect(ansT[0]);
	playing.connect(ans[1]);
	playing.connect(ansT[1])
	playing.connect(ans[2]);
	playing.connect(ansT[2])
	playing.connect(ans[3]);
	playing.connect(ansT[3])
	playing.connect(context.destination);
	

	audio.play(0);
}

	if (event.which == 87){
	var audio = new Audio();
audio.src = "sounds/testSounds/test2.mp3"
audio.type = "audio/mpeg"
$("body").append(audio);

	console.log(audio.readyState)
	playing = context.createMediaElementSource(audio);
	playing.connect(ans[0]);
	playing.connect(ansT[0])
	playing.connect(ans[1]);
	playing.connect(ansT[1])
	playing.connect(ans[2]);
	playing.connect(ansT[2])
	playing.connect(ans[3]);
	playing.connect(ansT[3])

	playing.connect(bus[0].input);
	

	audio.play(0);
}

	if (event.which == 69){
		osc = context.createOscillator();
		osc.connect(ans[0]);
		osc.connect(ansT[0]);
		osc.connect(context.destination)
		osc.frequency.value = 440.0;
		osc.start(0);
	}



});

$(document).keyup(function(event){
	if (event.which == 69){
		osc.stop(0);
		osc.disconnect;
	}

})

// sampleAudio();

///visualizer


// });

//

// (function () { 'use strict';
//   var C = util.tag('canvas', null, document.body);
//   var $ = C.getContext('2d'), W, H;

//   (window.onresize = function () {
//     W = C.width  = C.clientWidth;
//     H = C.height = C.clientHeight;
//   })();

//   function Analyser(context, fft, smoothing) {
//     var AudioContext = window.AudioContext || window.webkitAudioContext;
//     this.audio = new Audio();
//     this.context = context || new AudioContext();
//     this.source = this.context.createMediaElementSource(this.audio);
//     this.analyser = this.context.createAnalyser();
//     this.analyser.fftSize = fft || 2048;
//     this.analyser.smoothingTimeConstant = smoothing || 0;
//     this.analyser.connect(this.context.destination);
//     this.source.connect(this.analyser);
//     this.wave = new Uint8Array(this.analyser.frequencyBinCount * 2);
//     this.freq = new Uint8Array(this.analyser.frequencyBinCount);
//   }

//   Analyser.prototype.update = function () {
//     this.analyser.getByteFrequencyData(this.freq);
//     this.analyser.getByteTimeDomainData(this.wave);
//   };

//   Analyser.prototype.amplitude = function (hz) {
//     var l = hz/this.context.sampleRate * this.freq.length | 0;
//     for(var sum = 0, i = 0; i < l;) sum += this.freq[i++];
//     return sum / l / 255;
//   };

//   var analyser = new Analyser(null, 2048, 0.5);
//   analyser.audio.controls = true;
//   analyser.audio.autoplay = true;
//   analyser.audio.loop     = true;
//   analyser.audio.src      = location.hash ? location.hash.slice(1) :
//     'http://54.213.132.53:8888/sounds/testSounds/test2.mp3';
//   document.body.appendChild(analyser.audio);

//   var colors = [
//     [0/1, [0.2, 0.5, 1.0, 1.0]],
//     [1/1, [1.0, 0.2, 1.0, 1.0]]
//   ];

//   util.loop(function (f, t, dt) {
//     analyser.update();

//     var amp = analyser.audio.duration
//       ? Math.min(1, Math.pow(1.25 * analyser.amplitude(15e3), 2))
//       : 0.5 - 0.25 * Math.cos(t / 1000);

//     var s = 1.01 + 0.09 * amp;
//     $.setTransform(s, 0, 0, s, W/2, H/2);
//     $.drawImage(C, -W/2, -H/2);
//     $.fillStyle = util.color.rgba(0, 0, 0, 0.05);
//     $.fillRect(-W/2, -H/2, W, H);

//     $.setTransform(1, 0, 0, 1, W/2, H/2);
//     $.beginPath();
//     for(var a, r, i = 0, j = analyser.wave.length; i < j; i++) {
//       a = i/j * 2 * Math.PI;
//       r = amp * 256 * (0.5 + analyser.wave[i]/255);
//       $.lineTo(r * Math.sin(a), r * Math.cos(a));
//     }

//     var c = util.color.gradient(colors, amp); c[3] = amp;
//     $.fillStyle   = util.color.rgba(c);
//     $.strokeStyle = util.color.rgba(c[0] * 1.25, c[1] * 1.25, c[2] * 1.25, c[3]);
//     $.lineWidth   = 4 * amp;
//     $.fill(); $.stroke();
//   });

//   window.addEventListener('dragover', function (e) {
//     e.preventDefault(); e.stopPropagation();
//   });

//   window.addEventListener('drop', function (e) {
//     e.preventDefault(); e.stopPropagation();
//     var file = e.dataTransfer.files[0];
//     if(file) analyser.audio.src = URL.createObjectURL(file);
//   });
// }).call(this);



