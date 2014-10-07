var tempCount = 0

function soundcardProbe(){	
		    setReceiverBufferOptions();
			
			addSJEvents();
		    bind();
		    // alert(plugin().soundcardProbe());
		    plugin().soundcardProbe()	
		    plugin().readConfig();
			setTimeout("restartSoundcard()",1000);
		    plugin().getExternalIPAndPort();
		}
		
		function addSJEvents(){
            addEvent(plugin(), 'floatMonitor',
			  function floatMonitor(d1){
				  alert(d1);
			  });          
		   
		    addEvent(plugin(), 'dataMonitor',
			  function dataDisplay(d1,d2,d3,d4,d5,d6){
				  alert(d1+" "+d2+" "+" "+d3+" "+d4+" "+d5+" "+d6);
			  });
			
			/// ANZAHL DER VERFÜGBAREN DEVICES IN INTERFACE ANPASSEN
			addEvent(plugin(), 'setNumberOfOptions', 
		      function setNumberOfOptions(count){	
			      //alert("Devices: "+count);
				  document.sjForm.soundcardInput.options.length = count; 	   
		          document.sjForm.soundcardOutput.options.length = count;
			  });
			  
			/// GEFUNDENE AUDIO DEVICES IN DAS INTERFACE EINSETZEN  
			addEvent(plugin(), 'newSoundcardList', 
		      function insertSoundcardNames(count,name){	   
		          document.sjForm.soundcardInput.options[count].text = name;  
	              document.sjForm.soundcardOutput.options[count].text = name;    
              });
        
		    /// AUS FILE GELESENE WERTE IN DAS INTERFACE EINSETZEN UND SOUNDJACK-WERTE SETZEN
			addEvent(plugin(), 'tellConfig',
			  function applyConfig(inputDevice,outputDevice,bufferSize,channels,localVolume,remoteVolume,codecQuality,networkBufferSize){
			      document.sjForm.soundcardInput.selectedIndex = inputDevice;
				  document.sjForm.soundcardOutput.selectedIndex = outputDevice;
							  
				  for (i=0;i<document.sjForm.soundcardBufferSize.length; i++){
					  if (document.sjForm.soundcardBufferSize.options[i].text == bufferSize){
						  document.sjForm.soundcardBufferSize.selectedIndex = i;
					      break;
					  }
				  }
				  
				  networkPacketChanger();
				  
				  for (i=0;i<document.sjForm.audioChannels.length;i++){ 
				      if (document.sjForm.audioChannels.options[i].text == channels){
					      document.sjForm.audioChannels.selectedIndex = i;
						  break;
					  }
				  } 
				 
				  document.sjForm.localVolume.value = localVolume;
				  document.sjForm.remoteVolume.value = remoteVolume;
				  document.sjForm.codecQuality.selectedIndex = codecQuality;
				  document.sjForm.networkBufferSize.selectedIndex = networkBufferSize-1;
			
			      /// SOUNDJACK-WERTE SETZEN
				  setLocalVolume(localVolume);
		   	      setRemoteVolume(remoteVolume);
			      changeStreamSettings();
			      setReceiverBufferSize();
			  });
			  
			  addEvent(plugin(),'tellLatency',
			      function getLatency(latencyString){
				      document.sjForm.delay.value = latencyString+" ms";
					  document.sjForm.dropout.value = "";
				  });
		    
		      addEvent(plugin(),'tellIP',
		          function getIP(IPString){
				      document.sjForm.localIP.value = "IP="+IPString;
				  });
				  
		      addEvent(plugin(),'tellPort',
			      function getPort(portString){
			           document.sjForm.localPort.value = "Port="+portString;
				  });
		
		      addEvent(plugin(),'tellDropout',
			      function getDropout(dropoutString){
				      document.sjForm.dropout.value = dropoutString;
				  });
				  
			  addEvent(plugin(),'passBufferToScript',
			      function getBufferFromPlugin(bufferAsString,bufferSize){
				      // PROCESS BUFFER HERE
					  // alert(bufferSize);
					  var thismsg = []
					  thismsg[0] = tempCount
					  thismsg[1] = bufferAsString
					// if (tempCount % 100 == 0){
						for (var i = 1 ; i < userLimit ; i++ ){
							if (user[i] != 0){
							user[i].send(thismsg);
							console.log("send to " + user[i].peer);
								}
							}

					tempCount++
				  });
		}
		
		/// NATIVE FUNCTIONS
		function plugin0(){
            return document.getElementById('plugin0');
        }
        plugin = plugin0;
       
	    function addEvent(obj, name, func){
            if (obj.attachEvent) {
                obj.attachEvent("on"+name, func);
            } else {
                obj.addEventListener(name, func, false); 
            }
        }
        
        function load(){
            addEvent(plugin(), 'test', function(){
                alert("Received a test event from the plugin.")
            });
        }
        
		function pluginLoaded() {
            //alert("Plugin loaded!");
        }
        
        function addTestEvent(){
            addEvent(plugin(), 'echo', function(txt,count){
                alert(txt+count);
            });
        }
        
        function testEvent(){
            plugin().testEvent();
        }
        
		
		/// OWN FUNCTIONS
        function pluginValid(){
            if(plugin().valid){
                alert(plugin().echo("The Soundjack plugin seems to be working !"));
            } else {
                alert("The Soundjack Plugin is not working :(");
            }
        }
				
		/// SOUNDKARTE STOPPEN UND STARTEN
		function stopAudioDevice(){	
		  plugin().stopAudioDevice();
		}
		
		/// SOUNDCARD NEU STARTEN / CONFIG SCHREIBEN
		function restartSoundcard(){			
			/// ERST KARTE EVTL. STOPPEN
			stopAudioDevice();
	
			/// SOUNDKARTE STARTEN
		    inputIndex  = document.sjForm.soundcardInput.selectedIndex;
		    outputIndex = document.sjForm.soundcardOutput.selectedIndex;
		  
		    a = document.sjForm.audioChannels.selectedIndex;
		    channels = document.sjForm.audioChannels.options[a].text;
		  
		    a = document.sjForm.soundcardBufferSize.selectedIndex;
		    frameSize = document.sjForm.soundcardBufferSize.options[a].text;
		  
		    bitDepth = 16;
		    sampleRate = 48000; 
		    
		    // alert(plugin().startAudioDevice(inputIndex,outputIndex,channels,frameSize,bitDepth,sampleRate));
		    plugin().startAudioDevice(inputIndex,outputIndex,channels,frameSize,bitDepth,sampleRate)		
		    
			/// PARAMETER IN CONFIG SICHERN
			plugin().writeConfig();
		}
		
		/// NETWORK PACKET GRÖßE AUDIOBUFFER GLEICH SETZEN
		function networkPacketChanger(){
			index = document.sjForm.soundcardBufferSize.selectedIndex;
		    document.sjForm.IP.selectedIndex = index;
		    document.sjForm.IP.selectedIndex;
		}
		
		/// LOOPBACK LAUTSTÄRKE SETZEN
		function setLocalVolume(level){	  
		    plugin().setLocalVolume(level);	
		    plugin().writeConfig();
		}
			
		/// LOOPBACK MUTEN
		function muteLocalSound(){	  
		    plugin().muteLocalSound();	
		}	
		
		/// LOOPBACK UNMUTEN
		function unmuteLocalSound(){	  
		    plugin().unmuteLocalSound();	
		}	
			
		/// AUDIO DEVICE LIST REFRESHEN	
		function refreshAudioDeviceList(){	
		  /// VORHER HIER OPTIONS LÖSCHEN
		  // alert(plugin().soundcardProbe());	
		  plugin().soundcardProbe()
		}
		
		function bind(){
		    //IPAddress = document.sjForm.bindIP.value;
		    IPAddress = "0.0.0.0";
		    Port = "4401";//document.sjForm.bindPort.value;	
		    // alert(plugin().bind(IPAddress,Port));
		    plugin().bind(IPAddress,Port)
		}
		
		function goForExternalIPAndPort(){
		    //alert("HIER OK");
			plugin().getExternalIPAndPort();	
		}
		
		function startNetStream(){
	        IP = document.sjForm.sendIPAddress.value;
		    port = document.sjForm.sendPort.value;
		  
		    alert(plugin().startStream(IP,port,"",""));	
		}
		
		function stopNetStream(){
	      IP = 4;//document.sjForm.sendIPAddress.value;
		  port = document.sjForm.sendPort.value;
		  
		  alert(plugin().stopStream(IP,port));	
		}
		
		function changeStreamSettings(){
		    i = document.sjForm.codecQuality.selectedIndex;
		    plugin().setStreamQuality(i);
		    plugin().writeConfig();
		}
		
		/// RECEIVE SECTION
		function setReceiverBufferOptions(){
		    for (i=0;i<100;i++){
				document.sjForm.networkBufferSize.options[i] = new Option(i+1) //replace 1st option with a new one
			    //document.sjForm.networkBufferSize.options[i].text = i+1;	
			}
		}
		
		function setReceiverBufferSize(){
			buf = document.sjForm.networkBufferSize.selectedIndex;
			plugin().setReceiverBufferSize(buf+1);	
		    plugin().writeConfig();
		}
		
		function setRemoteVolume(level){	  
		  plugin().setRemoteVolume(level);
		  plugin().writeConfig();	
		}
