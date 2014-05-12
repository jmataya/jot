var NotesController = require('../controllers/notes_controller');

var Routes = function(app) {
  app.get('/notes', NotesController.index);
  app.get('/notes/:id', NotesController.show);
  app.post('/notes', NotesController.create);
  app.put('/notes/:id', NotesController.update);
  app.del('/notes/:id', NotesController.destroy);
};

module.exports = Routes;
