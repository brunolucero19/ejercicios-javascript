let num1 = 2
let num2 = -4
let num3 = 3

let suma = num1+num2+num3
let resta = num1-num2-num3
let multiplicacion = num1*num2*num3

if (suma>resta){
    if(suma>multiplicacion){
        console.log(`El resultado mayor es la suma, y es: ${suma}`)
    }else{
        console.log(`El resultado mayor es la multiplicación, y es: ${multiplicacion}`)
    }
}else{
    if(resta>multiplicacion){
        console.log(`El resultado mayor es la resta, y es: ${resta}`)
    }else{
        console.log(`El resultado mayor es la multiplicación, y es: ${multiplicación}`)
    }
}