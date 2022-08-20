$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true,
        items: 3,
        responsive: {
            0:{
                items: 1,
            },

            701:{
                items: 2,
            },

            1001:{
                items: 3,
            },
        },
    });
  });

  const videoBtn = document.querySelector('#video__btn');
  const videoImg = document.querySelector('.video__img');
  const videoWrapper = document.querySelector('.video');
  const video = document.querySelector('#video-file');

  videoWrapper.addEventListener('click', function () {
    if(video.paused) {
        videoImg.classList.add('none');
        videoBtn.classList.add('none');
        videoWrapper.classList.remove('video-overlay');
        video.play();
    } else {
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');
        video.pause();
    }
  })