
$(document).ready(function(){
	//var totalScore = 0;
	var windchill = 0;
	var flood = 0;
	var lakes = 0;
	var weekend = 0;

	$('button').on('click',function(){
		windchill = Number($("input[name=windchill]:checked").val());
		flood= Number($("input[name=flood]:checked").val());
		lakes = Number($("input[name=lakes]:checked").val());
		weekend = Number($("input[name=weekend]:checked").val());
	});

	var totalScore = windchill + flood + lakes + weekend;

	$("#start-button").click(function(){
		$("#start-button").hide();
		$("#windchill").show(1000);
		$('.progress').css({"width": "20px", "background-color": "blue"});
	});

	$("#windchill-button").click(function(){
		$("#windchill").hide();
		$("#flood").show(1000);
		$('.progress').css("width", "40px");
	});

	$("#flood-button").click(function(){
		$("#flood").hide();
		$("#lakes").show(1000);
		$('.progress').css("width", "60px");
	});

	$("#lakes-button").click(function(){
		$("#lakes").hide();
		$("#weekend").show(1000);
		$('.progress').css("width", "80px");
	});

	$("#submit-button").click(function(){
		$("#weekend").hide();

		if (totalScore <= 6){
			$('#fargoan').show();
		} else if (totalScore >= 6 && totalScore <= 11 ){
			$('#transplant').show();
		} else if (totalScore == 12){
			$('#marge').show();
		} else {
			$('#not-fargoan').show();
		}
		
	});
});


