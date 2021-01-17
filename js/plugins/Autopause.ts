import MediaPlayer from "../MediaPlayer"

class Autopause {
    private threshold: number
    private player: MediaPlayer

    constructor() {
        this.threshold = 0.25
    }
    run(player) {
        this.player = player
        const observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            {
                threshold: this.threshold,
            }
        )
        observer.observe(player.media)
        document.addEventListener(
            "visibilitychange",
            this.handleVisibilityChange.bind(this)
        )
    }
    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        this.pauseOrPlay(isVisible)
    }
    private handleVisibilityChange() {
        const isVisible = document.visibilityState == "visible"
        this.pauseOrPlay(isVisible)
    }
    private pauseOrPlay(isVisible) {
        if (isVisible) this.player.play()
        else this.player.pause()
    }
}
export default Autopause
