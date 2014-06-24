var doc;
var name;


    function tester()
	 {
	   var passwd;
	   name=document.getElementById("name").value;
	   passwd=document.getElementById("password").value;
	   var url="./loginchecker.php";
	   if(window.XMLHttpRequest)
	   {
	    reqobj= new XMLHttpRequest();
       }
	   if(reqobj)
	   {
        reqobj.onreadystatechange=callbackfunc;
	    var parameters="username="+name+"&password="+passwd;
	    reqobj.open("POST",url,true);
	    reqobj.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	    reqobj.send(parameters);
	   }
	}   
	
	function callbackfunc()
   {
    if(reqobj.readyState==4)
	 {
	  if(reqobj.status==200)
	  {
         if(reqobj.responseText=="Reset"){
         alert("Please Reset your Password before login.");
         window.location="./resetpasswordbody.php";}
    else   if(reqobj.responseText=="Success"){
	     delete_record1();
	     window.location="./Jam.html";
	     }
	   else if(reqobj.responseText=="No User")
        {
             alert("You are not registered. Please Sign Up to gain access to JellyVibes.")
        }
        else 
	     alert("Email and Password do not match");
	  }
	 }
   }

function delete_record1(){
			var url = "/phpscripts/videoscripts/start_video.php";
			var param = "userid="+name+"&reqType=loginOff";
			make_Ajax_call(url,param);
		}
		
function make_Ajax_call(url,parameters){

	       if(window.XMLHttpRequest)
		   	{
			   	reqobj= new XMLHttpRequest();
			   	}
		   else {// code for IE6, IE5
			reqobj=new ActiveXObject("Microsoft.XMLHTTP");
			}
			
		   if(reqobj){
				 reqobj.onreadystatechange=callback;
				 reqobj.open("POST",url,false);
				 reqobj.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
				 reqobj.send(parameters);
			}
       }

function callback()
			{
				if(reqobj.readyState==4)
				{
					if(reqobj.status==200)
					{	
						response = reqobj.responseText;

					}
	            }
			}