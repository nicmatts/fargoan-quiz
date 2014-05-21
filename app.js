
$(document).ready(function(){
	$('input:radio').on('change',function(){
		var $windchill = Number($("input[name=windchill]:checked").val());
		var $flood= Number($("input[name=flood]:checked").val());
		var $lakes = Number($("input[name=lakes]:checked").val());
		var $weekend = Number($("input[name=weekend]:checked").val());

		var $total_score = $windchill + $flood + $lakes + $weekend;
		if ($total_score > 0) {
			alert($total_score);
		}
  });

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
		$(".answer").show(1000);
	});
});


