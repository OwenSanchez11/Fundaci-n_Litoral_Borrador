const popup = document.querySelector('.popup-video');
const closeBtn = document.querySelector('.popup-video span');
const popupVideo = popup.querySelector('video');

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  popupVideo.pause();
  popupVideo.removeAttribute('src'); // Limpia el src para que no quede cargando
  popupVideo.load(); // Reinicia el elemento
});

const videos = document.querySelectorAll('.video-grid .video video');
videos.forEach(video => {
  video.addEventListener('click', () => {
    popupVideo.src = video.src;
    popup.style.display = 'block';
    popupVideo.play();
  });
});
