let decimal = Number(prompt("What is the decimal?"))

//hexadecimal


let hexaDivide = Math.floor(decimal / 16)
let hexaRemainder2 = decimal % 16
let hexaRemainder1 = hexaDivide % 16


if(hexaRemainder1 == 10) {
    hexaRemainder1 ="A"
}
if(hexaRemainder1 == 11){
    hexaRemainder1 ="B"
}
if(hexaRemainder1 == 12){
    hexaRemainder1 ="C"
}
if(hexaRemainder1 == 13){
    hexaRemainder1 ="D"
}
if(hexaRemainder1 == 14){
    hexaRemainder1 ="E"
}
if(hexaRemainder1 == 15){
    hexaRemainder1 ="F"
}
if(hexaRemainder2 == 10){
    hexaRemainder2 ="A"
}
if(hexaRemainder2 == 11){
    hexaRemainder2 ="B"
}
if(hexaRemainder2 == 12){
    hexaRemainder2 ="C"
}
if(hexaRemainder2 == 13){
    hexaRemainder2 ="D"
}
if(hexaRemainder2 == 14){
    hexaRemainder2 ="E"
}
if(hexaRemainder2 == 15){
    hexaRemainder2 ="F"
}
console.log(`Hexadecimal equivalent ${hexaRemainder1}${hexaRemainder2}`)

//binary


let binary1 = decimal % 2 
let quotient = Math.floor(decimal / 2)
let binary2 = quotient % 2
quotient = Math.floor(quotient / 2)
let binary3 = quotient % 2
quotient = Math.floor(quotient / 2)
let binary4 = quotient % 2
quotient = Math.floor(quotient / 2)
let binary5 = quotient % 2
quotient = Math.floor(quotient / 2)
let binary6 = quotient % 2
quotient = Math.floor(quotient / 2)
let binary7 = quotient % 2
quotient = Math.floor(quotient / 2)
let binary8 = quotient % 2 

console.log(`binary equivalent: ${binary8}${binary7}${binary6}${binary5} ${binary4}${binary3}${binary2}${binary1}`)