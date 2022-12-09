let auxi = 0;
let contador = 0;

let listaPulos = [1, 2, 1, 1];

function solution() {
  if(listaPulos.length == 0)
    contador = -1;
  else
    jump(listaPulos[0]);
  
  return contador
}

function jump(i) {
  contador++;
  auxi = i + listaPulos[i];
  try {
    if (typeof listaPulos[auxi] === 'undefined') {
      return contador;
    } else {
      jump(auxi);
    }
  } catch (e) {
    contador = -1
  }
}
