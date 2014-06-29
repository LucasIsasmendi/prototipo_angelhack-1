define(['jquery', 'underscore', 'Backbone'],
    function ($, _, Backbone) {

   
    Frases = Backbone.Model.extend({
        urlRoot: "/frases",
    });
 
    FrasesCollection = Backbone.Collection.extend({
        model: Frases,
        url:"/frases"
    });

 
    return {
        Frase: Frases,
        FrasesCollection: FrasesCollection
    };
 
});