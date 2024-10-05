

//Valores únicos: Crea una función que reciba por parámetro un array y compruebe 
//si existen elementos duplicados, en caso que existan los elimina para retornar 
//un array sin los elementos duplicados. Puedes usar este array para probar tu función:
//pista (cuando eliminamos algo de un array, su longitud se verá afectada


const platos = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];


let arrayWithoutDuplicates = [];

function removeDuplicates(platos){

for (const plato of platos) {
   if (arrayWithoutDuplicates.indexOf(plato, 0) === -1){
     arrayWithoutDuplicates.push(plato)
    }
   
  }
  return arrayWithoutDuplicates;
}
console.log(removeDuplicates(platos));









/*
function removeDuplicates(platos){

for (let i = 0; i < platos.length; i++){

  const plato = platos[i];
  let indice = i+1;
  while (platos.indexOf(plato,indice)){

  }
}
}
*/