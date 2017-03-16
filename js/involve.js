$(document).ready(function(){

	$(".modal_wrapper1").click(function(e){
		if(e.target.className=="modal_wrapper1"){
			$("body").removeClass("modal1-on");
		}
	});
	$(".modal_wrapper2").click(function(e){
		if(e.target.className=="modal_wrapper2"){
			$("body").removeClass("modal2-on");
		}
	});
	$(".modal_wrapper3").click(function(e){
		if(e.target.className=="modal_wrapper3"){
			$("body").removeClass("modal3-on");
		}
	});


	$(".activate_modal1").click(function(e){
		e.preventDefault();
		console.log(e);
		$("body").addClass("modal1-on");
	});
	$(".activate_modal2").click(function(e){
		e.preventDefault();
		console.log(e);
		$("body").addClass("modal2-on");
	});
	$(".activate_modal3").click(function(e){
		e.preventDefault();
		console.log(e);
		$("body").addClass("modal3-on");
	});
	
	$(".close").click(function(e){
		e.preventDefault();
		$("body").removeClass("modal1-on");
		$("body").removeClass("modal2-on");
		$("body").removeClass("modal3-on");
	});	
		
});