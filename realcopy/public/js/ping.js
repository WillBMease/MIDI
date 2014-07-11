function Ping(){
	
      startTime = new Date() ;
      midiMsg[0] = randID ;
      midiMsg[1] = '0' ;
      midiMsg[2] = '0' ;


for (var i = 1 ; i < userLimit ; i++)
{
      if (user[i] != 0)
      {
      user[i].send(midiMsg);
      console.log('I sent the ping: ' + midiMsg[2] + " to " + user[i].peer);
      }
}  

} // end function