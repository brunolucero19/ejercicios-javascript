let peso = 80
let altura = 1.85

let imc = peso/(altura**2)
imc = imc.toFixed(2)

if (imc<18.5){
    console.log(`Su IMC es: ${imc} y su peso es bajo`)
}else{
    if(imc<25){
        console.log(`Su IMC es: ${imc} y su peso es normal`)
    }else{
        if(imc<30){
            console.log(`Su IMC es: ${imc} y tiene sobrepeso`)
        }else{
            console.log(`Su IMC es: ${imc} y tiene obesidad`)
        }
    }
}