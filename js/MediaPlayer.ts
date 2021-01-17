import MediaPlayerPlugin from "./plugins/MediaPlayerPlugin"

class MediaPlayer {
    public media: HTMLMediaElement
    private plugins: MediaPlayerPlugin[]
    public container: HTMLElement
    constructor(config: any) {
        this.media = config.el
        this.plugins = config.plugins || []
        this._initPlayer()
        this._initPlugins()
    }
    _initPlugins() {
        this.plugins.forEach((plugins: MediaPlayerPlugin) => {
            plugins.run(this)
        })
    }
    _initPlayer() {
        this.container = document.createElement("div")
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }
    play(): void {
        this.media.play()
    }
    pause(): void {
        this.media.pause()
    }
    togglePlay(): void {
        if (this.media.paused) {
            this.play()
        } else {
            this.pause()
        }
    }
    get muted(): boolean {
        return this.media.muted
    }
    mute(): void {
        this.media.muted = true
    }
    unmute(): void {
        this.media.muted = false
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
