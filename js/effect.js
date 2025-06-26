
let isHealingMusicPlaying = false;
let currentMusicSrc = '';
let currentMusicDesc = '';

// Select and play healing music
function selectHealingMusic(src, desc) {
    const audio = document.getElementById('healingMusic');
    const icon = document.getElementById('musicControl');

    audio.src = src;
    audio.play();
    isHealingMusicPlaying = true;
    currentMusicSrc = src;
    currentMusicDesc = desc;

    document.getElementById('music-description').innerHTML = desc;
    icon.innerText = '⏸️';
    icon.style.display = 'block';
}

// Switch music state: play or pause
function toggleHealingMusic() {
    const audio = document.getElementById('healingMusic');
    const icon = document.getElementById('musicControl');

    if (isHealingMusicPlaying) {
    audio.pause();
    icon.innerText = '▶️';
    } else {
    audio.play();
    icon.innerText = '⏸️';
    }

    isHealingMusicPlaying = !isHealingMusicPlaying;
}