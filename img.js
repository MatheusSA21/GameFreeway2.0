let imagemDaEstrada;
let imagemVaca;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somColisao;
let somPonto;

function preload() {
  imagemDaEstrada = loadImage("img/estrada.png");
  imagemVaca = loadImage("img/ator-1.png");
  imagemCarro1 = loadImage("img/carro-1.png");
  imagemCarro2 = loadImage("img/carro-2.png");
  imagemCarro3 = loadImage("img/carro-3.png");
  imagemCarro4 = loadImage("img/carro-1.png");
  imagemCarro5 = loadImage("img/carro-2.png");
  imagemCarro6 = loadImage("img/carro-3.png");

  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
  somColisao = loadSound("songs/colidiu.mp3")
  somPonto = loadSound("songs/pontos.wav")
  somTrilha = loadSound("songs/trilha.mp3")
}