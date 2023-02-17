let xCarros = [500, 500, 500, 500, 500, 500];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [5.4, 6, 5, 3.5, 4, 3];
let comprimentoCarro = 50
let alturaCarro = 40


function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];

    if (xCarros[i] < -50) {
      xCarros[i] = 600;
    }
  }
}
