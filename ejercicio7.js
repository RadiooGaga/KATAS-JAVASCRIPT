//Completa la función que tomando dos números como argumento devuelva el más alto.

function returnGreatest(numberOne , numberTwo) {
    if (numberOne > numberTwo){
      return numberOne;
    }
    return numberTwo;
  }
  console.log(returnGreatest(20, 13));