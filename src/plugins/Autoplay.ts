import MediaPlayer from "./../MediaPlayer.js"
import MediaPlayerPlugin from "./MediaPlayerPlugin.js"

class Autoplay implements MediaPlayerPlugin {
    run(player: MediaPlayer) {
        if (!player.muted()) {
            player.mute()
        }
        player.play()
    }
}

export default Autoplay
