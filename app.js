
$(document).ready(function(){
	$("#start-button").click(function(){
		$("#windchill").show(1000);
	});

	$("#windchill-button").click(function(){
		$("#windchill").hide();
		$("#flood").show(1000);
	});

	$("#flood-button").click(function(){
		$("#flood").hide();
		$("#weekend").show(1000);
	});
	$("#submit-button").click(function(){
		$("#weekend").hide();
		$(".answer").show(1000);
	});
});


