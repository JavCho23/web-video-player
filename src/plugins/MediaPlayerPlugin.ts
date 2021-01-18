import MediaPlayer from "../MediaPlayer.js"
interface MediaPlayerPlugin {
    run(player: MediaPlayer): void
}

export default MediaPlayerPlugin
