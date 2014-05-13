var mongoose = require('mongoose');
var thunkify = require('thunkify');

var NoteSchema = mongoose.Schema({
  title: String,
  contents: String,
  meta: {
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  }
});

NoteSchema.method('persist', function() {
  return thunkify(this.save.bind(this));
});

var Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
