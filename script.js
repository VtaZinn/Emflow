$('.menu a[href^="#"]').on('click', function(e) {
    console.log('oi');
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - 100
	}, 500);
});

window.addEventListener("load", intro);
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = Array.from(document.getElementsByClassName("project-reveal"))
	reveals.push(document.getElementsByClassName("contact-icon")[0])

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

function intro() {
	const revealIntro = document.getElementsByClassName("reveal-intro")[0]
	const waveBg = document.getElementsByClassName("wave")[0]
	const about = document.getElementsByClassName("about")[0]

	revealIntro.classList.add("active")
	waveBg.classList.add("active")

	setInterval(() => about.classList.add("active"), 1000)
}
