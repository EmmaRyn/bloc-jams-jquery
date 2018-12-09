class Helper {

  playPauseAndUpdate(song) {
    player.playPause(song);
    const totalTime = player.currentlyPlaying.duration;
    const prettyTotalTime = player.prettyTime(totalTime);
    $('#time-control .total-time').text(prettyTotalTime);
  }

}

const helper = new Helper();
