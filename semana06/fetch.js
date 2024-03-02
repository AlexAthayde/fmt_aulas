// // showInfo();

// // // objeto
// // let user = { nome: "Alex", idade: "35"};

// let userName = "Alex";
// let idade = 23;

// // add no localstorage
// localStorage.setItem("nome", userName);
// localStorage.setItem("cidade", "Ribeirão Preto");
// localStorage.setItem("idade", idade);
// localStorage.setItem("estaAtivo", true);

// // add no localstorage
// localStorage.removeItem("");

// localStorage.setItem();
// // add no localstorage

// localStorage.setItem();
// // add no localstorage

let options = {
    method: 'GET',
};

fetch('https://pokeapi.co/api/v2/pokemon/pikachu', options)
.then((respostaFetch) => {
    // console.log(resposta);
    return respostaFetch.json();
})
.then((respostaApi) => {
    console.log(respostaApi);  
})
.catch(() => {

})