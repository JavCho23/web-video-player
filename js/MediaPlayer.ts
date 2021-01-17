import MediaPlayerPlugin from "./plugins/MediaPlayerPlugin"

class MediaPlayer {
    private media: HTMLMediaElement
    private plugins: MediaPlayerPlugin[]
    constructor(config: any) {
        this.media = config.el
        this.plugins = config.plugins || []
        this._initPlugins()
    }
    _initPlugins() {
        this.plugins.forEach((plugins: MediaPlayerPlugin) => {
            plugins.run(this)
        })
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
