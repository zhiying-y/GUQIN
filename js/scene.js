let isPlaying = false;

function selectScene(videoPath, ambientSound) {
    // Switch background video
    const bgVideo = document.getElementById('bgVideo');
    bgVideo.src = videoPath;
    bgVideo.volume = currentVolume / 100; 
    bgVideo.play();

    // Play scene sound effects
    const sceneAudio = document.getElementById('sceneAudio');
    sceneAudio.src = ambientSound;
    sceneAudio.volume = currentVolume / 100; 
    sceneAudio.play();


    isPlaying = true;

    // After selecting a scene, fade out scene option
    const sceneOptions = document.querySelector('.scene-options');
    if (sceneOptions) {
    sceneOptions.classList.add('fade-out');
    }
}

// Toggle audio play or pause
function toggleAudio() {
    const sceneAudio = document.getElementById('sceneAudio');
    const icon = document.querySelector('.play-btn')
    console.log(isPlaying, 'isPlaying');
    if (isPlaying) {
    sceneAudio.pause();
    isPlaying = false;
    icon.innerText = '▶️';
    } else {
    sceneAudio.play();
    isPlaying = true;
    icon.innerText = '⏸️';
    }
}

// Returning to the initial setup with all three backgrounds
function cycleBgMode() {
    const sceneOptions = document.querySelector('.scene-options');
        
        if(sceneOptions) {
            sceneOptions.style.display = 'block';
            sceneOptions.classList.remove('fade-out');
        }
}

// The volume before muting
let previousVolume = 50;

// Mute or Unmute
function toggleMute() {
    const muteBtn = document.getElementById('muteBtn');
    const volumeSlider = document.getElementById('volumeSlider');

    if (isMuted) {
        // Unmute
        changeVolume(previousVolume);   
        if (muteBtn) muteBtn.textContent = '🔊';
        if (volumeSlider) volumeSlider.value = previousVolume;
        isMuted = false;
    } else {
        // Mute
        previousVolume = currentVolume;
        changeVolume(0);
        if (muteBtn) muteBtn.textContent = '🔇';
        if (volumeSlider) volumeSlider.value = 0; // Slider reset to 0
        isMuted = true;
    }
}

// volume state
let isMuted = false;
let currentVolume = 50;

// Volume control function
function changeVolume(value) {
    currentVolume = value;
    const volumePercent = value / 100;
    

    const audioElements = [
    document.getElementById('sceneAudio'),
    document.getElementById('mainVideo'),
    document.getElementById('tempVideo'),
    document.getElementById('bgVideo')
    ];
    
    audioElements.forEach(audio => {
    if (audio) {
        audio.volume = volumePercent;
    }
    });
    
    document.getElementById('volumeValue').textContent = value + '%';
    
    // If the volume is greater than 0, unmute the sound.
    if (value > 0 && isMuted) {
    isMuted = false;
    document.getElementById('muteBtn').textContent = '🔊';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Set the initial volume
    changeVolume(50);
});