// Hamburger button
var hamburger = document.querySelector("#hamburger");
var nav_ul = document.querySelector("ul");
hamburger.addEventListener("click", () => {
    nav_ul.classList.toggle("active");
});

// Array of all buttons
var buttons = document.querySelectorAll(".burger");
var images = document.querySelectorAll("#section2 img");
var currentIndex = 2; // Index for the initially visible image (image3)

// Add event listeners to the buttons
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Remove 'glow' class from all buttons
        buttons.forEach(btn => btn.classList.remove("glow"));

        // Add 'glow' class to the clicked button
        button.classList.add("glow");

        // Hide the currently visible image with slide-down animation
        images[currentIndex].classList.remove("visible");
        images[currentIndex].classList.add("sliding-down");

        // After the slide-down animation is complete, hide the image
        setTimeout(() => {
            images[currentIndex].classList.remove("sliding-down");
            images[currentIndex].classList.add("hidden");

            // Show the new image with slide-up animation
            images[index].classList.remove("hidden");
            images[index].classList.add("visible");

            // Update the current index
            currentIndex = index;
        }, 500); // The duration of the slide-down animation should match the CSS animation duration
    });
});

// Set initial states
buttons[currentIndex].classList.add("glow");
images[currentIndex].classList.add("visible");
