//Buscador de nombres: Crea una función que reciba por parámetro un array y 
//el valor que desea comprobar que existe dentro de dicho array - comprueba 
//si existe el elemento, en caso que existan nos devuelve un true y la posición 
//de dicho elemento y por la contra un false. Puedes usar este array para probar 
//tu función:


const users = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];


  let name = "";

  function searchName (nameList, name) {
    
    if (nameList.indexOf(name, 0 ) === -1){
      return [false, -1];
    } else {
      return [true, nameList.indexOf(name, 0 )];
    }

  }
  console.log(searchName(users,"Jessica"));



//otra forma

  function finderName(param, userName) { 
    
    for (let i = 0; i < param.length; i++){  
          
    if (userName === param[i]){    
        return [true, i];     
        }
    }
    return [false, -1]
}
console.log(finderName(users, "Steve"));