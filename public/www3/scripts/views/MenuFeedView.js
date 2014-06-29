
define(['jquery', 'underscore', 'Backbone', 'text!./MenuFeedView.tpl'],
	function ($, _, Backbone, MenuFeedTemplate) {

		var MainView = Backbone.View.extend({

			initialize:function (options) {
				var self = this;
				console.log("mama");
				this.template = _.template(MenuFeedTemplate);
				this.render();
			},

			render: function() {
				var self = this;
				console.log("hola");
        this.$el.html(this.template({}));

				this.$el.find("#menuFeed").show();
				this.$('.botonMenuTopLeft').click(function(e) {
					console.log("menuhablarclickeado");
					Backbone.history.navigate("#feeds",{trigger:true});
				});
      }

    });

return MainView;
});
