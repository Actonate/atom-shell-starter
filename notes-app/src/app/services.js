(function(){
  var app = angular.module('NotesApp');

  app.provider('NotesService', function(AVAILABLE_STORAGE_SYSTEM){
    //method for saving the notes
    var STORAGE_SYSTEM = "localStorage";
    var SALT = "note-";
    //the private notes array maintaining all the notes
    var notes = {};

    return {
        $get: function(rfc4122){
          return {
            new: function(title, comment){
              //Check for undefined and datatype
              if(title === undefined || typeof title !== "string" || comment === undefined || typeof comment !== "string"){

                return false;
              }

              //check for string length
              if(title.trim().length === 0 || comment.trim().length === 0){
                return false;
              }

              //generate new UUID using the angular-uuid-service rfc4122 (v4)
              var new_note_id = rfc4122.v4();

              var newNote = {
                title: title,
                comment: comment
              };

              //insert it in the notes associated array with key as ID
              notes[new_note_id] = newNote;

              return true;
            },
            delete: function(id){
              return true;
            },
            //
            get: function(id){
              if(id === undefined){
                return notes;
              }
              else{
                  return notes[id];
              }
            },
          };
        },
        configureStorage: function(method){
            //check in the AVAILABLE_STORAGE_SYSTEM constant
            if(AVAILABLE_STORAGE_SYSTEM.indexOf(method) != -1){
              STORAGE_SYSTEM = method;
              return true;
            }
            else{
              return false;
            }
        }
    };


  });



})();
