var pingActive = false
var refreshPing
var pingMsg = []
var pingID = 0
var pingFirst = 0
var benchmark = []
      for (int i = 1 ; i < userLimit ; i++){
            benchmark[i] = []
      }
var prevMsg = []
var increment = false
var firstPing = true
var recentPing = []
      for (int i = 1 ; i < userLimit ; i++){
            recentPing[i] = 250
      }
var doQuant = false
var firstQuant = false
var lowPing = []
      for (int i = 1 ; i < userLimit ; i++){
            lowPing[i] = 250
      }

pingMsg[0] = pingID ;
pingMsg[1] = '0' ;

var quantID = 0
var quantMsg = []

      for (int i = 1 ; i < userLimit ; i++){
            quantMsg[i] = []
            quantMsg[i][0] = quantID
            quantMsg[i][1] = null
            quantMsg[i][2] = null
            quantMsg[i][3] = null
            quantMsg[i][4] = null
      }

      var hardNote = []
      hardNote[0] = 0
      hardNote[1] = 0
      hardNote[2] = 80

function Ping(){
	

if (!pingActive) {
      pingActive = true
      refreshPing = setInterval(quantTest, 500)
}

else if (pingActive || quantID > 15) {
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
                  user[i].send(pingMsg)
            }
      }
}  

pingID++

}

function quantTest(){

for (int i = 1 ; i < userLimit ; i++){
if (recentPing[i] < lowPing[i])
      lowPing[i] = recentPing[i]
}


if (pingID <= 12 && doQuant == false){
      pinger()
}

else if (pingID > 10 && doQuant == false){
      var setPing = []
      for (int i = 1 ; i < userLimit ; i++){
            setPing[i] = []
            setPing[i][1] = '15'
            setPing[i][2] = recentPing[i] / 2
      }
      doQuant = true
      firstQuant = true

      for (int i = 1 ; i < userLimit ; i++)
            console.log('lowPing is ' + lowPing[i])

      for (var i = 1 ; i < userLimit ; i++){
         if (user[i] != 0){
            for (var x = 0 ; x < 3 ; x++)
            user[i].send(setPing[i])
          }
      }

}

if (doQuant == false || doQuant == true) {     
      for (int i = 1 ; i < userLimit ; i++){
      quantMsg[i][0] = quantID
      quantMsg[i][1] = '12'
      quantMsg[i][3] = null
}

     if (firstQuant){
      for (int i = 1 ; i < userLimit ; i++){
            quantMsg[i][1] = '100'
      }
            firstQuant = false
     }

      if (quantID == 0){
            for (int i = 1 ; i < userLimit ; i++)
            quantMsg[3] = recentPing[i]
      }

    for (var i = 1 ; i < userLimit ; i++)
{
      if (user[i] != 0)
      {
            quantMsg[i][2] = +new Date()
            for (var x = 0 ; x < 3 ; x++) {
                  user[i].send(quantMsg);
            }
      }
}    

quantID++

}

}

function quantizer(index, data){
      if (doQuant == false) {
            benchmark[index][0] = data[2]
            benchmark[index][1] = new Date()
            benchmark[index][3] = 0
            prevMsg[index] = data[2]
      }


else {
      console.log('ID: ' + data[0])
      console.log('recent ping: ' + benchmark[index][4])

      benchmark[index][2] = new Date()

      var benchDiff = benchmark[index][2] - benchmark[index][1]
      var realDiff = data[7] - benchmark[index][0]
      var variance = benchDiff - realDiff
      console.log('receiving side: ' + benchDiff)
      console.log('sending side: ' + realDiff)
      console.log('sending - receiving: ' + variance)
      console.log('')

      if (variance < 1000){
            var delayed = 1000 - variance
      setTimeout(function(){
      triggerSample(index, data)
            // setTimeout(function(){
            //       triggerSample(1, data)
            // }, 40)
      }, delayed)
      }

      else
      triggerSample(index, data)
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

