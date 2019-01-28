document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    const splash = document.querySelector('#splash');
    const loading = document.querySelector('#splash .loading');
    const sounds = document.querySelector('#sounds');
    const startButton = document.querySelector('#sounds .start-button');
    const stopButton = document.querySelector('#sounds .stop-button');

    const emitEvent = (eventName, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.emit(eventName);
        });
    };

    const emitMediaEvent = (eventType, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.components.sound[eventType]();
        });
    };

    const activateSoundsForTouch = () => {
    	const sounds = document.querySelectorAll('a-sound');
        sounds.forEach((soundEl) => {
            soundEl.components.sound.playSound();
            soundEl.components.sound.stopSound();
        });
    };

    var fuse = document.querySelector('#fuse-cursor');
    var fuseProgress = document.querySelector('#fuse-progress');

    scene.addEventListener('loaded', function (e) {
    setTimeout(() => {
                    loading.style.display = 'none';
                    splash.style.display = 'none';
                    sounds.style.display = 'block';
                    startButton.style.display = 'block';
        });
        emitEvent('scene-started', ['#camera-text', '#camera-ring']);
    });

    fuse.addEventListener('fusing', function (e) {
        fuseProgress.emit('fusing');
    });

    startButton.addEventListener('click', function (e) {
        startButton.style.display = 'none';
        stopButton.style.display = 'block';
        activateSoundsForTouch();
        emitMediaEvent('playSound', ['#music-1']);
    });

    stopButton.addEventListener('click', function (e) {
        startButton.style.display = 'block';
        stopButton.style.display = 'none';
        emitMediaEvent('stopSound', ['#music-1']);
    });

    document.querySelector('#camera-close').addEventListener('click', function (e) {
        emitEvent('camera-close-clicked', ['#camera-text', '#camera-text', '#camera-ring', '#camera-ring']);
    });

    document.querySelector('#camera-info').addEventListener('click', function (e) {
        emitEvent('camera-info-clicked', ['#camera-text', '#camera-text', '#camera-ring', '#camera-ring', '#camera-close']);
    });
});