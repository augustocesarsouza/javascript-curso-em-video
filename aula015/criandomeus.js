let num = [1, 5, 2, "maça", "laranja", 4, 3]
//num.sort()

let pos = num.indexOf("maça")

if(pos == -1){
    console.log('Não encontrado')
} else {
    console.log(`Ordem = ${num}`)
    console.log(`o valor 3 está na posição ${pos}`)
}
