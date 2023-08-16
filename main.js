
document.getElementById("instruções").style.display = "none";
document.getElementById("game").style.display = "none";

document.getElementById("start-button-welcome").addEventListener("click", function() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("instruções").style.display = "block";
});

document.getElementById("start-button-play").addEventListener("click", function() {
    document.getElementById("instruções").style.display = "none";
    document.getElementById("game").style.display = "block";
});

const tiposMonstros = ["besta", "dragão", "gigante", "morto"];

const monstros = {
  besta: ["images/lobo.png", "images/mamute.png", "images/ptero.png", "images/tigre.png"],
  dragão: ["images/fdragon.png", "images/gdragon.png", "images/rdragon.png", "images/wyvern.png"],
  gigante: ["images/ggelo.png", "images/gpedra.png", "images/ogro.png", "images/troll.png"],
  morto: ["images/skeleton.png", "images/fantasma.png", "images/vampire.png", "images/zumbi.png"],
};

let tipoAleatorio = tiposMonstros[Math.floor(Math.random() * tiposMonstros.length)];
const monstroAleatorio = monstros[tipoAleatorio][Math.floor(Math.random() * 4)];
const monstroAleatorioImgSrc = `${monstroAleatorio}`;

const imgMonstro = document.getElementById("monstros-img");
imgMonstro.src = monstroAleatorioImgSrc;
console.log()

const checkButton = document.getElementById("check-button");
const monsterInput = document.getElementById("type-monster");

checkButton.addEventListener("click", function () {
  const criatura = monsterInput.options[monsterInput.selectedIndex].value;
  let message = "";
  if (criatura === tipoAleatorio) {
    message = "Parabéns, você acertou!";
  } else {
    message = "Que pena, tente novamente!";
  }
  document.getElementById("mensagem").textContent = message;

  // Gera um novo monstro aleatório
  const novoTipoAleatorio = tiposMonstros[Math.floor(Math.random() * tiposMonstros.length)];
  const novoMonstroAleatorio = monstros[novoTipoAleatorio][Math.floor(Math.random() * 4)];
  const novoMonstroAleatorioImgSrc = `${novoMonstroAleatorio}`;
  imgMonstro.src = novoMonstroAleatorioImgSrc;
  tipoAleatorio = novoTipoAleatorio;
});