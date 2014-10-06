


function keyboardMap(keyInput){
	var output = 200;

	// z
	if(keyInput == 90){
		output = 1;
		// audioTest()
	}
	// s
	else if (keyInput == 83) {
		output = 2;
	}
	// x
	else if (keyInput == 88) {
		output = 3;
	}
	// d
	else if (keyInput == 68) {
		output = 4;
	}
	// c
	else if (keyInput == 67) {
		output = 5;
	}
	// v
	else if (keyInput == 86) {
		output = 6;
	}
	// g
	else if (keyInput == 71) {
		output = 7;
	}
	// b
	else if (keyInput == 66) {
		output = 8;
	}
	// h
	else if (keyInput == 72) {
		output = 9;
	}
	// n
	else if (keyInput == 78) {
		output = 10;
	}
	// j
	else if (keyInput == 74) {
		output = 11;
	}
	// m
	else if (keyInput == 77) {
		output = 12;
	}

///////////////////////////// Next Octave /////////////////////////////////
	
	// < OR q
	else if (keyInput == 188 || keyInput == 81) {
		output = 13;
	}
	// l OR 2
	else if (keyInput == 76 || keyInput == 50) {
		output = 14;
	}
	// > OR w
	else if (keyInput == 190 || keyInput == 87) {
		output = 15;
	}
	// ; OR 3
	else if (keyInput == 186 || keyInput == 51) {
		output = 16;
	}
	// ? OR e
	else if (keyInput == 191 || keyInput == 69) {
		output = 17;
	}
	// r
	else if (keyInput == 82) {
		output = 18;
	}
	// 5
	else if (keyInput == 53) {
		output = 19;
	}
	// t
	else if (keyInput == 84) {
		output = 20;
	}
	// 6
	else if (keyInput == 54) {
		output = 21;
	}
	// y
	else if (keyInput == 89) {
		output = 22;
	}
	// 7
	else if (keyInput == 55) {
		output = 23;
	}
	// u
	else if (keyInput == 85) {
		output = 24;
	}

/////////////////////// Start of the next Octave /////////////////////////

	// i
	else if (keyInput == 73) {
		output = 25;
	}
	// 9
	else if (keyInput == 57) {
		output = 26;
	}
	// o
	else if (keyInput == 79) {
		output = 27;
	}
	// 0
	else if (keyInput == 48) {
		output = 28;
	}
	// p
	else if (keyInput == 80) {
		output = 29;
	}
	// {
	else if (keyInput == 219) {
		output = 30;
	}
	// +
	else if (keyInput == 187) {
		output = 31;
	}
	// }
	else if (keyInput == 221) {
		output = 32;
	}

	else
		output = 200

	return output;
}

// We need to look at this... I'm not sure the Id's of other keys on the keyboards match the axiom////////
function masterConversion(midiInput){

	var output = 200;

	if(midiInput[4] == 0 && midiInput[2] == 'e0' || midiInput[2] ==89){
		output = 200;
	} 
	///// for drums ////////////
	else if(midiInput[2] == 99){
		switch (midiInput[3]){

			case '26': log.innerText = "Snare" ;
			output = '13';
			break ;

			case '24': log.innerText = "Kick" ;
			output = '5' ;
			break ;

			case '2e': log.innerText = "Hi-Hat" ;
			output = '7' ;
			break ;

			case '31': log.innerText = "Crash" ;
				output = '3' ;
			break ;

			case '33': log.innerText = "Ride" ;
			output = '9' ;
			break ;

			case '30': log.innerText = "Tom 1" ;
			output = '15' ;
			break ;

			case '2d': log.innerText = "Tom 2" ;
			output = '17' ;
			break ;

			case '2b': log.innerText = "Tom 3" ;
			output = '16' ;
			break ;
		}
	}
	// else if (midiInput[2] == 89)
	// {	
	// 	output = 200 ;
	// }

	else if (midiInput[2] == 90){
		switch (midiInput[3]){
		
			case '18' : log.innerText = "C1" ;
			output = 1-1
			break ;

			case '19' : log.innerText = "C#1" ;
			output = 2-1
			break ;

			case '1a' : log.innerText = "D1" ;
			output = 3-1
			break ;

			case '1b' : log.innerText = "D#1" ;
			output = 4-1
			break ;

			case '1c' : log.innerText = "E#1" ;
			output = 5-1
			break ;

			case '1d' : log.innerText = "F1" ;
			output = 6-1
			break ;

			case '1e' : log.innerText = "F#1" ;
			output = 7-1
			break ;

			case '1f' : log.innerText = "G1" ;
			output = 8-1
			break ;

			case '20' : log.innerText = "G#1" ;
			output = 9-1
			break ;

			case '21' : log.innerText = "A1";
			output = 10-1;
			break ;

			case '22' : log.innerText = "A#1";
			output = 11-1;
			break ;

			case '23' : log.innerText = "B1";
			output = 12-1;
			break ;

			case '24' : log.innerText = "C2" ; 
			output = 13-1;
			break ;

			case '25' : log.innerText = "C#2" ;
			output = 14-1;
			break ;

			case '26' : log.innerText = "D2" ;
			output = 15-1;
			break ;

			case '27' : log.innerText = "D#2" ;
			output = 16-1;
			break ;

			case '28' : log.innerText = "E2" ;
			output = 17-1;
			break ;

			case '29' : log.innerText = "F2" ;
			output = 18-1;
			break ;

			case '2a' : log.innerText = "F#2" ;
			output = 19-1;
			break ;

			case '2b' : log.innerText = "G2" ;
			output = 20-1;
			break ;

			case '2c' : log.innerText = "G#2" ;
			output = 21-1;
			break ;

			case '2d' : log.innerText = "A2" ;
			output = 22-1;
			break ;

			case '2e' : log.innerText = "A#2" ;
			output = 23-1;
			break ;

			case '2f' : log.innerText = "B2" ;
			output = 24-1;
			break ;

			case '30' : log.innerText = "C3" ;
			output = 25-1;
			break ;

			case '31' : log.innerText = "C#3" ;
			output = 26-1;
			break ;

			case '32' : log.innerText = "D3" ;
			output = 27-1;
			break ;

			case '33' : log.innerText = "D#3" ;
			output = 28-1;
			break ;

			case '34' : log.innerText = "E3" ;
			output = 29-1;
			break ;

			case '35' : log.innerText = "F3" ;
			output = 30-1;
			break ;

			case '36' : log.innerText = "F#3" ;
			output = 31-1;
			break ;

			case '37' : log.innerText = "G3" ;
			output = 32-1;
			break ;

			case '38' : log.innerText = "G#3" ;
			output = 33-1;
			break ;

			case '39' : log.innerText = "A3" ;
			output = 34-1;
			break ;

			case '3a' : log.innerText = "A#3" ;
			output = 35-1;
			break ;

			case '3b' : log.innerText = "B3" ;
			output = 36-1;
			break ;

			case '3c' : log.innerText = "C4" ;
			output = 37-1;
			break ;

			case '3d' : log.innerText = "C#4" ;
			output = 38-1;
			break ;

			case '3e' : log.innerText = "D4" ;
			output = 39-1;
			break ;

			case '3f' : log.innerText = "D#4" ;
			output = 40-1;
			break ;

			case '40' : log.innerText = "E4" ;
			output = 41-1;
			break ;

			case '41' : log.innerText = "F4" ;
			output = 42-1;
			break ;
			
			case '42' : log.innerText = "F#4" ;
			output = 43-1;
			break ;
			
			case '43' : log.innerText = "G4" ;
			output = 44-1;
			break ;
			
			case '44' : log.innerText = "G#4" ;
			output = 45-1;
			break ;
			
			case '45' : log.innerText = "A4" ;
			output = 46-1;
			break ;
			
			case '46' : log.innerText = "A#4" ;
			output = 47-1;
			break ;

			case '47' : log.innerText = "B4" ;
			output = 48-1;
			break ;	

			case '48' : log.innerText = "C5" ;
			output = 49-1;
			break ;

			case '49' : log.innerText = "C#5" ;
			output = 50-1;
			break ;

			case '4a' : log.innerText = "D5" ;
			output = 51-1;
			break ;

			case '4b' : log.innerText = "D#5" ;
			output = 52-1;
			break ;

			case '4c' : log.innerText = "E5" ;
			output = 53-1;
			break ;

			case '4d' : log.innerText = "F5" ;
			output = 54-1;
			break ;

			case '4e' : log.innerText = "F#5" ;
			output = 55-1;
			break ;

			case '4f' : log.innerText = "G5" ;
			output = 56-1;
			break ;

			case '50' : log.innerText = "G#5" ;
			output = 57-1;
			break ;

			case '51' : log.innerText = "A5" ;
			output = 58-1;
			break ;

			case '52' : log.innerText = "A#5" ;
			output = 59-1;
			break ;

			case '53' : log.innerText = "B5" ;
			output = 60-1;
			break ;

			case '54' : log.innerText = "C6" ;
			output = 61-1;
			break;

			case '55' : log.innerText = "C#6" ;
			output = 62-1;
			break;

			case '56' : log.innerText = "D6" ;
			output = 63-1;
			break;

			case '57' : log.innerText = "D#6" ;
			output = 64-1;
			break;

			case '58' : log.innerText = "E6" ;
			output = 65-1;
			break;

			case '59' : log.innerText = "F6" ;
			output = 66-1;
			break;

			case '5a' : log.innerText = "F#6" ;
			output = 67-1;
			break;

			case '5b' : log.innerText = "G6" ;
			output = 68-1;
			break;

			case '5c' : log.innerText = "G#6" ;
			output = 69-1;
			break;

			case '5d' : log.innerText = "A6" ;
			output = 70-1;
			break;

			case '5e' : log.innerText = "A#6" ;
			output = 71-1;
			break;
		
			case '5f' : log.innerText = "B6" ;
			output = 72-1;
			break;

			case '60' : log.innerText = "C7" ;
			output = 73-1;
			break ;

			case '61' : log.innerText = "C#7" ;
			output = 74-1;
			break ;

			case '62' : log.innerText = "D7" ;
			output = 75-1;
			break ;

			case '63' : log.innerText = "D#7" ;
			output = 76-1;
			break ;

			case '64' : log.innerText = "E7" ;
			output = 77-1;
			break;

			case '66' : log.innerText = "F7" ;
			output = 78-1;
			break;

			case '66' : log.innerText = "F#7" ;
			output = 79-1;
			break;

			case '67' : log.innerText = "G7" ;
			output = 80-1;
			break;

			case '68' : log.innerText = "G#7" ;
			output = 81-1;
			break;

			case '69' : log.innerText = "A7" ;
			output = 82-1;
			break;

			case '6a' : log.innerText = "A#7" ;
			output = 83-1;
			break;

			case '6b' : log.innerText = "B7" ;
			output = 84-1;
			break;

			case '6c' : log.innerText = "C8" ;
			output = 85-1;
			break;

			case '6d' : log.innerText = "C#8" ;
			output = 86-1;
			break;

			case '6e' : log.innerText = "D8" ;
			output = 87-1;
			break;

			case '6f' : log.innerText = "D#8" ;
			output = 88-1;
			break;

			case '70' : log.innerText = "E8" ;
			output = 89-1;
			break;

			case '71' : log.innerText = "F8" ;
			output = 90-1;
			break;

			case '72' : log.innerText = "F#8" ;
			output = 91-1;
			break;

			case '73' : log.innerText = "G8" ;
			output = 92-1;
			break;

			case '74' : log.innerText = "G#8" ;
			output = 93-1;
			break;

			case '75' : log.innerText = "A8" ;
			output = 94-1;
			break;

			case '76' : log.innerText = "A#8" ;
			output = 95-1;
			break;

			case '77' : log.innerText = "B8" ;
			output = 96-1;
			break;

			case '78' : log.innerText = "C9" ;
			output = 97-1;
			break;
			
			case '79' : log.innerText = "C#9" ;
			output = 98-1;
			break;

			case '7a' : log.innerText = "D9" ;
			output = 99-1;
			break;

			case '7b' : log.innerText = "D#9" ;
			output = 100-1;
			break;

			case '7c' : log.innerText = "E9" ;
			output = 101-1;
			break;

			case '7d' : log.innerText = "F9" ;
			output = 102-1;
			break;

			case '7e' : log.innerText = "F#9" ;
			output = 103-1;
			break;

			case '7f' : log.innerText = "G9" ;
			output = 104-1;
			break;

			case '80' : log.innerText = "G#9" ;
			output = 105-1;
			break;

			case '81' : log.innerText = "A9" ;
			output = 106-1;
			break;

			case '82' : log.innerText = "A#9" ;
			output = 107-1;
			break;

			case '83' : log.innerText = "B9" ;
			output = 108-1;
			break;		}
	}
	// console.log(output)
	return output;
}


var octaveMsg = []
octaveMsg[1] = 7

function transpose(index, noteInput){

	// 1
	if(noteInput == 49 && octave[index] < globalOctave){
		console.log('octave up!')
		octave[index] = octave[index] + 1;
		octaveMsg[2] = octave[index]
	}
	// ~
	if(noteInput == 192 && octave[index] != 0){
		console.log('octave down!')
		octave[index] = octave[index] - 1;
		octaveMsg[2] = octave[index]
	}

}





// case '18' : log.innerText = "C1" ;
// 			output = 1-1
// 			break ;

// 			case '19' : log.innerText = "C#1" ;
// 			output = 2-1
// 			break ;

// 			case '1a' : log.innerText = "D1" ;
// 			output = 3-1
// 			break ;

// 			case '1b' : log.innerText = "D#1" ;
// 			output = 4-1
// 			break ;

// 			case '1c' : log.innerText = "E#1" ;
// 			output = 5-1
// 			break ;

// 			case '1d' : log.innerText = "F1" ;
// 			output = 6-1
// 			break ;

// 			case '1e' : log.innerText = "F#1" ;
// 			output = 7-1
// 			break ;

// 			case '1f' : log.innerText = "G1" ;
// 			output = 8-1
// 			break ;

// 			case '20' : log.innerText = "G#1" ;
// 			output = 9-1
// 			break ;

// 			case '21' : log.innerText = "A1";
// 			output = 10-1;
// 			break ;

// 			case '22' : log.innerText = "A#1";
// 			output = 11-1;
// 			break ;

// 			case '23' : log.innerText = "B1";
// 			output = 12-1;
// 			break ;

// 			case '24' : log.innerText = "C2" ; 
// 			output = 13-1;
// 			break ;

// 			case '25' : log.innerText = "C#2" ;
// 			output = 14-1;
// 			break ;

// 			case '26' : log.innerText = "D2" ;
// 			output = 15-1;
// 			break ;

// 			case '27' : log.innerText = "D#2" ;
// 			output = 16-1;
// 			break ;

// 			case '28' : log.innerText = "E2" ;
// 			output = 17-1;
// 			break ;

// 			case '29' : log.innerText = "F2" ;
// 			output = 18-1;
// 			break ;

// 			case '2a' : log.innerText = "F#2" ;
// 			output = 19-1;
// 			break ;

// 			case '2b' : log.innerText = "G2" ;
// 			output = 20-1;
// 			break ;

// 			case '2c' : log.innerText = "G#2" ;
// 			output = 21-1;
// 			break ;

// 			case '2d' : log.innerText = "A2" ;
// 			output = 22-1;
// 			break ;

// 			case '2e' : log.innerText = "A#2" ;
// 			output = 23-1;
// 			break ;

// 			case '2f' : log.innerText = "B2" ;
// 			output = 24-1;
// 			break ;

// 			case '30' : log.innerText = "C3" ;
// 			output = 25-1;
// 			break ;

// 			case '31' : log.innerText = "C#3" ;
// 			output = 26-1;
// 			break ;

// 			case '32' : log.innerText = "D3" ;
// 			output = 27-1;
// 			break ;

// 			case '33' : log.innerText = "D#3" ;
// 			output = 28-1;
// 			break ;

// 			case '34' : log.innerText = "E3" ;
// 			output = 29-1;
// 			break ;

// 			case '35' : log.innerText = "F3" ;
// 			output = 30-1;
// 			break ;

// 			case '36' : log.innerText = "F#3" ;
// 			output = 31-1;
// 			break ;

// 			case '37' : log.innerText = "G3" ;
// 			output = 32-1;
// 			break ;

// 			case '38' : log.innerText = "G#3" ;
// 			output = 33-1;
// 			break ;

// 			case '39' : log.innerText = "A3" ;
// 			output = 34-1;
// 			break ;

// 			case '3a' : log.innerText = "A#3" ;
// 			output = 35-1;
// 			break ;

// 			case '3b' : log.innerText = "B3" ;
// 			output = 36-1;
// 			break ;

// 			case '3c' : log.innerText = "C4" ;
// 			output = 37-1;
// 			break ;

// 			case '3d' : log.innerText = "C#4" ;
// 			output = 38-1;
// 			break ;

// 			case '3e' : log.innerText = "D4" ;
// 			output = 39-1;
// 			break ;

// 			case '3f' : log.innerText = "D#4" ;
// 			output = 40-1;
// 			break ;

// 			case '40' : log.innerText = "E4" ;
// 			output = 41-1;
// 			break ;

// 			case '41' : log.innerText = "F4" ;
// 			output = 42-1;
// 			break ;
			
// 			case '42' : log.innerText = "F#4" ;
// 			output = 43-1;
// 			break ;
			
// 			case '43' : log.innerText = "G4" ;
// 			output = 44-1;
// 			break ;
			
// 			case '44' : log.innerText = "G#4" ;
// 			output = 45-1;
// 			break ;
			
// 			case '45' : log.innerText = "A4" ;
// 			output = 46-1;
// 			break ;
			
// 			case '46' : log.innerText = "A#4" ;
// 			output = 47-1;
// 			break ;

// 			case '47' : log.innerText = "B4" ;
// 			output = 48-1;
// 			break ;	

// 			case '48' : log.innerText = "C5" ;
// 			output = 49-1;
// 			break ;

// 			case '49' : log.innerText = "C#5" ;
// 			output = 50-1;
// 			break ;

// 			case '4a' : log.innerText = "D5" ;
// 			output = 51-1;
// 			break ;

// 			case '4b' : log.innerText = "D#5" ;
// 			output = 52-1;
// 			break ;

// 			case '4c' : log.innerText = "E5" ;
// 			output = 53-1;
// 			break ;

// 			case '4d' : log.innerText = "F5" ;
// 			output = 54-1;
// 			break ;

// 			case '4e' : log.innerText = "F#5" ;
// 			output = 55-1;
// 			break ;

// 			case '4f' : log.innerText = "G5" ;
// 			output = 56-1;
// 			break ;

// 			case '50' : log.innerText = "G#5" ;
// 			output = 57-1;
// 			break ;

// 			case '51' : log.innerText = "A5" ;
// 			output = 58-1;
// 			break ;

// 			case '52' : log.innerText = "A#5" ;
// 			output = 59-1;
// 			break ;

// 			case '53' : log.innerText = "B5" ;
// 			output = 60-1;
// 			break ;

// 			case '54' : log.innerText = "C6" ;
// 			output = 61-1;
// 			break;

// 			case '55' : log.innerText = "C#6" ;
// 			output = 62-1;
// 			break;

// 			case '56' : log.innerText = "D6" ;
// 			output = 63-1;
// 			break;

// 			case '57' : log.innerText = "D#6" ;
// 			output = 64-1;
// 			break;

// 			case '58' : log.innerText = "E6" ;
// 			output = 65-1;
// 			break;

// 			case '59' : log.innerText = "F6" ;
// 			output = 66-1;
// 			break;

// 			case '5a' : log.innerText = "F#6" ;
// 			output = 67-1;
// 			break;

// 			case '5b' : log.innerText = "G6" ;
// 			output = 68-1;
// 			break;

// 			case '5c' : log.innerText = "G#6" ;
// 			output = 69-1;
// 			break;

// 			case '5d' : log.innerText = "A6" ;
// 			output = 70-1;
// 			break;

// 			case '5e' : log.innerText = "A#6" ;
// 			output = 71-1;
// 			break;
		
// 			case '5f' : log.innerText = "B6" ;
// 			output = 72-1;
// 			break;

// 			case '60' : log.innerText = "C7" ;
// 			output = 73-1;
// 			break ;

// 			case '61' : log.innerText = "C#7" ;
// 			output = 74-1;
// 			break ;

// 			case '62' : log.innerText = "D7" ;
// 			output = 75-1;
// 			break ;

// 			case '63' : log.innerText = "D#7" ;
// 			output = 76-1;
// 			break ;

// 			case '64' : log.innerText = "E7" ;
// 			output = 77-1;
// 			break;

// 			case '66' : log.innerText = "F7" ;
// 			output = 78-1;
// 			break;

// 			case '66' : log.innerText = "F#7" ;
// 			output = 79-1;
// 			break;

// 			case '67' : log.innerText = "G7" ;
// 			output = 80-1;
// 			break;

// 			case '68' : log.innerText = "G#7" ;
// 			output = 81-1;
// 			break;

// 			case '69' : log.innerText = "A7" ;
// 			output = 82-1;
// 			break;

// 			case '6a' : log.innerText = "A#7" ;
// 			output = 83-1;
// 			break;

// 			case '6b' : log.innerText = "B7" ;
// 			output = 84-1;
// 			break;

// 			case '6c' : log.innerText = "C8" ;
// 			output = 85-1;
// 			break;

// 			case '6d' : log.innerText = "C#8" ;
// 			output = 86-1;
// 			break;

// 			case '6e' : log.innerText = "D8" ;
// 			output = 87-1;
// 			break;

// 			case '6f' : log.innerText = "D#8" ;
// 			output = 88-1;
// 			break;

// 			case '70' : log.innerText = "E8" ;
// 			output = 89-1;
// 			break;

// 			case '71' : log.innerText = "F8" ;
// 			output = 90-1;
// 			break;

// 			case '72' : log.innerText = "F#8" ;
// 			output = 91-1;
// 			break;

// 			case '73' : log.innerText = "G8" ;
// 			output = 92-1;
// 			break;

// 			case '74' : log.innerText = "G#8" ;
// 			output = 93-1;
// 			break;

// 			case '75' : log.innerText = "A8" ;
// 			output = 94-1;
// 			break;

// 			case '76' : log.innerText = "A#8" ;
// 			output = 95-1;
// 			break;

// 			case '77' : log.innerText = "B8" ;
// 			output = 96-1;
// 			break;

// 			case '78' : log.innerText = "C9" ;
// 			output = 97-1;
// 			break;
			
// 			case '79' : log.innerText = "C#9" ;
// 			output = 98-1;
// 			break;

// 			case '7a' : log.innerText = "D9" ;
// 			output = 99-1;
// 			break;

// 			case '7b' : log.innerText = "D#9" ;
// 			output = 100-1;
// 			break;

// 			case '7c' : log.innerText = "E9" ;
// 			output = 101-1;
// 			break;

// 			case '7d' : log.innerText = "F9" ;
// 			output = 102-1;
// 			break;

// 			case '7e' : log.innerText = "F#9" ;
// 			output = 103-1;
// 			break;

// 			case '7f' : log.innerText = "G9" ;
// 			output = 104-1;
// 			break;

// 			case '80' : log.innerText = "G#9" ;
// 			output = 105-1;
// 			break;

// 			case '81' : log.innerText = "A9" ;
// 			output = 106-1;
// 			break;

// 			case '82' : log.innerText = "A#9" ;
// 			output = 107-1;
// 			break;

// 			case '83' : log.innerText = "B9" ;
// 			output = 108-1;
// 			break;		}
// 	}









function keyboardMapOsc(keyInput){
	var output ;

	console.log(keyInput)

	// z
	if(keyInput == 122){
		output = parseFloat("32.703")
		// audioTest()
	}
	// s
	else if (keyInput == 115) {
		output = parseFloat("34.648")
	}
	// x
	else if (keyInput == 120) {
		output = parseFloat("36.708")
	}
	// d
	else if (keyInput == 100) {
		output = parseFloat("38.891")
	}
	// c
	else if (keyInput == 99) {
		output = parseFloat("41.203")
	}
	// v
	else if (keyInput == 118) {
		output = parseFloat("43.654")
	}
	// g
	else if (keyInput == 103) {
		output = parseFloat("46.249")
	}
	// b
	else if (keyInput == 98) {
		output = parseFloat("48.999")
	}
	// h
	else if (keyInput == 104) {
		output = parseFloat("51.913")
	}
	// n
	else if (keyInput == 110) {
		output = parseFloat("55")
	}
	// j
	else if (keyInput == 106) {
		output = parseFloat("58.27")
	}
	// m
	else if (keyInput == 109) {
		output = parseFloat("61.735")
	}

///////////////////////////// Next Octave /////////////////////////////////
	else if (keyInput == 44 || keyInput == 113) {
		output = parseFloat("65.406")
	}
	// l OR 2
	else if (keyInput == 108 || keyInput == 50) {
		output = parseFloat("69.296")
	}
	// > OR w
	else if (keyInput == 46 || keyInput == 119) {
		output = parseFloat("73.416")
	}
	// ; OR 3
	else if (keyInput == 59 || keyInput == 51) {
		output = parseFloat("77.782")
	}
	// ? OR e
	else if (keyInput == 47 || keyInput == 101) {
		output = parseFloat("82.407")
	}
	// r
	else if (keyInput == 114) {
		output = parseFloat("87.307")
	}
	// 5
	else if (keyInput == 53) {
		output = parseFloat("92.499")
	}
	// t
	else if (keyInput == 116) {
		output = parseFloat("97.999")
	}
	// 6
	else if (keyInput == 54) {
		output = parseFloat("103.826");
	}
	// y
	else if (keyInput == 121) {
		output = parseFloat("110")
	}
	// 7
	else if (keyInput == 55) {
		output = parseFloat("116.541");
	}
	// u
	else if (keyInput == 117) {
		output = parseFloat("123.471");
	}

/////////////////////// Start of the next Octave /////////////////////////

	// i
	else if (keyInput == 105) {
		output = parseFloat("130.813");
	}
	// 9
	else if (keyInput == 57) {
		output = parseFloat("138.591");
	}
	// o
	else if (keyInput == 111) {
		output = parseFloat("146.832");
	}
	// 0
	else if (keyInput == 48) {
		output = parseFloat("155.563");
	}
	// p
	else if (keyInput == 112) {
		output = parseFloat("164.814");
	}
	// {
	else if (keyInput == 91) {
		output = parseFloat("174.614");
	}
	// +
	else if (keyInput == 61) {
		output = parseFloat("184.997");
	}
	// }
	else if (keyInput == 93) {
		output = parseFloat("195.998");
	}

	else
		output = 200

	return output;
}