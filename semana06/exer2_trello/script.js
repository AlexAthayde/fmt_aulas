function getUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = {
        nome: "Alex",
        idade: 34,
        email: "alex.avribeiro@gmail.com",
      };
      resolve(user);
    }, 2000);
  });
}

async function playGetUser() {
   let retorno = await getUserInfo();
   console.log(retorno);
}

playGetUser()