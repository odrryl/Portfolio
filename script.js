function navToggle() {
    document.getElementById("headerUl").classList.toggle("_active");
    document.getElementById("headerBackdrop").classList.toggle("_active");
  }

  function downloadCV() {
    // URL до файлу CV
    var cvUrl = "/img/CV_Pavlenko.pdf";
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