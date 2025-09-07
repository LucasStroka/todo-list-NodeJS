const express = require("express");
const router = express.Router();
const tarefas = require("../controllers/tarefas");

router.get('/tarefas/', tarefas.getTarefas);

router.post("/tarefas/", tarefas.postTarefas);

router.put("/tarefas/:id", tarefas.putTarefas);

router.delete("/tarefas/:id", tarefas.deleteTarefas);

module.exports = router
