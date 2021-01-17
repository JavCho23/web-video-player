import MediaPlayer from "../MediaPlayer"
import MediaPlayerPlugin from "./MediaPlayerPlugin"

class Autopause implements MediaPlayerPlugin {
    private threshold: number
    private player: MediaPlayer

    constructor() {
        this.threshold = 0.25
    }
    run(player: MediaPlayer) {
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
    private handleIntersection(entries: IntersectionObserverEntry[]): void {
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        this.pauseOrPlay(isVisible)
    }
    private handleVisibilityChange(): void {
        const isVisible = document.visibilityState == "visible"
        this.pauseOrPlay(isVisible)
    }
    private pauseOrPlay(isVisible: boolean): void {
        if (isVisible) this.player.play()
        else this.player.pause()
    }
}
export default Autopause
