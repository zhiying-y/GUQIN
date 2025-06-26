const audioMap = {};

// List of audio file names
const audioNames = [
    'gong2','shang2','jue2','qingjue2','zhi2','yu2','biangong2',
    '1','2','3','4','5','6','7',
    'gong1','shang1','jue1','qingjue1','zhi1','yu1','biangong1'
];
audioNames.forEach(name => {
    const audio = new Audio(`audio/${name}.mp3`);
    audio.preload = 'auto';
    audioMap[name] = audio;
});

// Play a specific audio by name
function playAudio(audioName) {
    const audio = audioMap[audioName];
    if (audio) {
    const clone = audio.cloneNode();
    clone.currentTime = 0;
    clone.play();
    }
}

// Make the key light up briefly
function activateKey(letter) {
    const key = document.querySelector(`.key[data-letter="${letter.toUpperCase()}"]`);
    if (key) {
    key.classList.add('active');
    setTimeout(() => key.classList.remove('active'), 300);
    }
}

 // When a key element is clicked, play the corresponding audio and highlight the key
document.getElementById('keyboard').addEventListener('click', e => {
    const key = e.target.closest('.key');
    if (key) {
    console.log(key.dataset.audio, 333);
    playAudio(key.dataset.audio);
    activateKey(key.dataset.letter);
    }
});

//   // When a keyboard key is pressed, play the corresponding sound and highlight the key
document.addEventListener('keydown', e => {
    const letter = e.key.toUpperCase();
    const key = document.querySelector(`.key[data-letter="${letter}"]`);
    if (key) {
    playAudio(key.dataset.audio);
    activateKey(letter);
    }
});