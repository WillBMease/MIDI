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
      refreshPing = setInterval(quantTest, 1000)
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
      quantMsg[0] = quantID
      quantMsg[1] = '12'
      quantMsg[2] = +new Date()

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

if (recentPing > 50)
pinger()

}

function quantizer(data){
      if (data[0] == 0) {
            benchmark[0] = data[2]
            benchmark[1] = new Date()
            benchmark[3] = 0
            prevMsg = data[2]
      }


else {
      console.log('ID: ' + data[0])

      // benchmark[2] = new Date()
      // var benchDiff = benchmark[2] - benchmark[1] - benchmark[3]
      // benchmark[3] += benchDiff
      // var benchSt = benchDiff.toString()

      // console.log(benchmark[3])

      // console.log("bench diff is " + benchSt)

      // var diff = data[2] - prevMsg
      // var diffSt = diff.toString()

      // console.log("difference is " + diffSt)

      // var latVar = benchDiff - diff
      // var latSt = latVar.toString()

      // console.log ('variance is ' + latSt)

      // console.log('')

      benchmark[2] = new Date()

      var benchDiff = benchmark[2] - benchmark[1]
      var realDiff = data[2] - benchmark[0]
      var comparison = realDiff - benchDiff
      console.log('receiving side: ' + benchDiff)
      console.log('sending side: ' + realDiff)
      console.log('sending - receiving: ' + comparison)
      console.log('')

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

