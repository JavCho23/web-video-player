import MediaPlayer from "./MediaPlayer.js"
import Autoplay from "./plugins/Autoplay.js"
import Autopause from "./plugins/Autopause.js"
import AdsPlugin from "./plugins/Ads/index.js"

const video = document.querySelector("video")
const player = new MediaPlayer({
    el: video,
    plugins: [new Autoplay(), new Autopause(), new AdsPlugin()],
})

const togglePlay: HTMLButtonElement = document.querySelector("#togglePlay")
togglePlay.onclick = () => player.togglePlay()
const toggleMute: HTMLButtonElement = document.querySelector("#toggleMute")
toggleMute.onclick = () => player.toggleMute()

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/sw.js")
        .catch((error) => console.log(error))
}
