// Minimal audio player: play/pause button and a clickable progress bar.
// Markup: <div class="player"><audio src="…" controls preload="none"></audio><a class="download" …></a></div>
// Without JavaScript the browser's own <audio controls> is shown instead.
(function () {
  var ICON = {
    play: '<svg viewBox="0 0 384 512" aria-hidden="true"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>',
    pause: '<svg viewBox="0 0 320 512" aria-hidden="true"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>'
  };
  var players = document.querySelectorAll('.player');

  players.forEach(function (player) {
    var audio = player.querySelector('audio');
    var button = document.createElement('button');
    var bar = document.createElement('div');
    var fill = document.createElement('span');

    button.type = 'button';
    bar.className = 'bar';
    bar.setAttribute('role', 'progressbar');
    bar.setAttribute('aria-label', 'Playback position');
    bar.appendChild(fill);

    function setButton(playing) {
      button.innerHTML = playing ? ICON.pause : ICON.play;
      button.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    }

    audio.removeAttribute('controls');
    audio.hidden = true;
    player.insertBefore(bar, audio);
    player.insertBefore(button, bar);
    setButton(false);

    button.addEventListener('click', function () {
      if (audio.paused) {
        // Only one clip plays at a time.
        document.querySelectorAll('.player audio').forEach(function (other) {
          if (other !== audio) other.pause();
        });
        audio.play();
      } else {
        audio.pause();
      }
    });
    audio.addEventListener('play', function () { setButton(true); });
    audio.addEventListener('pause', function () { setButton(false); });
    audio.addEventListener('ended', function () { setButton(false); });
    audio.addEventListener('timeupdate', function () {
      var pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
      fill.style.width = pct + '%';
      bar.setAttribute('aria-valuenow', Math.round(pct));
    });
    bar.addEventListener('click', function (event) {
      if (!audio.duration) return;
      var rect = bar.getBoundingClientRect();
      audio.currentTime = ((event.clientX - rect.left) / rect.width) * audio.duration;
    });
  });
})();
