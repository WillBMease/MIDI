grid width and height
var bw = 400;
var bh = 400;
//padding around grid
var p = 10;
//size of canvas
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;

var canvas = $('<sequencer/>').attr({width: cw, height: ch}).appendTo('body');

var context = canvas.get(0).getContext("2d");

function drawBoard(){
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }


    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }

    context.strokeStyle = "white";
    context.stroke();
}

drawBoard();


// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.fillStyle = "#FF0066";

// // for (var i = 0)

// ctx.fillRect(50,50,150,75);