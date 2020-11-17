$(document).ready(function () {


	$("nav a").click(function () {
		console.log($(this).attr("href"))

		$("html , body").animate({

			scrollTop: $($(this).attr("href")).offset().top

		}, 3000)



	})


	$(window).scroll(function () {

		if ($(this).scrollTop() > 200) {


			$(".top").fadeIn();


		} else {


			$(".top").fadeOut()
		}


	});

	$(".top").click(function () {


		$('html , body').animate({

			scrollTop: 0

		}, 3000)

	});


});


var overlay = document.getElementById("overlay");

window.addEventListener("load",function(){

	overlay.style.display = "none";
})
