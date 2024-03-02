
let nome = prompt('Qual seu nome?');
let idade = prompt('Qual sua idade?');
let cidade = prompt("Qual sua cidade?");

localStorage.setItem("name", nome);
localStorage.setItem("age", idade);
localStorage.setItem("city", cidade);