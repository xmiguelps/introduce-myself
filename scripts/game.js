function click_nav_hk() {
    let add_style = document.getElementById('add_style')
    let box = document.getElementById('hk')
    let img = "../imagens/hollow-knight.jpg"
    var id = "img_hk"
    let background_atual = window.getComputedStyle(box).backgroundImage //peguei o background atual
    if (background_atual.includes("hollow-knight.jpg"))/*perguntei se era none*/ {
        add_style.href = "../styles/game_hk.css"
        
        box.innerHTML += "<p class='texto'>Hollow Kinght é de longe um dos meus jogos favoritos, ele tem tudo que eu poderia querer em um jogo, a mensagem q o jogo pode passar dependendo de como voce interpreta ele, a ambientação, musicas, boss battles, mecanicas, e um otimo desafio, tudo sendo algo lindo, bem feito e unico, isso que o torna um jogo tão bom</p>"

    } else if (background_atual.includes("hollow-knight-maior.jpg")) /*perguntei se era a imagem hk*/ {
        back_nav(add_style, box, img, id)
    }
}
//----------------------------------------------------------------------
function click_nav_roblox() {
    let add_style = document.getElementById('add_style')
    let box = document.getElementById('roblox')
    let img = "../imagens/roblox.png"
    var id = "img_roblox"
    let background_atual = window.getComputedStyle(box).backgroundImage 
    if (background_atual.includes("roblox.png")) {
        add_style.href = "../styles/game_roblox.css"

        box.innerHTML += "<p class='texto'>Roblox. Foi aqui que veio uma boa parte da minha infancia. Vi tantos youtubers jogando jogos incriveis e chegeu até a ver um deles dentro do mesmo jogo que eu. Joguei tantos jogos de tantos tipos que chega a ser impossivel contar no dedo, jogos esquisitos, jogos engraçados, jogos legais, jogos absurdos de bom, jogos ruins e por ai vai. E agora por ultimo mas não menos importante, foi aqui que conheci 1 pessoa que eu não podia imaginar o quão diferença esse mano podia fazer na minha vida. Esse jogo fez parte não só da minha infacia, mas da minha vida toda, e faz parte até hoje</p>"
        
    } else if (background_atual.includes("roblox-maior.webp")) {
        back_nav(add_style, box, img, id)
    }
}
//--------------------------------------------------------------------

function click_nav_minecraft() {
    let add_style = document.getElementById('add_style')
    let box = document.getElementById('minecraft')
    let img = "../imagens/minecraft.jpg"
    var id = "img_minecraft"
    let background_atual = window.getComputedStyle(box).backgroundImage 
    if (background_atual.includes("minecraft.jpg")) {
        add_style.href = "../styles/game_minecraft.css"

        box.innerHTML += "Minecraft. Um pouco menos que roblox, porem tambem teve um impacto gigante na minha vida. Antigamente, meu sonho era jogar isso em um computador, vi tantos youtubers jogando em survival, jogando minigames em servidores, e diversas series machinimas, não tem como esquecer dessas series. Minha primeira experiencia com esse jogo foi em um computador da minha prima, ali foi onde ela me deu a experiencia desse mundo incrivel, depois daquilo eu vi muito mais videos, e passei a gostar ainda mais. E hoje em dia, cá estou eu fazendo um site falando sobre ele, agora nosso minezin é o famoso jogo que a gente sente vontade de jogar por uma semana, junta os amigos e vai até todo mundo cansar"

    } else if (background_atual.includes("minecraft-maior.webp")) {
        back_nav(add_style, box, img, id)
    }
}

function back_nav(css, box, img, id) {
    css.href = "../styles/game.css"
    box.innerHTML = `<img class='img_menor' src='${img}' id='${id}'>`
}
//--------------------------------------------------------------------
//ver como colocar texto de uma forma melhor