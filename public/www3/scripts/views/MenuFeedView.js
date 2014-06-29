
define(['jquery', 'underscore', 'Backbone', 'scripts/interfaceVision.js', 'text!./MenuFeedView.tpl'],
	function ($, _, Backbone, InterfaceVision, MenuFeedTemplate) {

		var MainView = Backbone.View.extend({

			initialize:function (options) {
				var self = this;
				console.log("mama");
				this.template = _.template(MenuFeedTemplate);
				this.render();
			},

			render: function() {
				var self = this;
				console.log("hola, menu de 4");
        this.$el.html(this.template({}));

				this.$el.find("#menuFeed").show();
				this.$('.botonMenuTopLeft').click(function(e) {
					console.log("menuhablarclickeado");
					Backbone.history.navigate("#feeds",{trigger:true});
				});

				console.log('inicializando InterfaceVision');
				InterfaceVision.init({delegar: self});
      },
			accionUI: function(accion) {
				var self = this;
				if (accion === "botonTopLeft") {
					console.log("menuhablarclickeado");
					Backbone.history.navigate("#feeds",{trigger:true});

				} else if (accion === "botonTopRight") {
					console.log('FeedsView recibio invocacion de MENU DER');

	          var boton = $("div.animacion_megusta");
	          var icono = boton.find("div.icono");


	          boton.fadeIn(500);
	          icono.css("top", "0%");
	          icono.css("opacity", "0");
	          icono.delay(100).animate({ top:"45%", opacity:1 }, "easeInOut");
	          icono.delay(400).animate({ top:"100%", opacity:0 }, "easeInOut");
	          boton.delay(700).fadeOut(500);

					setTimeout(function() {
						Backbone.history.navigate("#feeds",{trigger:true});
					}, 2200);
					// Backbone.history.navigate("#menuFeed",{trigger:true});
				}
			},

    });

return MainView;
});
