function Autoplay() {}
Autoplay.prototype.run = function (player) {
    console.log(player.isMuted)
    if (!player.isMuted) {
        player.muted = true
    }
    player.play()
}

export default Autoplay
