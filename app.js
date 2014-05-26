
$(document).ready(function(){
	//initialize scores
	var windchill = 0;
	var flood = 0;
	var lakes = 0;
	var weekend = 0;

	// advance questions on button clicks
	$("#start-button").click(function(){
		$("#start-button").hide();
		$("#windchill").show(1000);
		$('.progress').css({"width": "20px"});
	});

	$("#windchill-button").click(function(){
		$("#windchill").hide();
		$("#flood").show(1000);
		$('.progress').css("width", "40px");
		windchill = Number($("input[name=windchill]:checked").val());
		return windchill;
	});

	$("#flood-button").click(function(){
		$("#flood").hide();
		$("#lakes").show(1000);
		$('.progress').css("width", "60px");
		flood= Number($("input[name=flood]:checked").val());
		return flood;
	});

	$("#lakes-button").click(function(){
		$("#lakes").hide();
		$("#weekend").show(1000);
		$('.progress').css("width", "80px");
		lakes = Number($("input[name=lakes]:checked").val());
		return lakes;
	});

	$("#submit-button").click(function(){
		$("#weekend").hide();
		weekend = Number($("input[name=weekend]:checked").val());

		//calculate total of answers
		var totalScore = windchill + flood + lakes + weekend;

		if (totalScore <= 6){
			$("#fargoan").show();
		} else if (totalScore >= 6 && totalScore <= 11 ){
			$('#transplant').show();
		} else if (totalScore == 12){
			$('#marge').show();
		} else {
			$('#not-fargoan').show();
		}

		$("#startover").show();
	});

	$('#reload').click(function() {
		location.reload();
	});
});


