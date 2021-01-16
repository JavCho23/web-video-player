class Autopause {
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
    }
    handleIntersection(entries) {
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        if (isVisible) this.player.play()
        else this.player.pause()
    }
}
export default Autopause
