// Kalkulator bangun datar
// Iqbal Azzahir Athif

//Menu Pilihan
const prompt = require("prompt-sync")({ sigint: true})

console.log("--- Kalkulator Bangun Ruang ---")
console.log("1. Kubus")
console.log("2. Balok")
console.log("3. Prisma segitiga")
console.log("4. Limas")
console.log("5. Tabung")
console.log("6. Kerucut")
console.log("7. Bola")
console.log("Keluar")

let pilihan = parseInt(prompt("Masukkan pilihan (1-7): "))

if (pilihan === 1) {
    //Kubus
    const prompt = require("prompt-sync")({ sigint: true })
    let sisi, volume, luaspermukaan
    sisi = parseInt(prompt(`sisi : `))
    volume = sisi * sisi * sisi
    luaspermukaan = 6 * sisi ** 2

    console.log(`volume : ${volume} cm3`)
    console.log(`luaspermukaan : ${luaspermukaan} cm2`)
}


else if (pilihan === 2) {
    //Balok
    const prompt = require("prompt-sync")({ sigint: true })
    let panjang, lebar, tinggi, volume, luaspermukaan
    panjang = parseInt(prompt(`panjang : `))
    lebar = parseInt(prompt(`lebar : `))
    tinggi = parseInt(prompt(`tinggi : `))
    volume = panjang * lebar * tinggi
    luaspermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    console.log(`volume : ${volume} cm3`)
    console.log(`luaspermukaan : ${luaspermukaan} cm2`)
}


else if (pilihan === 3) {
    //Prisma segitiga
    const prompt = require("prompt-sync")({ sigint: true })
    let luasa, tinggi, kelilinga, volume, luaspermukaan
    luasa = parseInt(prompt(`luas alas : `))
    tinggi = parseInt(prompt(`tinggi : `))
    kelilinga = parseInt(prompt(`keliling alas : `))
    volume = luasa * tinggi
    luaspermukaan = 2 * luasa + kelilinga * tinggi

    console.log(`volume : ${volume} cm3`)
    console.log(`luaspermukaan : ${luaspermukaan} cm2`)
}


else if (pilihan === 4) {
    //Limas
    const prompt = require("prompt-sync")({ sigint: true })
    let luasa, luasse, tinggi, volume, luaspermukaan
    luasa = parseInt(prompt(`luas alas : `))
    tinggi = parseInt(prompt(`tinggi : `))
    luasse = parseInt(prompt(`Luas Selubung : `))
    volume = 1/3 * luasa * tinggi
    luasse = luasa + luasse

    console.log(`volume : ${volume} cm3`)
    console.log(`luaspermukaan : ${luaspermukaan} cm2`)
}


else if (pilihan === 5) {
    //Tabung
    const prompt = require("prompt-sync")({ sigint: true })
    const phi = 3.14
    let r, tinggi, volume, luaspermukaan
    r = parseInt(prompt(`Jari jari : `))
    tinggi = parseInt(prompt(`tinggi : `))
    volume = phi * r ** 2 * tinggi
    luaspermukaan = 2 * phi * r * (r + tinggi)

    console.log(`volume : ${volume} cm3`)
    console.log(`luaspermukaan : ${luaspermukaan} cm2`)
}


else if (pilihan === 6) {
        //Kerucut
    const prompt = require("prompt-sync")({ sigint: true })
    const phi = 3.14
    let r, tinggi
    r = parseInt(prompt(`Jari jari : `))
    tinggi = parseInt(prompt(`tinggi : `))
    const sisi = Math.sqrt(r ** 2 + tinggi ** 2 )
    volume = 1/3 * phi * r ** 2 * tinggi
    luaspermukaan = phi * r * (r + sisi)

    console.log(`volume : ${volume.toFixed} cm3`)
    console.log(`luaspermukaan : ${luaspermukaan} cm2`)
}



else if (pilihan === 7) {
    //Bola
    const prompt = require("prompt-sync")({ sigint: true })
    const phi = 3.14
    let r, volume, luaspermukaan
    r = parseInt(prompt(`Jari jari : `))
    volume = 4/3 * phi * r ** 3
    luaspermukaan = 4 * phi * r ** 2

    console.log(`volume : ${volume} cm3`)
    console.log(`luaspermukaan : ${luaspermukaan} cm2`)
}