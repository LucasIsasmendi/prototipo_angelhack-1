define(['jquery', 'underscore', 'Backbone', 'text!./MainView.tpl'],
    function ($, _, Backbone, MainTemplate) {

        var MainView = Backbone.View.extend({

            initialize:function (options) {
                this.template = _.template(MainTemplate);
                this.render();

            },

            render:function () {
                console.log("hola");
                // Setting view HTML from a template
                this.$el.html(this.template({nombre:"hola"}));

               // return this.$el;
            }

        });

        return MainView;
    });
 