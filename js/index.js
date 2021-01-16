import MediaPlayer from "./MediaPlayer.js"
import Autoplay from "./plugins/Autoplay.js"
import Autopause from "./plugins/Autopause.js"
const video = document.querySelector("video")
const player = new MediaPlayer({
    el: video,
    plugins: [new Autoplay(), new Autopause()],
})

const togglePlay = document.querySelector("#togglePlay")
togglePlay.onclick = () => player.togglePlay()
const toggleMute = document.querySelector("#toggleMute")
toggleMute.onclick = () => player.toggleMute()
