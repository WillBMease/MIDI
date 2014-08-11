var pingActive = false
var refreshPing
var pingMsg = []
var pingID = 0
var pingFirst = 0
var benchmark = []
var prevMsg

pingMsg[0] = pingID ;
pingMsg[1] = '0' ;

var quantID = 0
var quantMsg = []
quantMsg[0] = quantID
quantMsg[1] = null
quantMsg[2] = null
quantMsg[3] = null
quantMsg[4] = null

function Ping(){
	

if (!pingActive) {
      pingActive = true
      refreshPing = setInterval(pinger, 1000)
}

else if (pingActive) {
      pingActive = false
      clearInterval(refreshPing)
}

} // end function


function pinger() {

pingMsg[0] = pingID
pingMsg[2] = '0' ;

for (var i = 1 ; i < userLimit ; i++)
{
      if (user[i] != 0)
      {
      startTime[pingID] = new Date() ;
            for (var x = 0 ; x < 3 ; x++) {
                  user[i].send(pingMsg);
            }
      }
}  

pingID++

}

function quantTest(){
      quantMsg[0] = quantID
      quantMsg[1] = '12'
      quantMsg[2] = +new Date()

      console.log(quantMsg[2])

    for (var i = 1 ; i < userLimit ; i++)
{
      if (user[i] != 0)
      {
            for (var x = 0 ; x < 1 ; x++) {
                  user[i].send(quantMsg);
            }
      }
}    

quantID++

}

function quantizer(data){
      if (data[0] == 0) {
            benchmark[0] = data[2]
            benchmark[2] = new Date()
            prevMsg = data[2]
      }


if (data[0] != 0){

      benchmark[1] = new Date()

      var benchDiff = benchmark[1] - benchmark[2]
      var benchSt = benchDiff.toString()

      console.log("bench diff is " + benchSt)

      var diff = data[2] - prevMsg
      var diffSt = diff.toString()

      console.log("difference is " + diffSt)

      benchmark[2] = benchmark[1]

}
      
      prevMsg = data[2]

}

function firstPinger() {
      pingFirst++
      pingMsg[0] = pingFirst
      pingMsg[2] = '0'

      for (var i = 1 ; i < userLimit ; i++)
{
      if (user[i] != 0)
      {
      startTime[pingCt] = new Date() ;
            for (var x = 0 ; x < 10 ; x++) {
                  user[i].send(pingMsg);
            }
      }
}  
}

