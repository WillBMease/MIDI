function instrumentChange(select, instr){

      midiMsg[0] = randID ;
      midiMsg[1] = '3' ;
      midiMsg[2] = select ;

      generateNotes('me', instr)

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
}