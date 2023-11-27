// Crea una función que reciba por parámetro un array y cuando es un valor 
//number lo sume y de lo contrario cuente la longitud del string y lo sume. 
//Puedes usar este array para probar tu función: pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


function averageWord(elements) {
    let sumAllElements = 0;

    for (const element of elements) {
        if (typeof element === "string"){
            sumAllElements += element.length;
        }
    
        if (typeof element === "number") {
            sumAllElements += element;
    }
    
}
return sumAllElements;
}
console.log(averageWord(mixedElements));