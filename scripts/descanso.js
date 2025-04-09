function player_music() {
    let audio = document.getElementById('caixa-de-som')
    let img = document.getElementById('img_som')
    if (audio.paused) {
        audio.play()
        img.src = "../imagens/caixa-de-som-on.png"
    } else {
        audio.pause()
        img.src = "../imagens/caixa-de-som.png"
    }
}