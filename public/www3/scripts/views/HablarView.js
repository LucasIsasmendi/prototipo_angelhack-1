
define(['jquery', 'underscore', 'Backbone', 'scripts/interfaceVision.js', 'text!./HablarView.tpl', '../models/frases'],
	function ($, _, Backbone, InterfaceVision, HablarTemplate, FrasesModels) {

		var MainView = Backbone.View.extend({

			initialize:function (options) {
				var self = this;
				console.log("hablar inicio");
				this.template = _.template(HablarTemplate);
				this.render();

			},

			render:function () {
				var self= this;
				console.log("hola");

				/*
				var frases = new FrasesModels.FrasesCollection();
				var hrq = frases.fetch();
        hrq.done(function(data){
          console.log("DALE CAMPEON");
          console.log(data);
        });
				*/

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
        this.$el.html(this.template({frases: frases}));
				this.$el.find("#hablar_categoria").show();
        this.$(".categoria").click(function(e){
          console.log("aoaoaoaoao");
          var frasesCategoryId = $(e.target).attr("href");
            Backbone.history.navigate("/frases/"+ frasesCategoryId, {trigger:true});
        });
        console.log("dalegaotoo");

				this.$el.find("li").removeClass("activo");
				this.$el.find("li:nth-child(2)").addClass("activo");

				var contador = 1;
				self.$el.find("li:not(:first-child)").each(function(index, miElemento) {
					$(miElemento).attr('data', contador);
					contador++;
				});

				self.$el.find('.menu_der').click(function(e){
					console.log("menuclickeado");
					Backbone.history.navigate("#hablar/22",{trigger:true});
				});
				self.$el.find('.menu_izq').click(function(e){
					console.log("menuhablarclickeado");
					Backbone.history.navigate("#feeds",{trigger:true});
				});

				self.$el.find(".jsBoton").mouseleave(function(ev) {
					console.log("OUT!");
					var data = $(this).attr('data');
					InterfaceVision.mouseOutFrom(data);
					$(this).removeClass("activo");
				});

				console.log('iniciar interface Vision');
				InterfaceVision.init({delegar: self});


      },
			accionUI: function(accion, itemElegido) {
				if (accion === "menu_izq") {
					console.log('FeedsView recibio invocacion de MENU IZQ');
					Backbone.history.navigate("#feeds",{trigger:true});

				} else if (accion === "menu_der") {
					console.log('FeedsView recibio invocacion de MENU DER');
					var elegida = itemElegido;
					Backbone.history.navigate("#hablar/" + elegida,{trigger:true});
				}
			},

    });

    return MainView;
  });
