
fetch("./teste.json", {
    method: "GET"
})
.then((resposta) => {
    return resposta.json();
})
.then((respoObjt) => {
    console.log(respoObjt);
})
.catch((error)=>{
    console.log(error);
})