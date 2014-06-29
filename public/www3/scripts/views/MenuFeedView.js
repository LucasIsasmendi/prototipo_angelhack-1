
define(['jquery', 'underscore', 'Backbone', 'text!./MenuFeedView.tpl'],
	function ($, _, Backbone, MenuFeedTemplate) {

		var MainView = Backbone.View.extend({

			initialize:function (options) {
				var self = this;
				console.log("mama");
				this.template = _.template(MenuFeedTemplate);
				this.render();
				this.renderConFeeds([{nombre:"hola"},{nombre:"chau"}]);

			},

			render:function () {
				var self= this;
				console.log("hola");
				var feeds = [{nombre:"hola"},{nombre:"chau"}];
				console.log(this.feeds);
                // Setting view HTML from a template
                this.$el.html(this.template({feeds: feeds}));

               // return this.$el;
           },

      renderConFeeds:function(feeds){
           	var self= this;
           	console.log("hola");
           	console.log(feeds);
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
