import MediaPlayer from "./../MediaPlayer"
import MediaPlayerPlugin from "./MediaPlayerPlugin"

class Autoplay implements MediaPlayerPlugin {
    run(player: MediaPlayer) {
        if (!player.muted()) {
            player.mute()
        }
        player.play()
    }
}

export default Autoplay
