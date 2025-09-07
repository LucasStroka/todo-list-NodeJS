// GET /tarefas
// POST /tarefas
// PUT /tarefas/:id (marcar como concluída)
// DELETE /tarefas/:id

const { tarefas} = require("../database/data");
let { id } = require("../database/data");

const arquiveManager = require('./fileManager')

const postTarefas = (req, res) => {
  const { descricao } = req.body;

  if (!descricao) return res.status(404).json("Missing Body");
  //   let newID =
  let newTarefa = {
    id: Date.now(),
    descricao,
    feito: false,
  };
  tarefas.push(newTarefa);
  res.status(201).json({ "Tarefa Criada": newTarefa });
  arquiveManager.writer(tarefas)
};

const getTarefas = (req, res) => {
  res.status(200).json(tarefas);
};

const putTarefas = (req, res) => {
  const { id } = req.params;

  let index = tarefas.findIndex((p) => p.id == id);
  if (index === -1) return res.status(404).json("Invalid ID");
  const oldTarefa = {
    id: tarefas[index].id,
    descricao: tarefas[index].descricao,
    feito: true,
  };

  tarefas[index] = oldTarefa;
  res.status(200).json(oldTarefa);
};

const deleteTarefas = (req, res) => {
  const { id } = req.params;
  let index = tarefas.findIndex((p) => p.id == id);
  if (index === -1) return res.status(404).json("Invalid ID");

  tarefas.splice(index, 1);
  res.status(200).json(`Deleted id: ${id}`);
};

module.exports = {
  postTarefas,
  putTarefas,
  getTarefas,
  deleteTarefas,
};
