document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById("yes");
    const element2 = document.getElementById("no");
    const element3 = document.getElementById("catGif");
    element.addEventListener("mouseover", () => {
    // Code to execute when the mouse enters the element
        element3.src="res/yes.gif"
    });
    element2.addEventListener("mouseover", () => {
        // Code to execute when the mouse enters the element
        element3.src="res/no.gif"
    });
});