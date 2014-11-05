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

  var trueBeat = []

for (var x = 0 ; x < 8 ; x++){
    trueBeat[x] = []
    for (var y = 0 ; y < 8 ; y++){
        trueBeat[x][y] = []
    }
    for (var y = 0 ; y < 8 ; y++){
        trueBeat[x][0] = trueCrash[x]
        trueBeat[x][1] = trueKick[x]
        trueBeat[x][2] = trueHihat[x]
        trueBeat[x][3] = trueRide[x]
        trueBeat[x][4] = trueSnare[x]
        trueBeat[x][5] = trueTom1[x]
        trueBeat[x][6] = trueTom2[x]
        trueBeat[x][7] = trueTom3[x]
    }
}



  // thebeat[note position][drum hit][true/false]
  var thebeat = []

  for (var x = 0 ; x < 8 ; x++){
    thebeat[x] = []
        for (var y = 0 ; y < 8 ; y++){
            thebeat[x][y] = []
            thebeat[x][y][0] = trueBeat[0][y][x]
            if (trueBeat[0][y][x] == 1){
                assignDrum(x+1, y)
            }
        }
  }

  function clearDrumGrid(){
    
for (var x = 0 ; x < 8 ; x++){
    if (x == 0){
        chosenDrum = "#crash"
    }
    else if (x == 1){
        chosenDrum = "#kick"
    }
    else if (x == 2){
        chosenDrum = "#hihat"
    }
    else if (x == 3){
        chosenDrum = "#ride"
    }
    else if (x == 4){
        chosenDrum = "#snare"
    }
    else if (x == 5){
        chosenDrum = "#tom-one"
    }
    else if (x == 6){
        chosenDrum = "#tom-two"
    }
    else if (x == 7){
        chosenDrum = "#tom-three"
    }
  for (var y = 0 ; y < 8 ; y++){
    var temp = chosenDrum + "" + (y+1)
    $(temp).prop('checked', false);
  }
}
  }

  function changeDrumBeat(which){
    clearDrumGrid()

    if (which == "Beat 1"){
        for (var x = 0 ; x < 8 ; x++){
            for (var y = 0 ; y < 8 ; y++){
                if (trueBeat[0][y][x] == 1)
                    assignDrum(x+1, y)
            }
        }
    }
    else if (which == "Beat 2"){
        for (var x = 0 ; x < 8 ; x++){
            for (var y = 0 ; y < 8 ; y++){
                if (trueBeat[1][y][x] == 1)
                    assignDrum(x+1, y)
            }
        }
    }
  }

function assignDrum(p, which){
    var chosenDrum
    if (which == 0){
        chosenDrum = "#crash"+p
    }
    else if (which == 1){
        chosenDrum = "#kick"+p
    }
    else if (which == 2){
        chosenDrum = "#hihat"+p
    }
    else if (which == 3){
        chosenDrum = "#ride"+p
    }
    else if (which == 4){
        chosenDrum = "#snare"+p
    }
    else if (which == 5){
        chosenDrum = "#tom-one"+p
    }
    else if (which == 6){
        chosenDrum = "#tom-two"+p
    }
    else if (which == 7){
        chosenDrum = "#tom-three"+p
    }
    $(chosenDrum).prop('checked', true);
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
}

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