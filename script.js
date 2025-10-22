function gerarEmbarcacao() {
  return {
    comprimento: `${(Math.random() * 20 + 5).toFixed(2)} m`,
    motorizacao: Math.random() > 0.5 ? "motor de popa" : "motor interno",
    possuiConvésAberto: Math.random() > 0.5,
    possuiCabineHabitavel: Math.random() > 0.7
  };
}

const embarcacoes = Array(50).fill().map(gerarEmbarcacao);

console.log(embarcacoes);