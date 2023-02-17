
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraVaca();
  mostraCarro();
  movimentaCarro();
  movimentaVaca();
  verificacolisao();
  exibirPontos();
  marcaPonto();
  regras();

}



