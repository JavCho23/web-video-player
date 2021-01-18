import MediaPlayer from "../../MediaPlayer.js"
import MediaPlayerPlugin from "./../MediaPlayerPlugin.js"
import Ads, { Ad } from "./Ads.js"
class AdsPlugin implements MediaPlayerPlugin {
    private player: MediaPlayer
    private media: HTMLMediaElement
    private ads: Ads
    private currentAd: Ad
    private adsContainer: HTMLElement
    constructor() {
        this.ads = Ads.getInstance()
        this.adsContainer = document.createElement("div")
    }
    run(player: MediaPlayer): void {
        this.player = player
        this.media = this.player.media
        this.media.addEventListener(
            "timeupdate",
            this.handlerTimeUpdate.bind(this)
        )
        this.player.container.appendChild(this.adsContainer)
    }
    private handlerTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime)
        if (currentTime % 30 === 0) this.renderAd()
    }
    private renderAd() {
        if (this.currentAd) return
        const ad = this.ads.getAd()
        this.currentAd = ad
        this.adsContainer.innerHTML = `
        <div class="ads">
          <a class="ads__link" href="${this.currentAd.url}" target="_blank">
            <img class="ads__img" src="${this.currentAd.imageUrl}" />
            <div div class="ads__info">
              <h5 class="ads__title">${this.currentAd.title}</h5>
              <p class="ads__body">${this.currentAd.body}</p>
            </div>
          </a>
        </div>  
      `
        setTimeout(() => {
            this.currentAd = null
            this.adsContainer.innerHTML = ""
        }, 10000)
    }
}
export default AdsPlugin
