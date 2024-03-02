let endereco = localStorage.getItem("endereco");

if(endereco == null){
let cep = prompt("Digite seu CEP:");

fetch(`https://viacep.com.br/ws/${cep}/json/`, {method: "GET"})
.then((retornoFetch)=>{
  return retornoFetch.json()
})
.then((retornoApi)=>{
  alert(`${retornoApi.logradouro}, ${retornoApi.complemento} - ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);

  let resposta = prompt("Os dados estão corretos: (sim) ou (não)");

  if (resposta.toLocaleLowerCase()= "sim") {
    localStorage.setItem("endereco", JSON.stringify(retornoApi))
    alert("Dados salvos!!!")
  }
})
}else{
  let atualiza = prompt("Endereço já injormado na base de dados, deseja atualizar: (sim) ou (não)");
  if (atualiza == "sim") {
    pegarEndereço()
  } else {
    alert("Execução finalizada");
  }
}
