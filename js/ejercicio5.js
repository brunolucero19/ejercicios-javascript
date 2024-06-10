let precioinicial = 40
let preciofinal = 0

if(precioinicial>100){
    preciofinal = precioinicial - (precioinicial*0.1)
    console.log(`El precio inicial era de: ${precioinicial}, por lo que se aplica un 10% de descuento, y el precio final es: ${preciofinal}`)
}else{
    if(precioinicial>=50){
        preciofinal = precioinicial - (precioinicial*0.05)
        console.log(`El precio inicial era de: ${precioinicial}, por lo que se aplica un 5% de descuento, y el precio final es: ${preciofinal}`)
    }else{
        console.log(`El precio inicial era de: ${precioinicial}, por lo que no se aplica ningún descuento, y el precio final es: ${precioinicial}`)
    }
}