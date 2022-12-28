function contar() {
    var inicio =document.getElementById('txtn')
    var fim=document.getElementById('txtf')
    var passo=document.getElementById('txtp')
    var res=document.getElementById('resultado')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] verifique seus dados e tente novamente')
        res.innerHTML=''
    } else {
    var start=Number(inicio.value)
    var end=Number(fim.value)
    var pass=Number(passo.value)
    res.innerHTML=''
    res.innerHTML='CONTAGEM:'
    if (start < end) {
        for (contador =start; contador <=end; contador += pass) {
        res.innerHTML +=`  ${contador} \u{1F449}`
        }
    } else if (start>end) {
        for(contador =start; contador >=end; contador -= pass) {
        res.innerHTML +=` ${contador}\u{1F449}` 
        }
    }
    res.innerHTML +=`\u{1F3C1}`
    }
}