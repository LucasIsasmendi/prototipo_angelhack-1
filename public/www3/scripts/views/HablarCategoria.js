
define(['jquery', 'underscore', 'Backbone', 'text!./HablarCategoria.tpl', '../models/frases'],
	function ($, _, Backbone, HablarTemplate, FrasesModels) {

		var MainView = Backbone.View.extend({

			initialize:function (options) {
				var self = this;
				this.template = _.template(HablarTemplate);
				self.categoriaElegida = options.categoriaElegida;
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

				console.log('>>>>>>>>>>>', frases)
        this.$el.html(this.template({frases: frases[self.categoriaElegida].frases, categoria:frases[self.categoriaElegida].name}));
				this.$el.find("#hablar_cetegoria_items").show();

        this.$(".hablable").click(function(e){
          var fraseAHablar = $(e.target).html();
          this.hablar(fraseAHablar);
            //Backbone.history.navigate("/" {trigger:true});
          });


				this.$el.find("li").removeClass("activo");
				this.$el.find("li:nth-child(2)").addClass("activo");

				var contador = 1;

				self.$el.find("li:not(:first-child)").each(function(index, miElemento) {
					$(miElemento).attr('data', contador);
					contador++;
				});

				this.$('.menu_der').click(function(e){
					console.log("menuclickeado");
					this.hablar("te kb kachimba");
					Backbone.history.navigate("#",{trigger:true});
				});
				this.$('.menu_izq').click(function(e){
					console.log("menuhablarclickeado");
					Backbone.history.navigate("#menuHablar",{trigger:true});
				});

				self.$el.find("#hablar_categoria").show();

      },

      hablar:function(frase){
        console.log("voy a decir: fraseee" + frase);
      }

    });

return MainView;
});
