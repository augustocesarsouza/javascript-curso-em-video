function carregar(){
    let msg = document.getElementById('msg')
    let msg2 = document.getElementById('msg2')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    //let hora = 13
    if (minuto < 10){ // Basicamente acrescenta um 0 por que ele buga quanto fica -q 10
        minuto = "0" + minuto
    }   
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 5 && hora < 12){
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        msg2.innerHTML = 'Bom dia '
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        msg2.innerHTML = "Boa tarde"
    } else{
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
        msg2.innerHTML = "Boa noite"
    }
}

