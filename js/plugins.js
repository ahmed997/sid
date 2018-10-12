$(document).ready(function () {
	$(".nav div").on("click", function () {
		$(".nav div").removeClass("nav-active");
		$(this).addClass("nav-active");
	});
	$(".offender .box").on("click", function () {
		$(".offender .box").removeClass("bg-orange");
		$(this).addClass("bg-orange");
	});

	$(".offender .box").on("click", function () {
		$(".offender .box").find("*").removeClass("color-white");
		$(this).find("*").addClass("color-white");
	});
});