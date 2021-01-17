import MediaPlayer from "./MediaPlayer"
import Autoplay from "./plugins/Autoplay"
import Autopause from "./plugins/Autopause"
import AdsPlugin from "./plugins/Ads/index"

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
