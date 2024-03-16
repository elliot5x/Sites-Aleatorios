window.addEventListener('DOMContentLoaded', function () {
    var meuAudio = document.getElementById('meuAudio');
    meuAudio.addEventListener('loadedmetadata', function () {
        meuAudio.currentTime = 5; // 5 segundos
        meuAudio.volume = 0.3;
    });
});