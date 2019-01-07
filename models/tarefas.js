var mongoose = require('mongoose');

var tarefaSchema = new mongoose.Schema({
	titulo: {
		type: String,
		required: true
	},
	descricao: {
		type: String,
		required: true
	},
	dia: {
		type: String,
		required: true
	},
	horario: {
		type: String,
		required: true
	}
});

module.exports =  mongoose.model('Tarefas', tarefaSchema);