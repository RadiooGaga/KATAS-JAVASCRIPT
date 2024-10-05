//Usa un bucle para sumar el total de las ventas (sellCount) de todos 
//los productos y mostrar por consola la media de ventas.

const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

let total = 0;


for (const product of products){
  total += product.sellCount;
  
}
console.log(`La media de ventas es ${total / products.length} ventas`);
//La media de ventas es 85.25 ventas 
console.log(`La suma total de las ventas son ${total} euros`);
//La suma total de las ventas son 341 euros



//-----------------------------------------------------------------------------

//Otra forma de hacerlo:


const sales = [];
let media;

products.forEach(product => {
sales.push(product.sellCount)   
});

const totalSales = sales.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
media = totalSales / sales.length; 

console.log("Total Sales:", totalSales); 
console.log("Media:", media); 