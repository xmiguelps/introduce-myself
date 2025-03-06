function click_nav_hk() {
    let box = document.getElementById('hk')
    let img = document.getElementById('img_hk')
    let background_atual = window.getComputedStyle(box).backgroundImage //peguei o background atual
    if (background_atual.includes("hollow-knight.jpg"))/*perguntei se era none*/ {
        img.style.display = "none"
        box.style.transition = "all 1s"
        box.style.transform = "translate(-300px, -150px)"
        box.style.width = "450px"
        box.style.height = "270px"
        box.style.borderRadius = "20px"
        box.style.backgroundSize = "530px"
        box.style.backgroundImage = "url(../imagens/hollow-knight-maior.jpg)"
    } else if (background_atual.includes("hollow-knight-maior.jpg")) /*perguntei se era a imagem hk*/ {
        back_nav_hk(box, img)
    }
}

function back_nav_hk(box, img) {
    box.style.borderRadius = "30px"
    box.style.width = "170px"
    box.style.height = "250px"
    box.style.transform = "translate(-0px, -0px)"
    box.style.backgroundImage = "url(../imagens/hollow-knight.jpg)"
    img.style.display = "block"
}
//----------------------------------------------------------------------
function click_nav_roblox() {
    let box = document.getElementById('roblox')
    let img = document.getElementById('img_roblox')
    let background_atual = window.getComputedStyle(box).backgroundImage 
    if (background_atual.includes("roblox.png")) {
        img.style.display = "none"
        box.style.transition = "all 1s"
        box.style.transform = "translate(-300px, -150px)"
        box.style.width = "450px"
        box.style.height = "270px"
        box.style.borderRadius = "20px"
        box.style.backgroundSize = "530px"
        box.style.backgroundImage = "url(../imagens/roblox-maior.webp)"
    } else if (background_atual.includes("roblox-maior.webp")) {
        back_nav_roblox(box, img)
    }
}

function back_nav_roblox(box, img) {
    box.style.borderRadius = "30px"
    box.style.width = "170px"
    box.style.height = "250px"
    box.style.transform = "translate(-0px, -0px)"
    box.style.backgroundImage = "url(../imagens/roblox.png)"
    img.style.display = "block"
}
//--------------------------------------------------------------------

function click_nav_vava() {
    let box = document.getElementById('vava')
    let img = document.getElementById('img_vava')
    let background_atual = window.getComputedStyle(box).backgroundImage 
    if (background_atual.includes("valorant.jpg")) {
        img.style.display = "none"
        box.style.transition = "all 1s"
        box.style.transform = "translate(-300px, -150px)"
        box.style.width = "450px"
        box.style.height = "270px"
        box.style.borderRadius = "20px"
        box.style.backgroundSize = "530px"
        box.style.backgroundImage = "url(../imagens/valorant-maior.jpg)"
    } else if (background_atual.includes("valorant-maior.jpg")) {
        back_nav_vava(box, img)
    }
}

function back_nav_vava(box, img) {
    box.style.borderRadius = "30px"
    box.style.width = "170px"
    box.style.height = "250px"
    box.style.transform = "translate(-0px, -0px)"
    box.style.backgroundImage = "url(../imagens/valorant.jpg)"
    img.style.display = "block"
}
//--------------------------------------------------------------------
//melhora o cod