var pingActive = false
var refreshPing
var pingMsg = []
var pingCt = 0
var pingFirst = 0

pingMsg[0] = pingID ;
pingMsg[1] = '0' ;


function Ping(){
	

if (!pingActive) {
      pingActive = true
      refreshPing = setInterval(pinger, 500)
}

else if (pingActive) {
      pingActive = false
      clearInterval(refreshPing)
}

} // end function


function pinger() {

pingID++
pingMsg[0] = pingID
pingMsg[2] = '0' ;

for (var i = 1 ; i < userLimit ; i++)
{
      if (user[i] != 0)
      {
      startTime[pingID] = new Date() ;
            for (var x = 0 ; x < 3 ; x++) {
                  user[i].send(pingMsg);
                  console.log('I sent the ping: ' + pingMsg[2] + " to " + user[i].peer);
            }
      }
}  


}

function firstPinger() {
      pingFirst++
      pingMsg[2] = '0'
      pingMsg[3] = pingCt

      for (var i = 1 ; i < userLimit ; i++)
{
      if (user[i] != 0)
      {
      startTime[pingCt] = new Date() ;
            for (var x = 0 ; x < 10 ; x++) {
                  user[i].send(pingMsg);
                  console.log('I sent the ping: ' + pingMsg[2] + " to " + user[i].peer);
            }
      }
}  
}

