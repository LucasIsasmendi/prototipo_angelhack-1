
define(['jquery', 'underscore', 'Backbone', 'scripts/interfaceVision.js', 'text!./HablarCategoria.tpl', '../models/frases'],
	function ($, _, Backbone, InterfaceVision, HablarTemplate, FrasesModels) {

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

			self.audios = [
				{
					"id":1,
					"name": "Comunicacion General",
					"audios": [
					"1_hola_como_estas.mp3",
					"1_como_fue_tu_dia.mp3",
					"1_puedo_ayudarte_con_algo.mp3",
					"1_hasta_luego.mp3"
					]
				},
				{
					"id":2,
					"name": "Comunicacion internet",
					"audios": [
					"2_no_tengo_internet.mp3",
					"2_se_colgo_la_compu.mp3",
					"2_la_cuenta_de_internet_no_responde.mp3",
					"-- otro --"
					]
				},
				{
					"id":3,
					"name": "Necesidad basica",
					"audios": [
					"3_tengo_hambre.mp3",
					"3_tengo_sed.mp3",
					"3_tengo_sueño.mp3",
					"3_necesito_ir_al_banio.mp3"
					]
				},
				{
					"id":4,
					"name": "Urgencia",
					"audios": [
					"4_no_me_siento_bien.mp3",
					"4_me_duele_la_cabeza.mp3",
					"4_estoy_acalambrado.mp3",
					"-- otro --"
					]
				}
				];

				console.log('>>>>>>>>>>>', frases)
        this.$el.html(this.template({frases: frases[self.categoriaElegida].frases, categoria: frases[self.categoriaElegida].name}));
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
					alert("VAMO PAPA!");
					Backbone.history.navigate("#",{trigger:true});
				});
				this.$('.menu_izq').click(function(e){
					console.log("menuhablarclickeado");
					Backbone.history.navigate("#menuHablar",{trigger:true});
				});

				self.$el.find(".jsBoton").mouseleave(function(ev) {
					console.log("OUT!");
					var data = $(this).attr('data');
					InterfaceVision.mouseOutFrom(data);
					$(this).removeClass("activo");
				});

				self.$el.find("#hablar_categoria").show();
				console.log('iniciar interface Vision');
				InterfaceVision.init({delegar: self});
      },

/*
{
	"id":4,
	"name": "Urgencia",
	"audios": [
	"4_no_me_siento_bien.mp3",
	"4_me_duele_la_cabeza.mp3",
	"4_estoy_acalambrado.mp3",
	"-- otro --"
	]
}
*/

			accionUI: function(accion, itemElegido) {
				var self = this;
				console.log('ACCION UI')
				if (accion === "menu_izq") {
					console.log('FeedsView recibio invocacion de MENU IZQ');
					Backbone.history.navigate("#menuHablar",{trigger:true});

				} else if (accion === "menu_der") {
					console.log('HABLAR CATEGORIA recibio invocacion de MENU DER');
					var elegida = itemElegido;

					console.log("AUDIOS:", self.audios);
					console.log("cat elegida:", self.categoriaElegida);

					var miAudio = self.audios[self.categoriaElegida];
					var supercool = miAudio.audios[itemElegido-1];
					self.hablar(supercool);

					setTimeout(function() {
						Backbone.history.navigate("#/feeds",{trigger:true});
					}, 1000);

				}
			},

			hablar:function(audios){
				console.log("voy a decir: fraseee" + audios);
				console.log(audios.toString());
				audios = audios.toString();
				audios = audios.split(" ");
				query = "./mp3/"+audios
				console.log(audios);
				//query+="&tl=es-ar";
					//console.log(query);
					var $myVideo = $("#videolindo"); // document.getElementsByTagName('video')[0];
					console.log(query);
					$myVideo.src = encodeURI(query);
					$myVideo.load();
					$myVideo.play();

			}

    });

return MainView;
});
