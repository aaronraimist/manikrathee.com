var LastFMStatus = {
  defaultApiKey    : '8268a36df9e8ca5f3bf2dac06f83ef93',
  updateDelay      : 60000,
  apikey           : null,
  username         : null,
  trackInfo        : null,

  init: function(options) {
    options = options || {};
    this.apikey = (options.apikey ? options.apikey:this.defaultApiKey);
    if (options.username) {
      this.username = options.username;
    } else {
      throw 'RuntimeError: No username was specified!';
    }
    this.fetch();
  },

  url: function(callback) {
    return 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+this.username+'&api_key='+this.apikey+'&limit=2&format=json&callback='+callback;
  },

  fetch: function() {
    var oldScript = document.getElementById('lfm_state_json');
    if (oldScript) {
      document.body.removeChild(oldScript);
    }
    var script = document.createElement('script');
    script.src = this.url('LastFMStatus.updateInfo');
    script.id  = 'lfm_state_json'
    document.body.appendChild(script);
  },

  updateInfo: function(data) {
    if (data.error) {
      this.trackInfo = data;
    } else {
      var track = data.recenttracks.track[0];
      var trackInfo = {
        song    : track.name,
        artist  : track.artist["#text"],
        playing : (track["@attr"] ? true : false)
      };
      this.trackInfo = (this.trackInfo || {});

      if (this.songChanged(trackInfo)) {
        this.trackInfo = trackInfo;
      }
    }
    this.updateView();
    setTimeout(function() {LastFMStatus.fetch()}, this.updateDelay);
  },

  songChanged: function(newInfo) {
    return this.trackInfo.song != newInfo.song || this.trackInfo.playing != newInfo.playing;
  },

  updateView: function() {
    var status, message,
    userlink = ' ( <a target="__blank" href="http://www.last.fm/user/' + this.username + '">last.fm</a> )';
    var statusBox = document.getElementById('rdio');
    if (!statusBox) {
      var view = document.createElement('div');
      view.id  = "rdio";
      document.body.appendChild(view);
      statusBox = document.getElementById('rdio');
    }
    if (this.trackInfo.error) {
      status   = "Error: ";
      message  = '<strong>'+this.trackInfo.message+'</strong>';
    } else {
      status = this.trackInfo.playing ? 'Now Playing: ' : 'Last Played: ';
      message  = '<a href="http://www.rdio.com/people/manikrathee/history/" title="@ManikRathee is listening to "' + this.trackInfo.artist + ' on Rdio" itemprop="url"><span class="ss-icon ss-social logo">rdio</span><div><p>' + this.trackInfo.artist + ' - ' + this.trackInfo.song + '</p></a></div>';
    }

    if ( $('body').attr('id') === 'home' ){
    // if ($('body').attr('id','home')){
      statusBox.innerHTML = message;
    }

    // Set rdioActive to true so logofyAPI and activate API can fire
    rdioActive = true;
    centerAPI();
  }
};
