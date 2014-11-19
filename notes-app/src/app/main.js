(function(){
  var app = angular.module('NotesApp',['uuid']); //[] is for all the dependencies of the StarterApp

  //Configuration Blocks should go here.

  //Constants Configurations go here
  app.constant('AVAILABLE_STORAGE_SYSTEM', ['localStorage','sessionStorage','online']);

  //Module level configurations go here
  app.config(['NotesServiceProvider', function(NotesServiceProvider){
      NotesServiceProvider.configureStorage("localStorage");
  }]);


  //Routes configurations go here
  // app.config(function(){
  // });


})();
