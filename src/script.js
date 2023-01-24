function validate() {
  const valid = isValid(document.getElementById("cardnumber").value);
  console.log(document.getElementById("cardnumber").value);
  if (valid) {
    // Show success in div#result
  } else {
    // Show error message in div#result
  }
}
function errorVacio () {
  let verificaInput = document.getElementById("cardnumber").value;
  if (verificaInput === "") {
    alert ("Por favor ingresa un número válido de tarjeta")
  }
  else {
    console.log("Sí me mandó el valor" + verificaInput);
  }
}

const btnValidate = document.getElementById("validate_button");
btnValidate.addEventListener("click", errorVacio);

function isValid(creditCardNumber) {
  // a) divide el conjunto de numeros y ahí mismo reverso los números
  let division = creditCardNumber.split("").reverse();
  console.log(division);
  let arr2 = []; //contiene mis posiciones pares
  let arr3 = []; //contiene mis posiciones impares
  let arrDouble = []; //contiene mis pares doblados
  let doblesSumados = []; //contiene mis pares ya habiendo pasado el filtro >= 10
  for (let i = 0; i < division.length; i++) {
    //b) Divido mi array en [cada segundo dígito (en posición par)] y [posiciones impares (digitos nones)]
    if (i % 2 === 0) {
      //console.log("#par", i);
      arr3.push(division[i]);
    }
    if (i % 2 === 1) {
      //console.log("#impar", i);
      arr2.push(division[i]);
    }
  }
  //Multiplico los numeros en posición par x 2
  arr2.forEach(function (element) {
    console.log(element * 2);
    arrDouble.push(element * 2);
  });
  //
  /*console.log("resultado func sumadoble",sumaDoble); */
  for (let h = 0; h < arrDouble.length; h++) {
    console.log("valor de pares ya duplicados", arrDouble[h]);
    if (arrDouble[h] >= 10) {
      let sum = arrDouble[h].toString().split("").map(Number);
      let suma = sum.reduce(function () {
        return sum[0] + sum[1];
      }, 0);
      console.log("suma total de los mayores a 10", suma);
      doblesSumados.push(suma);
    } else {
      doblesSumados.push(arrDouble[h]);
    }
  }
  console.log("suma de pares", doblesSumados);

  //suma de pares (ya listos con doble y suma) e impares

  let arraysJuntos = [...arr3, ...doblesSumados];
  console.log("estamos juntando ambos arrays listos", arraysJuntos);

  //sumamos todo

  let sumaFinal = 0;
  for (number of arraysJuntos) {
    sumaFinal += parseInt(number);
  }

  console.log("suma Final ahora sí", sumaFinal);

  if (sumaFinal % 10 === 0) {
    alert("El número de tarjeta es válido");
  } else {
    alert("El número de tarjeta es inválido. Inténtalo de nuevo");
  }

  console.log("doble log", arrDouble);
  console.log("Este es el arr2 pares #", arr2);
  console.log("Este es el arr3 impares#", arr3);
  console.log("Este es el dobles sumados", doblesSumados);
  return false;
}
