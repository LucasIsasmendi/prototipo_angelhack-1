OjosQueHablan.module("Entities", function(Entities, OjosQueHablan, Backbone, Marionette, $, _){
  Entities.Frases = Backbone.Model.extend({
    urlRoot: '/hablar'
  });

  Entities.FrasesCollection = Backbone.Collection.extend({
    model: Entities.Frases
  });

  var frases;

  var initializeFrases = function(){

    
    frases = new Entities.FrasesCollection([{}]);
    
  };

  var API = {
    getFrasesEntities: function(){
      if(frases === undefined){
        initializeFrases();
      }
      return frases;
    }
  };

  OjosQueHablan.reqres.setHandler("frases:entities", function(){
    return API.getFrasesEntities();
  });
});
