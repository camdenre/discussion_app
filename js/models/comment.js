var app = app || {};

app.Comment = Backbone.Model.extend({

  defaults: {
    profile_pic: '',
    name: '',
    date: '',
    message: '',
    num_up_votes: 0,
    num_down_votes: 0,
    order: [0, 0]
  },

});
