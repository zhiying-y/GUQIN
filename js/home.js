function goToHome() {
    document.getElementById('prehome').style.display = "none";
    document.getElementById('main').style.display = "flex";
    document.body.style.backgroundImage = "url('images/background6.jpg')";
    showSection('home');
}

function goBack() {
    document.getElementById('main').style.display = "none";
    document.getElementById('prehome').style.display = "flex";
    document.body.style.backgroundImage = "url('images/background4.jpg')";
}

function showSection(id) {
    const sections = ['home', 'effects', 'scene', 'guqin'];
    const buttons = document.querySelectorAll('.sidebar button');

    sections.forEach(sec => {
    document.getElementById(sec).style.display = (sec === id) ? 'block' : 'none';
    });

    buttons.forEach(btn => {
    const action = btn.getAttribute('onclick');
    if (action && action.includes(`'${id}'`)) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }

    if (['home', 'effects', 'scene'].includes(id)) {
    if (currentMusicSrc) {
        document.getElementById('musicControl').style.display = 'block';
    }
    } else {
    document.getElementById('musicControl').style.display = 'none';
    }
    });

    const bgVideo = document.getElementById('bgVideo');
    
    const backgroundImages = {
    'home': 'images/background6.jpg',
    'effects': 'images/background6.jpg',  
    'scene': '',  
    'guqin': 'images/background8.jpg',     
    };

    if (id === 'scene') {
    bgVideo.style.display = 'block';
    document.body.style.backgroundImage = '';
    bgVideo.style.opacity = '0';
    setTimeout(() => {
        bgVideo.style.opacity = '1';
    }, 100);
    } else {
    bgVideo.style.display = 'none';
    
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.backgroundImage = `url('${backgroundImages[id]}')`;
        document.body.style.opacity = '1';
    }, 200);
    }

    if (id === 'home') {
    document.getElementById('emotion-info').innerHTML = 'In Traditional Chinese Medicine (TCM), human health is understood as the dynamic balance between the five vital organs: Heart, Liver, Spleen, Lungs, and Kidneys. Each organ corresponds to an emotion and a natural element, forming the “Five Elements” system: Wood, Fire, Earth, Metal, and Water.TCM also recognizes the healing power of music. The guqin, one of China’s oldest instruments, is known for its deep, meditative tones. Its music aligns naturally with the Five Elements, and the five musical tones (Gong, Shang, Jue, Zhi, Yu) resonate with specific organs and emotions.'
    }
}


const mainVideo = document.getElementById("mainVideo");
const tempVideo = document.getElementById("tempVideo");
const tempSource = document.getElementById("tempSource");

function playVideo(src) {
    tempSource.src = src;
    tempVideo.load();

    tempVideo.classList.add("show");
    mainVideo.classList.remove("show");

    tempVideo.play();

    tempVideo.onended = () => {
    tempVideo.classList.remove("show");
    mainVideo.classList.add("show");
    mainVideo.play();
    };
}

function playEmotionWithText(videoPath, text) {
    playVideo(videoPath);
    document.getElementById('emotion-info').innerHTML = text;
}