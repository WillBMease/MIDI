// //grid width and height
// var bw = 400;
// var bh = 400;
// //padding around grid
// var p = 10;
// //size of canvas
// var cw = bw + (p*2) + 1;
// var ch = bh + (p*2) + 1;

// var canvas = $('<sequencer/>').attr({width: cw, height: ch}).appendTo('body');

// var context = canvas.get(0).getContext("2d");

// function drawBoard(){
//     for (var x = 0; x <= bw; x += 40) {
//         context.moveTo(0.5 + x + p, p);
//         context.lineTo(0.5 + x + p, bh + p);
//     }


//     for (var x = 0; x <= bh; x += 40) {
//         context.moveTo(p, 0.5 + x + p);
//         context.lineTo(bw + p, 0.5 + x + p);
//     }

//     context.strokeStyle = "white";
//     context.stroke();
// }

// drawBoard();


// // var c = document.getElementById("myCanvas");
// // var ctx = c.getContext("2d");
// // ctx.fillStyle = "#FF0066";

// // // for (var i = 0)

// // ctx.fillRect(50,50,150,75);

// var crash = 2,
//     kick = 4,
//     hihat = 6,
//     ride = 8,
//     snare = 12,
//     tom1 = 14,
//     tom3 = 15,
//     tom2 = 16;

  var checkActive
  var checkFalse
  var drummer
  var bpmSeq  = 500
  var sequencerActive = false
  var refreshSequencer
  var posi = 1
  var pin = 0
  var schedule = 0
  var drumMsg = []

  var thebeat = []

  for (var x = 0 ; x < 8 ; x++){
    thebeat[i] = []
        for (var y = 0 ; y < 8 ; y++){
            thebeat[i]
        }
  }

 $('#sequencer').click(function(){
if (!sequencerActive) {
    sequencerActive = true
    setTimeout(function(){
    refreshSequencer = setInterval(playSequencer, bpmSeq);
}, 25)

    drumMsg[0] = 21
    drumMsg[1] = 21
    drumMsg[2] = 1

    for (var i = 1 ; i < userLimit ; i++){
        if (user[i] != 0) {
            for (var x = 0 ; x < 3 ; x++)
                user[i].send(drumMsg);
        }
      }   
    }

else if (sequencerActive) {
    sequencerActive = false
    clearInterval(refreshSequencer)
    }
})

function startSequencer(){
if (!sequencerActive) {
    sequencerActive = true
    refreshSequencer = setInterval(playSequencer, bpmSeq);
    }
else if (sequencerActive) {
    sequencerActive = false
    clearInterval(refreshSequencer)
    }
})

 $("#bpm").change(function() {
    bpmSeq = $(this).val();
    clearInterval(refreshSequencer)
    refreshSequencer = setInterval(playSequencer, bpmSeq);
})

 function changeBPM(){
    console.log($('#bpm').val())
 }

 function playNote(index, drum){
  var source1 = context.createBufferSource();
  var note = drum;
  var scheduler = 

    source1.buffer = noteNode[index][note];
    source1.connect(bus[0].input);
    source1.start(0);
    console.log(source1)

    source1.onended = function() {
        source1.stop()
    }
 }

 function playSequencer(){

console.log('working')

if (posi == 1){
    $("#time"+8).prop('checked', false);
    $('.checktime.c'+(8)).css("background", "#ddd");
    $('.checkcrash.c'+(8)).css("background", "#ddd");
    $('.checkkick.c'+(8)).css("background", "#ddd");
    $('.checkhihat.c'+(8)).css("background", "#ddd");
    $('.checkride.c'+(8)).css("background", "#ddd");
    $('.checksnare.c'+(8)).css("background", "#ddd");
    $('.checktom1.c'+(8)).css("background", "#ddd");
    $('.checktom2.c'+(8)).css("background", "#ddd");
    $('.checktom3.c'+(8)).css("background", "#ddd");
}
else{
    $("#time"+(posi-1)).prop('checked', false);
    $('.checktime.c'+(posi-1)).css("background", "#ddd");
    $('.checkcrash.c'+(posi-1)).css("background", "#ddd");
    $('.checkkick.c'+(posi-1)).css("background", "#ddd");
    $('.checkhihat.c'+(posi-1)).css("background", "#ddd");
    $('.checkride.c'+(posi-1)).css("background", "#ddd");
    $('.checksnare.c'+(posi-1)).css("background", "#ddd");
    $('.checktom1.c'+(posi-1)).css("background", "#ddd");
    $('.checktom2.c'+(posi-1)).css("background", "#ddd");
    $('.checktom3.c'+(posi-1)).css("background", "#ddd");
}

$("#time"+posi).prop('checked', true);
$('.checktime.c'+(posi)).css("background", "#2FB4E5");
$('.checkcrash.c'+(posi)).css("background", "#2FB4E5");
$('.checkkick.c'+(posi)).css("background", "#2FB4E5");
$('.checkhihat.c'+(posi)).css("background", "#2FB4E5");
$('.checkride.c'+(posi)).css("background", "#2FB4E5");
$('.checksnare.c'+(posi)).css("background", "#2FB4E5");
$('.checktom1.c'+(posi)).css("background", "#2FB4E5");
$('.checktom2.c'+(posi)).css("background", "#2FB4E5");
$('.checktom3.c'+(posi)).css("background", "#2FB4E5");

if ($('#crash'+posi).is(':checked')){
        playNote(6, crash)
        console.log('yes')
    }
if ($('#kick'+posi).is(':checked')){
        playNote(6, kick)
    }
if ($('#hihat'+posi).is(':checked')){
        playNote(6, hihat)
    }
if ($('#ride'+posi).is(':checked')){
        playNote(6, ride)
    }
if ($('#snare'+posi).is(':checked')){
        playNote(6, snare)
    }
if ($('#tom-one'+posi).is(':checked')){
        playNote(6, tom1)
    }
if ($('#tom-two'+posi).is(':checked')){
        playNote(6, tom2)
    }
if ($('#tom-three'+posi).is(':checked')){
        playNote(6, tom3)
    }
    if (posi < 8)
        posi++
    else
        posi = 1

}

function updateDrums(){
    drumMsg[0] = 21
    // drumMsg[1] = 

}