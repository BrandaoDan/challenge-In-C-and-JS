const faturamento = [1000, 2000, 0, 1500, 3000, 0, 500, 2500, 2700, 0].filter(x => x > 0);
const menorFaturamento = Math.min(...faturamento);
const maiorFaturamento = Math.max(...faturamento);
const media = faturamento.reduce((sum, val) => sum + val, 0) / faturamento.length;
const acimaMedia = faturamento.filter(x => x > media).length;

console.log("Menor faturamento:", menorFaturamento);
console.log("Maior faturamento:", maiorFaturamento);
console.log("Dias acima da média:", acimaMedia);
