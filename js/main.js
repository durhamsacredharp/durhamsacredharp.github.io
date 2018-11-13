"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const sched = later.parse.recur().on(7).dayOfWeek().on(2, 4)
		.dayOfWeekCount();
	const nextThree = later.schedule(sched).next(3);
	const options = {
		month: "long",
		day: "numeric",
	};
	const firstNext = (nextThree[0].toLocaleDateString("en-GB", options));
	const secondNext = (nextThree[1].toLocaleDateString("en-GB", options));
	const thirdNext = (nextThree[2].toLocaleDateString("en-GB", options));
	const upcomingsingings = `<p>Our next singings are on: <span class="font-italic font-weight-bold"><span id="next-singing">Saturday ${firstNext}</span><span class="font-weight-normal">, </span><span id="second-next-singing"> ${secondNext}</span><span class="font-weight-normal">, and </span><span id="third-next-singing"> ${thirdNext}</span><span class="font-weight-normal">.</span></span></p>`;
	document.getElementById("upcoming-singings").innerHTML = upcomingsingings;
});

// Hides menu when clicked
document.addEventListener("DOMContentLoaded", () => {
	const nav_items = document.getElementsByClassName("nav-item");
	const navbarButton = document.getElementsByClassName("navbar-toggler")[0];
	const navbarToggler = document.getElementById("navbarToggler");
	const main = document.getElementById("main");

	Array.from(nav_items).forEach((nav_item) => {
		nav_item.addEventListener("click", () => {
			if (navbarToggler.classList.contains("show")) {
				navbarButton.click();
			}
		});
	});

	main.addEventListener("click", () => {
		if (navbarToggler.classList.contains("show")) {
			navbarButton.click();
		}
	});
});

window.addEventListener("hashchange", () => {
	const navbarHeight = document.getElementById("navbar-row").offsetHeight + 10;
	scrollBy(0, -navbarHeight);
});
