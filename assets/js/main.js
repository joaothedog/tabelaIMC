const form = document.querySelector('.form')

form.addEventListener('submit', function (e){
  e.preventDefault(); //para nao recarregar a pagina e perder os dados apos o submit

  const inputPeso = e.target.querySelector('#input-modelo-1')
  const inputAltura = e.target.querySelector('#input-modelo-2');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  

  if (!peso && !altura) {
    setResultado('Peso e altura inválidos', false);
    return;
  }

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `O seu peso é ${peso} e sua altura é ${altura}. Seu IMC é ${imc} (${nivelImc})!`
  
  setResultado(msg, true);

});

function setResultado (msg, isValid) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = ``;
  const p = criaParagrafo();

  if (isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('paragrafo-resultado-wrong');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function criaParagrafo() {
  const p = document.createElement('p');
  return p;
}

function getImc(peso, altura){
  const calc = peso/altura**2;
  return calc.toFixed(2);
}

function getNivelImc(imc){
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >=39.9) {
    return nivel[5];
  }
  
  if (imc >= 34.9){
    return nivel[4];
  }
  
  if (imc >= 29.9){
    return nivel[3];
  }
  
  if (imc >= 24.9){
    return nivel[2];
  }
  
  if (imc >= 18.5){
    return nivel[1];
  }
  
  if (imc < 18.5){
    return nivel[0];
  }

}

