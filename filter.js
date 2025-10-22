const embarcacoes = [
  { id: 1, comprimento: 4.8, potenciaHP: 25, conves: 'aberto', cabineHabitavel: false },
  { id: 2, comprimento: 6.5, potenciaHP: 40, conves: 'aberto', cabineHabitavel: false },
  { id: 3, comprimento: 7.2, potenciaHP: 60, conves: 'aberto', cabineHabitavel: false },
  { id: 4, comprimento: 7.5, potenciaHP: 50, conves: 'fechado', cabineHabitavel: false },
  { id: 5, comprimento: 8.2, potenciaHP: 45, conves: 'aberto', cabineHabitavel: false },
  { id: 6, comprimento: 5.0, potenciaHP: 15, conves: 'fechado', cabineHabitavel: true },
];



function ehMiuda(emb) {
  const regraA = emb.comprimento <= 5 && emb.potenciaHP > 0;
  const regraB = emb.comprimento <= 8 && emb.conves === 'aberto' && emb.potenciaHP <= 50 && !emb.cabineHabitavel;
  const regraC = emb.comprimento <= 8 && emb.conves === 'fechado' && emb.potenciaHP <= 50 && !emb.cabineHabitavel;

  return regraA || regraB || regraC;
}


const miudas = embarcacoes.filter(ehMiuda);


console.log("Embarcações miúdas:");
console.table(miudas);