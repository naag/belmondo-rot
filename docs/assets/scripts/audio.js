
function initAudioPlayer() {
  var audio = $('#page-audio')[0];
  var audioImage = $('#page-audio-image')[0];
  var progress = $('.progress');
  var pausedBtn = $('.paused');
  var playingBtn = $('.playing');

  if (!audio) {
    return;
  }

  var click = function() {
    console.log('click');
    console.log(this);
    if (audio.paused) {
      audio.play();
      pausedBtn.css('display', 'none');
      playingBtn.css('display', 'block');
    } else {
      audio.pause();
      pausedBtn.css('display', 'block');
      playingBtn.css('display', 'none');
    }
  }

  audio.ontimeupdate = function() {
    var offset = audio.currentTime / audio.duration * 100;
    progress.css('width', (100 - offset) + '%');
    console.log(offset);
  };

  $(progress)
    .add(audioImage)
    .add(pausedBtn)
    .add(playingBtn)
    .on('click', click);
}

$(function() {
  initAudioPlayer();
});
