

let xVaca = 100
let yVaca = 366;
let colisao = false
let pontos = 0;

function mostraVaca() {
  image(imagemVaca, xVaca, yVaca, 30, 30);
}

function movimentaVaca() {
  if (keyIsDown(UP_ARROW)) {
    yVaca -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yVaca += 3;
  }
}

function verificacolisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xVaca, yVaca, 15)
    if (colisao) {
      colidiu()
    }
  }
}

function colidiu() {
  posicaoInicial();
  pontos -= 1;
  somColisao.play();
}
function posicaoInicial() {
  yVaca = 366;
}

function exibirPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(250, 80, 50));
  text(pontos, width / 5, 30);
}

function regras() {
  if (yVaca > 366) { //nao pode ir mais baixo q a posiçao inicial
    yVaca = 366
  } if (pontos < 0) { //sem pontos negativos
    pontos++
  }
}
function marcaPonto() {
  if (yVaca < 12) {
    pontos++
    yVaca = 366
    somPonto.play()
  }

}