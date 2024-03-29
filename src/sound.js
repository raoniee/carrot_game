const carrotSound = new Audio('./carrot/sound/carrot_pull.mp3');
const alertSound = new Audio('./carrot/sound/alert.wav');
const bgSound = new Audio('./carrot/sound/bg.mp3');
const bugSound = new Audio('./carrot/sound/bug_pull.mp3');
const winSound = new Audio('./carrot/sound/game_win.mp3');

export function playCarrot() {
    playSound(carrotSound);
}

export function playBug() {
    playSound(bugSound);
}

export function playAlert() {
    playSound(alertSound);
}

export function playWin() {
    playSound(winSound);
}

export function playBackground() {
    playSound(bgSound);
}

export function stopBackground() {
    stopSound(bgSound);
}


function playSound(sound) {
    sound.play();
    sound.currenTime = 0;
}

function stopSound(sound) {
    sound.pause();
}