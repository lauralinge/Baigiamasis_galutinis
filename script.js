// Tabs

let tabHeaders = document.querySelectorAll(".tabs .tab-left > div");
let tabContents = document.querySelectorAll(".tabs .tab-middle > div");

for (let i = 0; i < tabHeaders.length; i++) {
  tabHeaders[i].addEventListener("click", function () {
    document
      .querySelector(".tabs .tab-left > .active")
      .classList.remove("active");
    tabHeaders[i].classList.add("active");
    document
      .querySelector(".tabs .tab-middle > .active")
      .classList.remove("active");
    tabContents[i].classList.add("active");
  })
}

// BURGER
  const burger = document.getElementById("burger");
  const links = document.querySelector(".menu");
  const anchors = links.querySelectorAll("a");
  
  burger.addEventListener("click", function () {
    this.classList.toggle("rotate");
    links.classList.toggle("open");
  });
  
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      burger.classList.toggle("rotate");
    }
  });
  
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function () {
    let current = "";
    for (var section of sections) {
      if (window.pageYOffset >= section.offsetTop - 280) {
        current = section.getAttribute("id");
      }
    }
  
    for (var anchor of anchors) {
      anchor.classList.remove("selected");
      if (anchor.getAttribute("href") === "#" + current) {
        anchor.classList.add("selected");
      }
    }
  });


