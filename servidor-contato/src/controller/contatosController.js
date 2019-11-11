const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

function converterData(data) {
  let arrData = data.split('/');

  let dataConvertida = new Date(arrData[2], arrData[1] - 1, arrData[0]);
  // console.log("a dataConvertida é: " + dataConvertida);

  return dataConvertida;
}

function pegarSigno(contato) {

  dataConvertida = converterData(contato.dataNascimento);

  let mes = dataConvertida.getMonth();
  let dia = dataConvertida.getDate();
  // console.log(`O dia é ${dia} e o mês é ${mes}`)
  let signo;

  if ((mes == 2 && dia >= 21) || (mes == 3 && dia <= 19)) {
    signo = "Áries"
  } else if ((mes == 3 && dia >= 20) || (mes == 4 && dia <= 20)) {
    signo = "Touro"
  } else if ((mes == 4 && dia >= 21) || mes == 5 && dia <= 21) {
    signo = "Gêmeos"
  } else if ((mes == 5 && dia >= 22) || (mes == 6 && dia <= 22)) {
    signo = "Câncer"
  } else if ((mes == 6 && dia >= 23) || (mes == 7 && dia <= 22)) {
    signo = "Leão"
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signo = "Virgem"
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signo = "Libra"
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 21)) {
    signo = "Escorpião"
  } else if ((mes == 10 && dia >= 22) || (mes == 0 && dia <= 19)) {
    signo = "Capricórnio"
  } else if ((mes == 0 && dia >= 20) || (mes == 1 && dia <= 18)) {
    signo = "Aquário"
  } else if ((mes == 1 && dia >= 19) || (mes == 2 && dia <= 20)) {
    signo = "Peixes"
  } else {
    signo = "Não conseguimos descobrir seu signo, insira uma data no formato DD/MM/AAAA"
  }
  contato.signo = signo
  return signo

}



const add = (request, response) => {
  let contato = request.body
  let baseDados = model.agenda.contatos

  if (baseDados.find(dado => dado.nome === contato.nome)) {
    response.status(400).send('Esse contato já existe em nossa base!')
  } else if (!contato.nome || !contato.dataNascimento || !contato.celular) {
    response.status(401).send('Estão faltando dados para envio. Tente novamente.')
  } else {
    contato.id = Math.random().toString(36).substr(-8)
    baseDados.push(contato)
    response.status(201).send(`Oi, ${contato.nome}! O seu signo é ${pegarSigno(contato)}!`)
  }
}

module.exports = {
  getAll,
  add
}