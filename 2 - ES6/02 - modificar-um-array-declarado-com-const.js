const s = [5, 7, 2];
function editInPlace() {
  // Altere apenas o código abaixo desta linha
  const s0 = s[0];
  const s1 = s[1];
  const s2 = s[2];
  s[0] = s2;
  s[1] = s0;
  s[2] = s1;
  console.log(s);
  // Usar s = [2, 5, 7] seria inválido

  // Altere apenas o código acima desta linha
}
editInPlace();