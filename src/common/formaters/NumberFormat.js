
export const currencyFormat = (val) => {
  return val.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
