// =========================
// FARMER SUPPORTS - JAVASCRIPT
// =========================


// LOGIN BUTTON
const loginButtons = document.querySelectorAll(".login-box button");

loginButtons[0].addEventListener("click", function () {

    const email = document.querySelector(
        '.login-box input[type="text"]'
    ).value;

    const password = document.querySelector(
        '.login-box input[type="password"]'
    ).value;

    if (email === "" || password === "") {
        alert("Please enter your Mobile Number/Email and Password.");
        return;
    }

    alert("Login successful! Welcome to Farmer Supports 🌿");
});


// REGISTER BUTTONS
const registerButtons = document.querySelectorAll(
    ".nav-buttons button, .login-box a"
);

registerButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const text = button.innerText.toLowerCase();

        if (text.includes("register")) {
            event.preventDefault();

            alert(
                "Registration page will open here.\n\n" +
                "Farmer registration coming soon 🌾"
            );
        }

    });

});


// GOOGLE LOGIN BUTTON
loginButtons[1].addEventListener("click", function () {

    alert("Google Login will be connected here.");
});


// FORGOT PASSWORD
const forgotPassword = document.querySelector(
    ".login-box > a"
);

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    alert(
        "Password recovery option will be available here."
    );
});


// NEWSLETTER
const subscribeButton = document.querySelector(
    "footer button"
);

subscribeButton.addEventListener("click", function () {

    const emailInput = document.querySelector(
        'footer input[type="email"]'
    );

    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    alert(
        "Thank you for subscribing! 🌱\n" +
        "You will receive Farmer Supports updates."
    );

    emailInput.value = "";
});


// NAVIGATION
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            link.innerText +
            " section will be available soon."
        );

    });

});


// STEP CARDS
const steps = document.querySelectorAll(".step");

steps.forEach(function (step) {

    step.addEventListener("click", function () {

        const title = step.querySelector("h3").innerText;

        alert(
            "You selected: " + title
        );

    });

});