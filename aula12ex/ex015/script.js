function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique se sua resposta está correta!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.borderRadius = '50%'
        img.style.marginTop = '15px'
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebehomem.jpg')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultohomem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebemulher.jpg')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultamulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosamulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}