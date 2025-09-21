function carregar() {

    let msg = document.getElementById('msg')
    let image = document.getElementById('image')
    let hora = new Date()
    let resultado = hora.getHours()
    

    if (resultado >= 0 && resultado <= 12){

        msg.innerHTML = `<p>Agora são ${resultado} horas, bom dia!</p>`
        msg.style.fontSize = '20pt'
        msg.style.fontStyle = 'italic'
        image.setAttribute('src', 'manha.png')
         document.body.style. background = '#bdc4cc '

    } else if (resultado > 12 && resultado < 18){

        msg.innerHTML = `<p>Agora são ${resultado} horas, boa tarde!</p>`
        msg.style.fontSize = '20pt'
        msg.style.fontStyle = 'italic'
        image.setAttribute('src', 'tarde.png')
        document.body.style. background = '#cd7e00'

    }else {

        msg.innerHTML = `<p>Agora são ${resultado} horas, boa noite!</p>`
        msg.style.fontSize = '20pt'
        msg.style.fontStyle = 'italic'
        image.setAttribute('src', 'noite.png')
        document.body.style. background = '#3b3b3b'

    }
    console.log(resultado)

}