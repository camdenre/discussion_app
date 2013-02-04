var app = app || {};

app.AppView = Backbone.View.extend({

  total_posts_template: _.template( $('#total_posts_template').html() ),

  comment_template: _.template( $('#comment_template').html() ),

  events: {
    'click #submit': 'saveToModel',
    'focus #message_textarea': 'clearText',
    'blur #message_textarea': 'fillInDefault',
    'click .up_vote': 'upVotePlusOne',
    'click .down_vote': 'downVotePlusOne'
  },

  initialize: function() {

    window.app.Comments.on( 'add', this.addOne, this );
    window.app.Comments.on( 'reset', this.addAll, this );
    window.app.Comments.on( 'all', this.render, this );

    app.Comments.fetch();
  },

  render: function() {
    $('#num_comments').html(this.total_posts_template({total_comments: app.Comments.length}));
    this.addAll();
    return this;
  },

  addOne: function( comment ) {
    $('#all_comments').append( this.comment_template( comment.toJSON() ) );
  },

  addAll: function() {
    this.$('#all_comments').html('');
    app.Comments.each(this.addOne, this);
  },

  saveToModel: function() {
    if ( $('#message_textarea').val().trim() ) {
      app.Comments.create( this.newAttributes() );
      $('#message_textarea').val('Type your comments here...');
    }
  },

  clearText: function() {
    if ($('#message_textarea').val().trim() === 'Type your comments here...') {
      $('#message_textarea').val('');
    }
  },

  fillInDefault: function() {
    if($('#message_textarea').val().trim() === '') {
      $('#message_textarea').val('Type your comments here...');
    }
  },
  
  upVotePlusOne: function(ev) {
    var specific_model = app.Comments.get(parseInt($(ev.target).parents('.comment:first').attr('id')) );
    specific_model.set("num_up_votes", specific_model.get("num_up_votes") + 1);
  },

  downVotePlusOne: function(ev) {
    var specific_model = app.Comments.get(parseInt($(ev.target).parents('.comment:first').attr('id')) );
    specific_model.set("num_down_votes", specific_model.get("num_down_votes") + 1);
  },

  // Generate the attributes for a new Comment item.
  newAttributes: function() {
    return {
      message: $('#message_textarea').val().trim(),
      profile_pic: 'http://www.wempec.wisc.edu/images/default_profile_image.gif',
      order: [app.Comments.length, 0],
      id: app.Comments.length
    };
  },
  
});
