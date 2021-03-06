define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/index.html'
], function (
  $,
  _,
  Backbone,
  template
) {

  var IndexView = Backbone.View.extend({

    className: 'container',

    render: function () {
      this.$el.html(template);

      return this;
    }

  });

  return IndexView;
});