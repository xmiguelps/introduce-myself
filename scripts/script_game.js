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