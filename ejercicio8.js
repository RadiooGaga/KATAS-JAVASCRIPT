//Busca la palabra más larga: Completa la función que, tomando un array de strings 
//como argumento, devuelva el más largo. En caso de que dos strings tenga la misma 
//longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {
    let longitud = 0;
    let character = "";
    
    for (const avenger of array){
    
        console.log(avenger.length);
    
        if (avenger.length > longitud){
            longitud = avenger.length
            character = avenger
        }
        
    }
    return(character);
}
console.log(findLongestWord(avengers));