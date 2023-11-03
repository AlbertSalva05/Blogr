$(function(){
	// declare variables
	$(".menuList > li  a").click(function(e){
		e.preventDefault();
		// toggle class active on trigger
		$(this).toggleClass("dropdown_active");
		// displaying of menuDropdown
		$(this).next().slideToggle(600);
	});

	// displaying of fixed header navigation
	$(window).on('load resize scroll', function(){
		const header =  $('.headerArea');
		const headerHeight = header.height() + 33;
		if (window.scrollY > headerHeight) {
			header.addClass("show-bg");
		} else {
			header.removeClass("show-bg");
		}
	});

	// trigger of menu button
	$(".menuBtn").on("click", function() {
		$(".navArea").toggleClass("active");
		$(this).toggleClass("open");

		// switching of SP menu btn images
		if($(".navArea").hasClass("active")) {
			$(".menuBtn img").attr("src","images/icon-close.svg");
		} else {
			$(".menuBtn img").attr("src","images/icon-hamburger.svg");
		}
	});
});
