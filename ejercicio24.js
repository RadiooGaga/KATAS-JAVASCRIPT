//Usa un bucle para recorrer el array de productos (products) y añade al 
//array goodProducts los que tengan más de 20 ventas (sellCount) y al 
//array badProducts los que tengan menos.

//Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const goodProducts = [];
const badProducts = [];

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (const product of products){
  if (product.sellCount > 20){
    goodProducts.push(product);
  }else{
    badProducts.push(product);
  }
}
console.log("Good Products:",goodProducts)
console.log("Bad products: ",badProducts);