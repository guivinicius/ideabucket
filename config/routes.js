module.exports = function (app, controllers) {
  'use strict';

  var ideasController = controllers.ideas;

  // Ideas Resource
  app.get('/ideas', ideasController.index);
  app.post('/ideas', ideasController.create);
  app.get('/ideas/:id', ideasController.show);
  app.put('/ideas/:id', ideasController.update);
  app.delete('/ideas/:id', ideasController.delete);

  // Index
  app.get('/', function(req, res){
    res.render('index');
  });

};
