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
 model.agenda.contatos.push(request.body)  //serve para colocar algo dentro do contatos.js
response.status(200).send()
}

module.exports = {
  getAll,
  //getById
  add
}
