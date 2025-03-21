function click_nav_hk() {
    let add_style = document.getElementById('add_style')
    let box = document.getElementById('hk')
    let img = document.getElementById('img_hk')
    let background_atual = window.getComputedStyle(box).backgroundImage //peguei o background atual
    if (background_atual.includes("hollow-knight.jpg"))/*perguntei se era none*/ {
        add_style.href = "../styles/game_hk.css"
    } else if (background_atual.includes("hollow-knight-maior.jpg")) /*perguntei se era a imagem hk*/ {
        back_nav(add_style)
    }
}
//----------------------------------------------------------------------
function click_nav_roblox() {
    let add_style = document.getElementById('add_style')
    let box = document.getElementById('roblox')
    let img = document.getElementById('img_roblox')
    let background_atual = window.getComputedStyle(box).backgroundImage 
    if (background_atual.includes("roblox.png")) {
        add_style.href = "../styles/game_roblox.css"
    } else if (background_atual.includes("roblox-maior.webp")) {
        back_nav(add_style)
    }
}
//--------------------------------------------------------------------

function click_nav_minecraft() {
    let add_style = document.getElementById('add_style')
    let box = document.getElementById('minecraft')
    let img = document.getElementById('img_minecraft')
    let background_atual = window.getComputedStyle(box).backgroundImage 
    if (background_atual.includes("minecraft.jpg")) {
        add_style.href = "../styles/game_minecraft.css"
    } else if (background_atual.includes("minecraft-maior.webp")) {
        back_nav(add_style)
    }
}

function back_nav(css) {
    css.href = "../styles/game.css"
}
//--------------------------------------------------------------------
//resolver bug de clicar na imagem, ou n precisa