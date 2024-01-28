var video = document.getElementById('Ggvideo');
var playButton = document.getElementById('play-button');
var bannerImage = document.getElementById('banner-image');

playButton.addEventListener('click', function() {
    video.play();
    playButton.style.display = 'none';
    bannerImage.style.display = 'none';
});

video.addEventListener('play', function() {
    playButton.style.display = 'none';
    bannerImage.style.display = 'none';
});

video.addEventListener('pause', function() {
    playButton.style.display = 'block';
    bannerImage.style.display = 'block';
});