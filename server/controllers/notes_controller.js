var parse = require('co-body');
var Note = require('../models/note');

var NotesController = {

  index: function *(next) {
    this.body = 'The index';
  },

  show: function *(next) {
    this.body = 'The show for ' + this.params.id;
  },

  create: function *(next) {
    var noteParams = yield parse(this);
    var note = new Note({
      title: noteParams.title,
      content: noteParams.content
    });

    note.save(function(err, note) {
      if (err) {
        return console.error(err);
      }
    });

    yield next;

    this.body = JSON.stringify(note);
    this.status = 201;
  },

  update: function *(next) {
    this.body = 'The update';
  },

  destroy: function *(next) {
    this.body = 'The destroy';
  }

};

module.exports = NotesController;
