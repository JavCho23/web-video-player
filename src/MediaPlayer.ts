import MediaPlayerPlugin from "./plugins/MediaPlayerPlugin"

const buttons = {
    muted: '<i class="fa fa-volume-off"></i>',
    unmuted: '<i class="fa fa-volume-up"></i>',
    play: '<i class="fa fa-play-circle"></i>',
    pause: '<i class="fa fa-pause-circle"></i>',
}
class MediaPlayer {
    public media: HTMLMediaElement
    private plugins: MediaPlayerPlugin[]
    public container: HTMLElement
    private buttonTogglePlay: HTMLButtonElement
    private buttonToggleMute: HTMLButtonElement
    constructor(config: any) {
        this.media = config.el
        this.plugins = config.plugins || []
        console.log("Alo")
        this._buildPlayer()
        this._initPlugins()
    }
    _initPlugins() {
        this.plugins.forEach((plugins: MediaPlayerPlugin) => {
            plugins.run(this)
        })
    }
    _buildPlayer() {
        this.container = document.createElement("div")
        this.container.classList.add("movie")
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
        const videActions = document.createElement("div")
        videActions.classList.add("movie__actions")
        this.media.insertAdjacentElement("afterend", videActions)

        this.buttonTogglePlay = document.createElement("button")

        this.buttonTogglePlay.innerHTML = this.media.paused
            ? buttons.play
            : buttons.pause
        this.buttonTogglePlay.classList.add("movie__button")
        this.buttonTogglePlay.addEventListener("click", () => {
            this.togglePlay()
        })
        this.buttonToggleMute = document.createElement("button")
        this.buttonToggleMute.classList.add("movie__button")
        this.buttonToggleMute.innerHTML = this.media.muted
            ? buttons.muted
            : buttons.unmuted
        this.buttonToggleMute.addEventListener("click", () => {
            this.toggleMute()
        })

        videActions.parentNode.insertBefore(this.buttonTogglePlay, videActions)
        videActions.parentNode.insertBefore(this.buttonToggleMute, videActions)

        videActions.appendChild(this.buttonTogglePlay)
        videActions.appendChild(this.buttonToggleMute)
    }
    play(): void {
        this.media.play()
        this.buttonTogglePlay.innerHTML = buttons.pause
    }
    pause(): void {
        this.media.pause()
        this.buttonTogglePlay.innerHTML = buttons.play
    }
    togglePlay(): void {
        if (this.media.paused) {
            this.play()
        } else {
            this.pause()
        }
    }
    muted(): boolean {
        return this.media.muted
    }
    mute(): void {
        this.media.muted = true
        this.buttonToggleMute.innerHTML = buttons.muted
    }
    unmute(): void {
        this.media.muted = false
        this.buttonToggleMute.innerHTML = buttons.unmuted
    }
    toggleMute(): void {
        if (this.media.muted) {
            this.unmute()
        } else {
            this.mute()
        }
    }
}

export default MediaPlayer
