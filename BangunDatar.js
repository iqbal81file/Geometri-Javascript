// Kalkulator bangun datar
// Iqbal Azzahir Athif

//Menu Pilihan
const prompt = require("prompt-sync")({ sigint: true})

console.log("--- Kalkulator Bangun Ruang ---")
console.log("1. Persegi")
console.log("2. Persegi Panjang")
console.log("3. Segitiga")
console.log("4. Jajar Genjang")
console.log("5. Trapesium")
console.log("6. Belah ketupat")
console.log("7. layang-layang")
console.log("8. Lingkaran")
console.log("9. keluar")

let pilihan = parseInt(prompt("Masukkan pilihan (1-8): "))

    if (pilihan === 1) {
    //Persegi
    const prompt = require("prompt-sync")( { sigint: true })
    let sisi, luas, keliling
    sisi = parseInt(prompt( `sisi : `))
    luas = sisi * sisi
    keliling = 4 * sisi

    console.log(`luas     : ${luas} cm2`)
    console.log(`keliling : ${keliling} cm`);
}

else if (pilihan === 2 ) {
    //Persegi Panjang
    const prompt = require("prompt-sync")( { sigint: true })
    let panjang, lebar, luas, keliling
    panjang = parseInt(prompt(`panjang : `))
    lebar = parseInt(prompt(`lebar : `))
    luas = panjang * lebar
    keliling = 2 * (panjang * lebar)

     console.log(`luas     : ${luas} cm2`)
    console.log(`keliling : ${keliling} cm`);
}

else if (pilihan === 3 ) {
    // Segitiga
    const prompt = require("prompt-sync")( { sigint: true })
    let alas, tinggi, a, b , c, luas, keliling
    alas = parseInt(prompt(`alas : `))
    tinggi = parseInt(prompt(`tinggi : `))
    a = parseInt(prompt(`a : `))
    b = parseInt(prompt(`b : `))
    c =  parseInt(prompt(`c : `))
    luas = 1/2 * alas * tinggi
    keliling = a + b + c

    console.log(`luas     : ${luas} cm2`)
    console.log(`keliling : ${keliling} cm`)
}

else if (pilihan === 4 ) {
    // Jajar genjang
    const prompt = require("prompt-sync")( { sigint: true })
    let alas, tinggi, a, b
    alas = parseInt(prompt(`alas : `))
    tinggi = parseInt(prompt(`tinggi : `))
    a = parseInt(prompt(`a : `))
    b = parseInt(prompt(`b : `))
    luas = alas * tinggi
    keliling = 2 * (a + b)

    console.log(`luas     : ${luas} cm2`)
    console.log(`keliling : ${keliling} cm`)
}


else if (pilihan === 5 ) {
    //Trapesium
    const prompt = require("prompt-sync")( { sigint: true })
    let a, b, c, d, tinggi, luas, keliling
    tinggi = parseInt(prompt(`tinggi : `))
    a = parseInt(prompt(`a : `))
    b = parseInt(prompt(`b : `))
    c = parseInt(prompt(`c : `))
    d = parseInt(prompt(`d : `))
    luas = 1/2 * (a + b) * tinggi
    keliling = a + b + c + d

    console.log(`luas     : ${luas} cm2`)
    console.log(`keliling : ${keliling} cm`)
}


else if (pilihan === 6) {
    //Belah ketupat
    const prompt = require("prompt-sync")( { sigint: true })
    let d1, d2, sisi, luas, keliling
    sisi = parseInt(prompt(`sisi : `))
    d1 = parseInt(prompt(`d1 :`))
    d2 = parseInt(prompt(`d2 : `))
    luas = 1/2 * d1 * d2
    keliling = 4 * sisi

    console.log(`luas     : ${luas} cm2`)
    console.log(`keliling : ${keliling} cm`)
}


else if (pilihan === 7 ) {
    //Layang-layang
    const prompt = require("prompt-sync")( { sigint: true })
    let d1, d2, a, b
    d1 = parseInt(prompt(`d1 :`))
    d2 = parseInt(prompt(`d2 :`))
    a = parseInt(prompt(`a :`))
    b = parseInt(prompt(`b :`))
    luas = 1/2 * d1 * d2
    keliling = 2 * (a + b)

    console.log(`luas     : ${luas} cm2`)
    console.log(`keliling : ${keliling} cm`)
}


else if (pilihan === 8 ) {
    //Lingkaran
    const prompt = require("prompt-sync")( { sigint: true })
    let r, luas, keliling
    const phi = 3.14
    r = parseInt(prompt(`jari jari :`))
    luas = phi * r ** 2
    keliling = 2 * phi * r
    
    console.log(`keliling : ${keliling} cm`)
    console.log(`luas     : ${luas} cm2`)
}