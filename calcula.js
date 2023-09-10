function calculaidade(anodenascimento, anoatual ){
   if (anodenascimento <= anoatual ){ 
        let calculo = anoatual-anodenascimento;
        return "Você tem " + calculo + " anos."

     }
   return "As datas informadas não correspondem, você veio do futuro?";
}
console.log (calculaidade(2001,2023));
console.log (calculaidade(1995,2005));
console.log(calculaidade(2002, 1990));