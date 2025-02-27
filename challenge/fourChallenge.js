const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};
const total = object.values(faturamentoEstados).reduce((sum, val) => sum + val, 0);
for (let estado in faturamentoEstados){
    console.log(`${estado}: ${(faturamentoEstados[estado] / total * 100).toFixed(2)}%`);
}
