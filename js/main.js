window.onload = function () {
    "use strict";

    // 2nd & 4th Saturdays of the month
    let sched = later.parse.recur().on(7).dayOfWeek().on(2, 4).dayOfWeekCount();

    // next 3 occurences
    let nextThree = later.schedule(sched).next(3);

    // options for DateString formatting
    let options = {
        month: 'long',
        day: 'numeric'
    };

    let firstNext = (nextThree[0].toLocaleDateString("en-GB", options));
    let secondNext = (nextThree[1].toLocaleDateString("en-GB", options));
    let thirdNext = (nextThree[2].toLocaleDateString("en-GB", options));

    let upcomingsingings =
        '<p>Our next singings are on: <span class="font-italic font-weight-bold"><span id="next-singing">' +
        firstNext + '</span><span class="font-weight-normal">, </span><span id="second-next-singing">' +
        secondNext +
        '</span><span class="font-weight-normal">, and </span><span id="third-next-singing">' + thirdNext +
        '</span><span class="font-weight-normal">.</span></span></p>';

    document.getElementById('upcoming-singings').innerHTML = upcomingsingings;
};
