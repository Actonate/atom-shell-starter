(function(){
  var app = angular.module('NotesApp');

  //The primary NotesController for viewing and adding new notes
  app.controller('NotesController', function($scope, NotesService){
    $scope.notes = NotesService.get();
    $scope.newNote = {};

    $scope.addNote = function(){
      if(NotesService.new($scope.newNote.title, $scope.newNote.comment)){
        $scope.newNote = {};
      }
    };

    $scope.isValid = function(){
      if($scope.newNote.title === undefined || $scope.newNote.title === ''  || $scope.newNote.comment === '' || $scope.newNote.comment === undefined)
      {
        return true;
      }
      else{
        return false;
      }
    };

  });
})();
