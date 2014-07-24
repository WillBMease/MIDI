function instrumentChange(instr){

      midiMsg[0] = randID ;
      midiMsg[1] = '3' ;
      midiMsg[2] = instr ;

      loadInstrument(0, instr)
	for (var i = 1 ; i < userLimit ; i++) {
	      if (user[i] != 0){
		      user[i].send(midiMsg);
		      console.log('I sent the instrument change: ' + midiMsg[2] + " to " + user[i].peer);
	      }
	}
} // end function

    $('.changeInstrument').click(function(){
      var instr = $(this).attr('id')
      instrumentChange(instr)
    })
