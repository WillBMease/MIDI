var flag = 0;
function validateNonEmpty(inputField, helptext)
{
    if(inputField.value.length == 0) {
	
		if(helptext != null) {
			helptext.innerHTML = "You must fill in all of the fields.";
		}
		return false;
	}	
	else {
		// The data is okay
		if(helptext != null){
			helptext.innerHTML = "";
		}
		return true;
	}
}

function validateRegEx(regex, inputString, helptext, helpMessage){

	// See if the inputStr data validates ok
	if(!regex.test(inputString)){
		// validation fails
		if(helptext != null)
		{
			helptext.innerHTML = helpMessage;
		}
		return false;
	}
	else {
		// validation success
		if(helptext != null)
		{
			helptext.innerHTML = "";
		}
		return true;
	}
}

function validateEmail(inputField,helptext)
{

	if(!validateNonEmpty(inputField,helptext))
		return false;
		
	return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/, inputField.value, helptext, "please enter valid email");
}

function validateField(){
    
    var errorDiv = document.getElementById("error");
    var a=document.forms["myform"]["email"].value;
    
if ((a===null || a==="")){
      
      
      errorDiv.innerHTML = "You must enter an Email Id.";
  return false;
  }
    
    
}

function validatePhone(inputField, helptext)
{
	if(!validateNonEmpty(inputField, helptext))
		return false;
		
	return validateRegEx(/^(\d{10}|\d{3}-\d{3}-?\d{4}|\(\d{3}\)\d{3}-?\d{4})$/, inputField.value, helptext, "please enter an cell(for example, xxx-xxx-xxxx)");

}

// updated 6/10 by Max
function validateAge(inputField, helptext)
{
    if(!validateNonEmpty(inputField, helptext))
		return false;
		
	return validateRegEx(/^\d{1,2}$/, inputField.value, helptext, "invalid age");
}
		
function validatePassword(inputField, helptext) {
        return validateRegEx(/^\w*(?=\w*\d)(?=\w*[a-z])(?=\w*[A-Z])\w*$/, inputField.value, helptext, "New Password must contain atleast a number, a lower case and a upper case letter");

       // "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]/i).{6,20})"
}

// Begin: Function that resets the password
function checkPassword(inputField, helptext){
        var errorDiv = document.getElementById("error");
        var errorDiv2 = document.getElementById("checkerror");

       var a=document.forms["myform"]["password1"].value;
        var b=document.forms["myform"]["password2"].value;
        var c=document.forms["myform"]["oldpassword"].value;
        var d=document.forms["myform"]["email"].value;
        
  var val1 = document.getElementById('password1').value;
    var val2 = document.getElementById('password2').value;
  
        
        if ((a===null || a==="") && (b===null || b==="") && (c===null || c==="") && (d===null || d===""))
  {
  errorDiv.innerHTML = "You must fill in all of the fields.";
  return false;
  }
  if ((a===null || a==="")){
      
      errorDiv.innerHTML = "You must fill in all of the fields.";
  return false;
      
  }
  
  if ((b===null || b==="")){
      
      
      errorDiv.innerHTML = "You must fill in all of the fields.";
  return false;
  }
  if ((c===null || c==="")){
      errorDiv.innerHTML = "You must fill in all of the fields.";
  return false;
  }
  if ((d===null || d==="")){
      
      errorDiv.innerHTML = "You must fill in all of the fields.";
  return false;
  }
  
  if(!validateRegEx(/^\w*(?=\w*\d)(?=\w*[a-z])(?=\w*[A-Z])\w*$/, a, helptext, " New Password must contain atleast a number, a lower case and a upper case letter.")){
    return false;
    
  }
         if(val1 != val2){
        
        errorDiv.innerHTML ="New Password and the Retyped Password must be same.";
        return false;
    }
    
  if(document.getElementById("check").checked == false){
            errorDiv2.innerHTML = "Please check the box before submitting the form.";
            return false;

      
  }
  
}
// End: Function that resets the password

function openwin()
{
myWindow=window.open('','','width=200,height=100,resizable=no,scrollbars=no');
myWindow.document.write("<p>This is 'myWindow'</p>");
myWindow.focus();
}
  
function placeSignup(form) {
	var errorDiv = document.getElementById("statusMessage");
	//if(validateAge(form["age"], errorDiv) &&
	  // validateEmail(form["email"],errorDiv) &&
	  // validateNonEmpty(form["userfirstname"], errorDiv) &&
          // validateNonEmpty(form["userlastname"], errorDiv) &&
	  // validateSelectBox(form["instrument"]) &&
          // validateNonEmpty(form["searchTextField"])) {
            if(1){
		   // submit the order to the server
		  // form.setAttribute("action", "http://jellyvibes.com/signup2.php");
		  // form.submit();
    var url="http://www.jellyvibes.com/php/signup2.php";
	//window.alert('Everything Validated!');
	if(window.XMLHttpRequest){
	 reqobject= new XMLHttpRequest();
	 //window.alert('Object Created!');
	}
	if(reqobject){
     reqobject.onreadystatechange=callback_Signup;
	 var em=document.getElementById("beta-email").value;
         var nf="";
         var nl="";
	 var ag="";
	 //var ge=form["genre"].value;
	 var ins=document.getElementById("beta-instrument").value;
	 var loc="";
        // var sc=document.getElementById("beta-university").value;
	 var parameters="email="+em+"&instrument="+ins+"&location="+loc;//+"&school="+sc;
	 //window.alert('parameters = ' + parameters);
	 reqobject.open("POST",url,true);
	 reqobject.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	 reqobject.send(parameters);
	}
   /* var resetTimeout;
     button= document.getElementById("btnSignup");
	 if( typeof button.getAttribute( 'data-loading' ) === 'string' ) {
			button.removeAttribute( 'data-loading' );
		}
		else {
			button.setAttribute( 'data-loading', '' );
		}

		clearTimeout( resetTimeout );
		resetTimeout = setTimeout( function() {
			button.removeAttribute( 'data-loading' );			
		}, 2000 );*/
     
	} else {
		   
		   errorDiv.innerHTML = "You must fill in all of the fields.";
	  }
	
}


function callback_Signup()
   {
    if(reqobject.readyState==4)
	 {
	  if(reqobject.status==200)
	  {
	   if(reqobject.responseText =="Success")
	    {
		//window.alert('PHP  Returned success!');
		// var invisible=document.getElementById("replaced");
		// invisible.style.visibility="hidden";
		// var visible=document.getElementById("replacerr");
       //  visible.style.marginTop="0px";
       //  visible.style.paddingTop="20px";
       //  visible.style.fontFamily='Chelsea Market';
       //  visible.style.fontSize="12px";
       //  this.h3 = document.createElement("h3");
       //  this.h3.innerHTML = "Thanks for signing up!, You will receive an email shortly";
       //  this.h3.style.marginLeft = "10px";
       // this.h3.style.marginRight = "10px";
       //  visible.appendChild(this.h3);
       //  this.img = document.createElement("img");
       //  this.img.src = "./photos/vanhalen.png";
       //  this.img.width=180;
      //   this.img.height=300;
      //   visible.appendChild(this.img);
	//	 var insidetext=document.getElementById("insidetext");
	//	 insidetext.innerHTML="CONGRATULATIONS.......Welcome to JellyVibes !!!! \n We have received your beta access request and will get back to you as soon as we are ready....!!!!";
		}
		else{
			window.alert("Error with response =  "+reqobject.responseText);
		}
	  }
     }
   }	 
		 
	   
function validateSelectBox(inputField){
	
	if(inputField.selectedIndex == 0)
		return false;
	else
		return true;
	
}

function change()
{
    
    if (flag == 0)
    {
        flag = 1;
        document.getElementById('replaced').style.visibility= 'visible'
        
    }
}
