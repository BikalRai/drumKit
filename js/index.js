const drum = document.querySelectorAll(".drum");

for (let i = 0; i < drum.length; i++) {
    window.addEventListener("click", (e) => {
        let key = e.target.innerText;
        console.log(key);
        playSound(key.toLowerCase());
        backGround(key.toLowerCase());
    });
}

const playSound = (key) => {
    switch (key) {
        case "w":
            const tomOne = new Audio("/media/tom-1.mp3");
            tomOne.play();
            break;
        case "a":
            const tomTwo = new Audio("/media/tom-2.mp3");
            tomTwo.play();
            break;
        case "s":
            const tomThree = new Audio("/media/tom-3.mp3");
            tomThree.play();
            break;
        case "d":
            const tomFour = new Audio("/media/tom-4.mp3");
            tomFour.play();
            break;
        case "j":
            const crash = new Audio("/media/crash.mp3");
            crash.play();
            break;
        case "k":
            const bass = new Audio("/media/kick-bass.mp3");
            bass.play();
            break;
        case "l":
            const snare = new Audio("/media/snare.mp3");
            snare.play();
            break;
    }
};

window.addEventListener("keypress", (e) => {
    let key = e.key;
    playSound(key);
    backGround(key);
});

const backGround = (key) => {
    let active = document.querySelector("." + key);
    active.classList.add("active");

    setTimeout(() => {
        active.classList.remove("active");
    }, 100);
};
