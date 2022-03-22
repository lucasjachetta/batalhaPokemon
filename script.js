let carta1 = {
  nome: "Blastoise",
  imagem:
    "https://files.pokefans.net/sprites/home/small/0009-000.png",
  atributos: {
    ataque: 8,
    defesa: 9,
    veloc: 5
  }
};

let carta2 = {
  nome: "Venusaur",
  imagem: "https://files.pokefans.net/sprites/home/small/0003-000.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    veloc: 6
  }
};

let carta3 = {
  nome: "Charizard",
  imagem:
    "https://files.pokefans.net/sprites/home/small/0006-000.png",
  atributos: {
    ataque: 9,
    defesa: 4,
    veloc: 8
  }
};

let carta4 = {
  nome: "Pigeot",
  imagem:
    "https://files.pokefans.net/sprites/home/small/0018-000.png",
  atributos: {
    ataque: 5,
    defesa: 5,
    veloc: 10
  }
};

let carta5 = {
  nome: "Pikachu",
  imagem:
    "https://files.pokefans.net/sprites/home/small/0025-000.png",
  atributos: {
    ataque: 10,
    defesa: 10,
    veloc: 10
  }
};


let carta6 = {
  nome: "Snorlax",
  imagem:
    "https://files.pokefans.net/sprites/home/small/0143-000.png",
  atributos: {
    ataque: 5,
    defesa: 10,
    veloc: 1
  }
};

let cartaMaquina;
let cartaJogador;
let cartas = [carta1, carta2, carta3, carta4, carta5, carta6];

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 6);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (let i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  let atributoSelecionado = obtemAtributoSelecionado();
  let divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = `<p class='resultado-final'>Parabéns, você venceu, ${cartaJogador.nome} possui mais ${atributoSelecionado} do que ${cartaMaquina.nome}</p>`;
    
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = `<p class='resultado-final'>Você perdeu, ${cartaMaquina.nome} possui mais ${atributoSelecionado} do que ${cartaJogador.nome}</p>`;
  } else {
    htmlResultado = "<p class='resultado-final'>Vocês empataram!</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  let divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let tagHTML = "<div id='opcoes' class='carta-status'>";

  let opcoesTexto = "";
  for (let atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  let tagHTML = "<div id='opcoes' class='carta-status'>";

  let opcoesTexto = "";
  for (let atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
}