function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
	document.getElementById("headerBackdrop").classList.toggle("_active");
  }
  

  function downloadCV() {
	var cvUrl = "cv/CV_Pavlenko.pdf";
	var link = document.createElement("a");
	link.href = cvUrl;
	link.download = "CV_Pavlenko.pdf";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			window.scrollTo({
				top: target.offsetTop,
				behavior: "smooth",
			});
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate");
				observer.unobserve(entry.target);
			}
		});
	});

	const elements = document.querySelectorAll(".slide-in-blurred-bottom");
	elements.forEach((element) => {
		observer.observe(element);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll(".anim");

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.1 }
	);

	sections.forEach((section) => {
		observer.observe(section);
	});
});

//COPYRIGHT
document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#copyright-year").textContent =
		new Date().getFullYear();
});

//HEADER SCROLL
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const isMobile = window.innerWidth <= 995;

	if (isMobile) {
		return;
	}

	if (scrollTop > lastScrollTop) {
		header.classList.add("hidden");
	} else {
		header.classList.remove("hidden");
	}

	lastScrollTop = scrollTop;
});

// AOS

AOS.init({
    duration: 1000, 
    once: false,    
    mirror: true,   
  });