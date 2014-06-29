
define(['jquery', 'underscore', 'Backbone', 'scripts/interfaceVision.js' ,'text!./FeedsView.tpl', 'text!../../data.json'],
	function ($, _, Backbone, InterfaceVision, FeedsTemplate, feedData) {

		var MainView = Backbone.View.extend({

			initialize:function (options) {
				var self = this;
				console.log("mama");
				this.template = _.template(FeedsTemplate);
				this.render();
				//this.renderConFeeds([{nombre:"hola"},{nombre:"chau"}]);
				this.feeds = "holaaaa";
			},

			render:function () {
				var self = this;
				var feeds = feedData;
				var object = JSON.parse(feeds);

            // Setting view HTML from a template
            this.$el.html(this.template({feeds: object.dataos}));

						this.$el.find("li").removeClass("activo");
						this.$el.find("li:nth-child(2)").addClass("activo");

						var contador = 1;
						self.$el.find("li:not(:first-child)").each(function(index, miElemento) {
							$(miElemento).attr('data', contador);
							contador++;
						});

						self.$el.find('.menu_der').click(function(e){
							console.log("menuclickeado");
							Backbone.history.navigate("#menuFeed",{trigger:true});
						});
						self.$el.find('.menu_izq').click(function(e){
							console.log("menuhablarclickeado");
							Backbone.history.navigate("#menuHablar",{trigger:true});
						});

						self.$el.find(".jsBoton").mouseout(function(ev) {
							console.log("OUT!");
							var data = $(this).attr('data');
							InterfaceVision.mouseOutFrom(data);
							$(this).removeClass("activo");
						});
           // return this.$el;

					InterfaceVision.init({delegar: self});
      },

			accionUI: function(accion) {
				if (accion === "menu_izq") {
					console.log('FeedsView recibio invocacion de MENU IZQ');
					Backbone.history.navigate("#menuHablar",{trigger:true});

				} else if (accion === "menu_der") {
					console.log('FeedsView recibio invocacion de MENU DER');
					Backbone.history.navigate("#menuFeed",{trigger:true});
				}
			},

			renderConFeeds:function(feeds){
				var self= this;
				console.log("hola");
				console.log(feeds);
				response = feedData;
				console.log(response);
			    // Setting view HTML from a template
			this.$el.html(this.template({feeds: feeds}));


			    /*var mySwiper = new Swiper('.swiper-container',{
			    	pagination: '.pagination',
			    	paginationClickable: true,
			    	mode: 'vertical'
			    });*/
			}

        });

return MainView;
});
