const popup = document.querySelector('.popup-video');
const closeBtn = document.querySelector('.popup-video span');

  // Oculta el popup cuando se hace clic en la X
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    popup.querySelector('video').pause(); // pausa el video también
  });

  // Para que se abra al hacer clic en un video (opcional)
  const videos = document.querySelectorAll('.video-grid .video video');
  videos.forEach(video => {
    video.addEventListener('click', () => {
      const popupVideo = popup.querySelector('video');
      popupVideo.src = video.src;
      popup.style.display = 'block';
      popupVideo.play();
    });
  });


