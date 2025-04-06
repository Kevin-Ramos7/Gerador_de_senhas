
const readline = require("readline");

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

function gerarSenha(tamanho,incluirSimbolos){
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+{}[]:;<>,.?/~`-=";

  let todosCaracteres = letrasMaiusculas + letrasMinusculas + numeros

   if(incluirSimbolos){
     todosCaracteres += simbolos
   }


  let senha = ""

  for(let i =0; i < tamanho ; i++){
     const indiceAleatorio = Math.floor(Math.random() * todosCaracteres.length)
     senha += todosCaracteres[indiceAleatorio];
  }

   return senha

}

rl.question("Digite o tamanho da senha desejada: ", (input) => {
    const tamanho = parseInt(input)

  if(isNaN(tamanho) || tamanho <= 0){
    console.log("Por favor, digite um número válido.")
    rl.close()
  } else {
    rl.question("Deseja incluir simbolos ? (s/n): ", (resposta)=>{
    const incluirSimbolos = resposta.toLowerCase() === "s"
    const senha =  gerarSenha(tamanho, incluirSimbolos)
    console.log(` Senha gerada: ${senha} `)
    rl.close()
    })
  }
})




