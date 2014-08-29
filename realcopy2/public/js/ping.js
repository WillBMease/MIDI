var pingActive = false
var refreshPing
var pingMsg = []
var pingID = 0
var pingFirst = 0
var benchmark = []
var prevMsg
var increment = false
var firstPing = true
var recentPing = 100
var doQuant = false
var firstQuant = false
var lowPing = 1000

pingMsg[0] = pingID ;
pingMsg[1] = '0' ;

var quantID = 0
var quantMsg = []
quantMsg[0] = quantID
quantMsg[1] = null
quantMsg[2] = null
quantMsg[3] = null
quantMsg[4] = null

      var hardNote = []
      hardNote[0] = 0
      hardNote[1] = 0
      hardNote[2] = 80

function Ping(){
	

if (!pingActive) {
      pingActive = true
      refreshPing = setInterval(quantTest, 25)
}

else if (pingActive) {
      pingActive = false
      clearInterval(refreshPing)
}

} // end function


function pinger() {

pingMsg[0] = pingID
pingMsg[2] = '0' ;

      startTime[pingID] = new Date() ;

for (var i = 1 ; i < userLimit ; i++)
{
      if (user[i] != 0)
      {
            for (var x = 0 ; x < 3 ; x++) {
                  user[i].send(pingMsg);
            }
      }
}  

pingID++

}

function quantTest(){

if (recentPing < lowPing)
      lowPing = recentPing


if (pingID <= 100 && doQuant == false){
      pinger()
}

else if (pingID > 10 && doQuant == false){
      var setPing = []
      setPing[1] = '15'
      setPing[2] = recentPing / 2
      doQuant = true
      firstQuant = true
      console.log('lowPing is ' + lowPing)

      for (var i = 1 ; i < userLimit ; i++){
         if (user[i] != 0){
            for (var x = 0 ; x < 3 ; x++)
            user[i].send(setPing)
          }
      }
}

if (doQuant == false || doQuant == true) {     
      quantMsg[0] = quantID
      quantMsg[1] = '12'
      quantMsg[2] = +new Date()
      quantMsg[3] = null

     if (firstQuant){
            quantMsg[1] = '100'
            firstQuant = false
     }

      if (quantID == 0){
            quantMsg[3] = recentPing
      }

    for (var i = 1 ; i < userLimit ; i++)
{
      if (user[i] != 0)
      {
            for (var x = 0 ; x < 3 ; x++) {
                  user[i].send(quantMsg);
            }
      }
}    

quantID++

}

}

function quantizer(data){
      if (doQuant == false) {
            benchmark[0] = data[2]
            benchmark[1] = new Date()
            benchmark[3] = 0
            prevMsg = data[2]
      }


else {
      console.log('ID: ' + data[0])
      console.log('recent ping: ' + benchmark[4])

      benchmark[2] = new Date()

      var benchDiff = benchmark[2] - benchmark[1]
      var realDiff = data[2] - benchmark[0]
      var variance = benchDiff - realDiff
      console.log('receiving side: ' + benchDiff)
      console.log('sending side: ' + realDiff)
      console.log('sending - receiving: ' + variance)
      console.log('')

      if (variance < 30){
            var delayed = 30 - variance
      setTimeout(function(){
      triggerSample(0, hardNote)
      }, delayed)
      }

      else
      triggerSample(0, hardNote)
}
      prevMsg = data[2]
}

function firstPinger() {
      pingMsg[1] = 13
      pingMsg[2] = '0'
var x = 0

while (x < 20) {

      startTime[x] = new Date() ;
      pingMsg[0] = x
      for (var i = 1 ; i < userLimit ; i++)
      {
            if (user[i] != 0)
                  user[i].send(pingMsg);
      }
      x++

}  
console.log('<br>')
}

