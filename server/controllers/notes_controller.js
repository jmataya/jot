var parse = require('co-body');
var Note = require('../models/note');

var NotesController = {

  index: function *(next) {
    this.body = yield Note.find({}).exec();
    this.status = 200;
  },

  show: function *(next) {
    this.body = yield Note.find({_id: this.params.id}).exec();
    this.status = 200;
  },

  create: function *(next) {
    var error = undefined;
    var noteParams = yield parse(this);
    var note = new Note(noteParams);

    try {
      yield note.persist()();
    } catch (err) {
      error = { error: err.message };
    }

    if (error) {
      this.body = JSON.stringify(error);
      this.status = 500;
    } else {
      this.body = JSON.stringify(note);
      this.status = 201;
    }
  },

  update: function *(next) {
    this.body = 'The update';
  },

  destroy: function *(next) {
    this.body = 'The destroy';
  }

};

module.exports = NotesController;
