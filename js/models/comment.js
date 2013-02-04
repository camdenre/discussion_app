var app = app || {};

app.Comment = Backbone.Model.extend({

  defaults: {
    profile_pic: 'http://www.wempec.wisc.edu/images/default_profile_image.gif',
    name: 'Anonymous',
    date: '',
    message: '',
    num_up_votes: 0,
    num_down_votes: 0,
    order: [0, 0],
    id: 0
  },

});
