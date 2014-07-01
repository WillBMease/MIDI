function startNote(soundOn, socket, isPlaying)
{
	oscillator = context.createOscillator(); // Create bass guitar
    gainNode = context.createGainNode(); // Create boost pedal
 
	oscillator.connect(gainNode); // Connect bass guitar to boost pedal
	gainNode.connect(context.destination); // Connect boost pedal to amplifier
	gainNode.gain.value = 0.3; // Set boost pedal to 30 percent volume

	console.log(soundOn) ;

	if (soundOn == 97)
	{
		oscillator.frequency.value = 440.00; // A
		oscillator.noteOn(0); // Play bass guitar instantly
	}
	else if (soundOn == 98)
	{
		oscillator.frequency.value = 493.88; // B
		oscillator.noteOn(0);
	}
	else if (soundOn == 99)
	{
		oscillator.frequency.value = 523.25; // C
		oscillator.noteOn(0);
	}
	else if (soundOn = 100)
	{
		oscillator.frequency.value = 587.33; // D
		oscillator.noteOn(0) ;
	}
	else if (soundOn = 101)
	{
		oscillator.frequency.value = 659.25; // E
		oscillator.noteOn(0) ;
	}

$(document).keyup(function(e){
	off = e.which;
	socket.emit('message off', off);
	isPlaying = false ;
	return false;
});
$(document).focus(function(e) { 
  isPlaying = false;
});

socket.on('message off', function(msgOff){
	endNote(msgOff, oscillator) ;
});

}

// }

function endNote(soundOff, oscillator)
{
	if (soundOff == 65)
	{
		oscillator.noteOff(0); // Play bass guitar instantly
		oscillator.disconnect();
	}
	else if (soundOff == 66)
	{
		oscillator.noteOff(0); // Play bass guitar instantly
		oscillator.disconnect();
	}
	else if (soundOff == 67)
	{
		oscillator.noteOff(0); // Play bass guitar instantly
		oscillator.disconnect();
	}
	else if (soundOff = 68)
	{
		oscillator.noteOff(0); // Play bass guitar instantly
		oscillator.disconnect();
	}
	else if (soundOff = 69)
	{
		oscillator.noteOff(0); // Play bass guitar instantly
		oscillator.disconnect();
	}
}