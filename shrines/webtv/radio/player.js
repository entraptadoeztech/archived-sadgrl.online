  
      clamp = function(num, min, max) {
        return Math.min(Math.max(num, min), max);
      };
      
      var knob = document.getElementById("knob");
      var playButton = document.getElementById("play");
      var namePlate = document.getElementById("name");
      var playing = false;
      var current = parseInt(data["current"]) | 0;
      var length = 0;
      var playlist = JSON.parse(unescape(data["playlist"]));
      
      function loadSong(url){
        MIDIjs.stop()
        MIDIjs.get_duration(url, function(seconds) { length = seconds;} );
        MIDIjs.play(url);
        namePlate.textContent = url.split("/").pop();
        if(!playing)
          MIDIjs.pause();
        MIDIjs.player_callback = function(ev) {var progress = (ev.time / length) * 68 + 52; knob.style.left = progress + "px"; if(ev.time > length){next()}};
      }
      
      function pause(){
        playing = false;
        MIDIjs.pause();
        playButton.style.background="url('/player/play.gif')";
      }
      function play(){
        playing = true;
        MIDIjs.resume();
        playButton.style.background="url('/player/pause.gif')";
      }
      
      function next(){
        current += 1;
        if(current >= playlist.length){
          current = 0
        }
        //loadSong(playlist[current]);
        window.location.replace("//silverhawk.neocities.org/player.html?current=" + current + "&playlist=" + data["playlist"]);
      }
      
      function prev(){
        current -= 1;
        if(current <= 0){
          current = playlist.length - 1;
        }
        //loadSong(playlist[current]);
        window.location.replace("//silverhawk.neocities.org/player.html?current=" + current + "&playlist=" + data["playlist"]);
      }
      
      loadSong(playlist[current]);
      play();
      
      function playClick(){
        if(playing){
          pause();
        }else{
          play();
        }
      }
      function clickKnob(){
        window.onmousemove = moveKnob;
        window.onmouseup = stopKnob;
      }
      function moveKnob(){
        var newx = clamp(event.clientX, 52, 120);
        knob.style.left = newx + "px";
      }
      function stopKnob(){
        window.onmousemove = undefined;
        window.onmouseup = undefined;
      }