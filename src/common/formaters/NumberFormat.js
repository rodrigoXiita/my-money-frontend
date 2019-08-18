export const currencyFormat = (val) => {
  return val != (null && undefined) ? val.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}):  "0".toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
