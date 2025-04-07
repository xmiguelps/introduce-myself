function player_music() {
    let audio = document.getElementById('caixa-de-som')
    let img = document.getElementById('img_som')
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}