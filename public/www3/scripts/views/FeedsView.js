
define(['jquery', 'underscore', 'Backbone', 'text!./FeedsView.tpl', 'text!../../data.json'],
	function ($, _, Backbone, FeedsTemplate, feedData) {

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
				var self= this;
				var feeds = feedData;
				var object = JSON.parse(feeds);

            // Setting view HTML from a template
            this.$el.html(this.template({feeds: object.dataos}));

						this.$('.menu_der').click(function(e){
							console.log("menuclickeado");
							Backbone.history.navigate("#menuFeed",{trigger:true});
						});

						console.log('bindeando');
						this.$('.menu_izq').click(function(e){
							console.log("menuhablarclickeado");
							Backbone.history.navigate("#menuHablar",{trigger:true});
						});
           // return this.$el;
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
