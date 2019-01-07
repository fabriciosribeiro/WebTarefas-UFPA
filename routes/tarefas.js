var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  mongoose.model('Tarefas').find().then((tarefas) => {
    res.render('index',{
      tarefas: tarefas
    });
  },next);
});

router.get('/add',(req,res,next)=>{
  res.render('add');
});

router.post('/',(req,res,next)=>{
  var Tarefa = mongoose.model('Tarefas');
  var m = new Tarefa(req.body);

  m.save().then((result) => {
    res.redirect('/');
  },next);

});

router.get('/edit/:id',(req,res,next)=>{
  const {id} = req.params;

  mongoose.model('Tarefas').findOne({_id: id}).then((tarefa) => {
    res.render('edit', {tarefa: tarefa});
  },next);


});

router.put('/edit/:id', (req,res,next)=>{
  const {id} = req.params;

  mongoose.model('Tarefas').update(  { _id: id },
    {
      $set: {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        dia: req.body.dia,
        horario: req.body.horario
      }
    }).then((tarefa) => {
      res.redirect('/')
    },next);

  });

  router.delete('/delete/:id', (req,res,next)=>{
    const {id} = req.params;

    mongoose.model('Tarefas').remove({_id: id}).then((tarefa) => {
      res.redirect('/')
    },next);

  });

  module.exports = router;
