var pingActive = false
var refreshPing
var pingMsg = []

pingMsg[0] = randID ;
pingMsg[1] = '0' ;


function Ping(){
	

if (!pingActive) {
      pingActive = true
      refreshPing = setInterval(pinger, 5)
}

else if (pingActive) {
      pingActive = false
      clearInterval(refreshPing)
}

} // end function


function pinger() {


pingMsg[2] = '0' ;

for (var i = 1 ; i < userLimit ; i++)
{
      if (user[i] != 0)
      {
      startTime = new Date() ;
      user[i].send(pingMsg);
      console.log('I sent the ping: ' + pingMsg[2] + " to " + user[i].peer);
      }
}  


}

