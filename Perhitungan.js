const prompt = require(`prompt-sync`)({ sigint : true});
let x, y, z, k, j 
x = Number(prompt(`Masukkan Nilai X : `))
y = Number(prompt(`Masukkan Nilai Y : `))
z = Number(prompt(`Masukkan Nilai Z : `))
k = x + y - z
j = (x * y) - (z + x) 
console.log(`Nilai K adalah ${k}`)
console.log(`Nilai J adalah ${j}`)