function changeScreen(current, next) {

    document.getElementById(current)
        .classList.remove("active");

    setTimeout(() => {

        document.getElementById(next)
            .classList.add("active");

    }, 300);
}


function startSurprise() {

    changeScreen("intro", "birthday");

    createHearts();
}


function showLetter() {

    changeScreen("birthday", "letter");

}


function showFinal() {

    changeScreen("letter", "final");

    createConfetti();

}


/* Floating Hearts */

function createHearts() {

    const container = document.querySelector(".hearts");

    setInterval(() => {

        const heart = document.createElement("span");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.bottom = "-30px";
        heart.style.fontSize =
            (12 + Math.random() * 20) + "px";

        heart.style.opacity =
            .3 + Math.random() * .7;

        heart.style.pointerEvents = "none";

        heart.style.animation =
            "heartUp 6s linear forwards";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 600);
}


/* Confetti */

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("span");

        confetti.innerHTML =
            ["❤️", "✨", "💖", "🎉", "💕"]
            [Math.floor(Math.random() * 5)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.top =
            Math.random() * 100 + "%";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.pointerEvents = "none";

        confetti.style.animation =
            "confettiFall " +
            (2 + Math.random() * 3) +
            "s ease-out forwards";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
