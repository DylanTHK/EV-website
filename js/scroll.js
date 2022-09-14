// section offsetTop == window.pageYOffset

// reset to last value of pageYOffset every iteration
document.lastScrollPosition = 0;

document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener("scroll", () => {
    // difference between last position and current determines the direction
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? "down" : "up";
    // obtains all the sections in the DOM (converts to array)
    const sections = [...document.querySelectorAll("section")];

    if (document.onWayTo === null) {
        const destIndex = direction === "up" ? document.lastCentered - 1 : document.lastCentered + 1;
        if (destIndex >= 0 && destIndex < sections.length) {
            console.log(`Destination: ${destIndex}`);
            console.log(`section: ${sections[destIndex].offsetTop}`);
            document.onWayTo = destIndex;
            // scrolls to selected x and y coordinates
            window.scroll(0, sections[destIndex].offsetTop);
        }
    }

    sections.forEach((section, index) => {
        if (window.pageYOffset === section.offsetTop) {
            console.log(index);
            document.lastCentered = index;
            if (document.onWayTo === index) {
                document.onWayTo = null;
            }
        }
    })

    document.lastScrollPosition = window.pageYOffset;
})