//Contador de repeticiones: Crea una función que nos devuelva el número de veces que 
//se repite cada una de las palabras que lo conforma. Puedes usar este array para 
//probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];




function timesRepeated (numberOfTimes){
    let repeatedList = [];
    let repetitions = [];

    for (const word of numberOfTimes){
        const indice = repeatedList.indexOf(word, 0);
        if(indice === -1){
            repeatedList.push(word);
            repetitions.push(1);
        
        }else {
            repetitions[indice]++;
        }
          
    }
    return [repeatedList, repetitions];
    
}
console.log(timesRepeated(counterWords)[0]);
console.log(timesRepeated(counterWords)[1]);

