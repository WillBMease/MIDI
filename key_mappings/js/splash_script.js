//main js for splash page

//keyboard script
function triggerAudio(key) {
	var notes = [];
	var noteWrap = $('.audioBin li');
	notes = noteWrap.find('audio');
	var delay = $('.latency-test.active').data('latency');
	setTimeout(function(){
		notes[key].currentTime = 0;
		notes[key].play();
	}, delay);
}
function keyMap() {
  $(window).on('keypress',function(e){
	    var pressed = e.which;
	    pressed = pressed - 49;
	    var keys = $('.whiteKey');
	    //keys.removeClass('pressed');
	    keys.each(function(){
	      key = $(this).data('key');
	      key = key - 1;
	      if (key == pressed) {
  	      $(this).addClass('pressed');
  	    }
	    });
	    triggerAudio(pressed);
	});
	$(window).keyup(function(){
	  $('.whiteKey').removeClass('pressed');
	});
}

$(document).ready(function(){
	keyMap();
	
	//jsPlumb init
	jsPlumb.setContainer("plumbing");
	var keyboard = $('.keyAnchor');
	var buttons = [$('#plumbing').find('button')];
	var button = buttons[0];
	var plumbConfig = {
		source:keyboard,
		target: button.find('.cableJack'),
		cssClass:"cable",
		endpoint:[ "Rectangle", {
	      cssClass:"cableTip",
	      width:25,
	      height:10
	  	}],
	  	connector: [ "StateMachine", {
	  		margin:0,
	  		curviness:30,
	  		proximityLimit:20
	  	}]

	};
	var connection = jsPlumb.connect(plumbConfig);
	$('#plumbing').find('button').each(function(e){
		$(this).click(function(){
		  $(window).unbind();
		  $('.active').removeClass('active');
		  $(this).addClass('active');
			plumbConfig.target = $(this).find('.cableJack');
			jsPlumb.detach(connection);
			connection = jsPlumb.connect(plumbConfig);
			keyMap();
		});
	});
	$(window).resize(function(){
      setTimeout(jsPlumb.repaintEverything(),500)
  });
  
  
	var adminemail = "beta.json";
	var scrollwrap = $('.scrollWrap');
	var scrollbox = $('.scrollPane');
	var paneheight = $(window).height();
	var trigger = paneheight;


	function scrollanim() {
		var context = scrollbox;
		var distance1 = $(context[0]).offset().top;
		var distance2 = $(context[1]).offset().top;
		//var distance3 = $(context[2]).offset().top;
		//var distance4 = $(context[3]).offset().top;
		
		if (distance1 <= trigger && distance1 >= -trigger) {
			//scrollwrap.removeClass('blue purple orange').addClass('aqua');
			//$('.active-page').removeClass();
			//$('#splash-home').addClass('active-page');
			//$(context[0]).addClass('fixed');
			//$(context[1],context[2],context[3]).removeClass('fixed','absolute');
			//$(context[0]).addClass('absolute');
			//$(context[3]).removeClass('absolute');
			$(context[1]).css('top',distance1);
		}
		// if (distance2 <= trigger && distance2 >= -trigger) {
		// 	// scrollwrap.removeClass('purple aqua orange').addClass('blue');
		// 	// $('.active-page').removeClass();
		// 	// $('#splash-jam').addClass('active-page');
		// 	//$(context[1]).addClass('fixed');
		// 	//$(context[0],context[2],context[3]).removeClass('fixed','absolute');
		// 	//$(context[1]).addClass('absolute');
		// 	//$(context[3]).removeClass('absolute');
		// 	$(context[2]).css('top',distance2+distance1);
		// }
		// if (distance3 <= trigger && distance3 >= -trigger) {
		// if (distance3 == 0 ) {
		// 	// scrollwrap.removeClass('blue orange aqua').addClass('purple');
		// 	// $('.active-page').removeClass();
		// 	// $('#splash-connect').addClass('active-page');
		// 	//$(context[2]).addClass('fixed');
		// 	//$(context[0],context[1],context[3]).removeClass('fixed','absolute');
		// 	//$(context[2]).addClass('absolute');
		// 	//$(context[3]).removeClass('absolute');
		// 	$(context[3]).css('top',0);
		// }
		// if (distance4 <= trigger && distance4 >= -trigger) {
		// 	// scrollwrap.removeClass('blue purple aqua').addClass('orange');
		// 	// $('.active-page').removeClass();
		// 	// $('#splash-beta').addClass('active-page');
		// 	//$(context[3]).addClass('fixed');
		// 	//$(context[0],context[1],context[2]).removeClass('fixed','absolute');
		// 	//$(context[3]).addClass('absolute');
		// 	//$(context[3]).css('top',distance4+distance3+distance2+distance1);
		// }
	}


	// $(window).scroll(function(){
	// 	scrollanim();
	// });
	var stellarConfig = {
		responsive:true,
		scrollProperty:'position',
		//verticalOffset:trigger,
		horizontalScrolling: false,
		hideDistantElements:false
	};
	//$.stellar(stellarConfig);
	// $('#pane-1').stellar(stellarConfig);
	// $('#pane-2').stellar(stellarConfig);
	//$('#pane-3').stellar(stellarConfig);
	//$('#pane-4').stellar(stellarConfig);
	//beta signup function
	$('form.betaForm input').keypress(function(){
	  $(window).unbind();
	});
	$('form.betaForm').submit(function(e){
		e.preventDefault();
		var betadata = $(this).serialize();
		//console.log(betadata);
		$.ajax({
			type: 'POST',
			context: $('form.betaForm'),
			url: 'php/signup2.php',
			data: betadata,
			success: function(){
				$(this).find('input').val('');
				var modal = $('.jvModal');
				var overlay = $('.overlay');
				overlay.show();
				modal.fadeIn();
				overlay.click(function(){
					modal.hide();
					overlay.hide();
				});
				$('form.betaForm button').text('Sweet!');
				$('button#jellyvibes').addClass('active');
				plumbConfig.target = $('button#jellyvibes').find('.cableJack');
			  jsPlumb.detach(connection);
			  connection = jsPlumb.connect(plumbConfig);
				keyMap();
			},
			error: function(e){
				$(this).find('.statusMessage')
				.html('Oops! There was some error with your signup. Please check your info and try again.')
				.fadeIn(300);
		  }
		});
		
	});//end betaform submit


	
	$('.open-modal').on('click',function(e){
		//e.preventDefault;
		// var modal = $('.jvModal');
		// var overlay = $('.overlay');
		// overlay.show();
		// modal.fadeIn();
		// overlay.click(function(){
		// 	modal.hide();
		// 	overlay.hide();
		// });
	});


}); //end document ready


