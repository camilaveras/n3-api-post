const model = require("../model/contatos"); //to na pasta model e chamo o arquivo contatos

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

//const getById = (request, response) => {
 // const id = request.params.id;
 // response.status(200).send(contatos.find(tarefa => tarefa.id == id));
//};

const add = (request, response ) => {
  let Dadoscontato = request.body
  Dadoscontato.id = Math.random().toString(36).substr(-8)
 model.agenda.contatos.push(Dadoscontato)  //serve para colocar algo dentro do contatos.js
response.status(200).send()
}


const getAll = (request, responde) => { 
  const contato = request.body.nome
  const Person = model.agenda.contatos.filter(function(personObj){
  let f = personObj.agenda.nome.indexOf(contato)
  console.log(f);
  
});
if (name === contato){
  response.status(200).send("erro")




console.log(Person);

}


module.exports = {
  getAll,
  //getById
  add

}


 // console.log(request.body.nome)//manipulando o que chega na porta da requisição
