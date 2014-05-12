var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
  title: String,
  contents: String,
  meta: {
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  }
});

var Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
