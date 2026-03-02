const texts = [
    "owner of seravyn software",
    "building aesthetic & sleep projects",
    "always working on something",
    "ghost <3 | 01/22/26"
];

const element = document.getElementById("typewriter");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingTime = 4000;
const deletingTime = 4000;

function loop() {
    const current = texts[textIndex];

    if (!deleting) {
        charIndex++;
        element.textContent = current.slice(0, charIndex);

        if (charIndex === current.length) {
            setTimeout(() => deleting = true, 300);
        }
    } else {
        charIndex--;
        element.textContent = current.slice(0, charIndex);

        if (charIndex === 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    const speed = deleting
        ? deletingTime / current.length
        : typingTime / current.length;

    setTimeout(loop, speed);
}

loop();
