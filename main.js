// Hamburger Menu 

const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = `<img src="images/icon-close.svg" alt="menu icon">`;
const closeIcon = `<img src="images/icon-hamburger.svg" alt="menu icon">`;
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	if (hamburger.innerHTML === hamburgerIcon) {
		hamburger.innerHTML = closeIcon;
	} else {
		hamburger.innerHTML = hamburgerIcon;
	}
	navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamburger.innerHTML = closeIcon;
	navMenu.classList.remove("active");
}

// Main Features

const context = {
  features: [
    {
      name: 'Snappy Process',
      description: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
      image: 'images/icon-snappy-process.svg',
      alt: 'lightning bolt icon',
      num: 1
    },
    {
      name: 'Affordable Prices',
      description: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
      image: 'images/icon-affordable-prices.svg',
      alt: 'dollar sign icon',
      num: 2
    },
    {
      name: 'People First',
      description: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
      image: 'images/icon-people-first.svg',
      alt: 'silhouette of a person icon',
      num: 3
    }
  ]
};

// Handlebars
const source = document.getElementById("templateHB").innerHTML;
const template = Handlebars.compile(source);
const compiledHtml = template(context);
document.getElementById("features").innerHTML = compiledHtml;