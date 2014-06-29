
define(['jquery', 'underscore', 'Backbone', 'text!./HablarView.tpl', '../models/frases'],
	function ($, _, Backbone, HablarTemplate, FrasesModels) {

		var MainView = Backbone.View.extend({

			initialize:function (options) {
				var self = this;
				this.template = _.template(HablarTemplate);
				this.render();

			},

			render:function () {
				var self= this;
        var frases = [
        {
          "id":1,
          "name": "Comunicacion General",
          "frases": [
          "Hola, ¿como estas?",
          "Como fue tu dia?",
          "Puedo ayudarte con algo?",
          "Hasta luego"
          ]
        },
        {
          "id":2,
          "name": "Comunicacion internet",
          "frases": [
          "No tengo internet",
          "Se colgo la computadora",
          "La cuenta de internet no responde",
          "-- otro --"
          ]
        },
        {
          "id":3,
          "name": "Necesidad basica",
          "frases": [
          "Tengo hambre",
          "Tengo sed",
          "Tengo sueño",
          "Necesito ir al baño"
          ]
        },
        {
          "id":4,
          "name": "Urgencia",
          "frases": [
          "No me siento bien",
          "Me duele la cabeza",
          "Estoy acalambrado",
          "-- otro --"
          ]
        }
        ];
        
        this.$el.html(this.template({frases: frases[id].frase, categoria:frases[id].name}));
        this.$(".hablable").click(function(e){
          var fraseAHablar = $(e.target).html();
          this.hablar(fraseAHablar);
            //Backbone.history.navigate("/" {trigger:true});
          });



      },

      hablar:function(frase){
        console.log("voy a decir: fraseee" + frase);
      } 

    });

return MainView;
});
