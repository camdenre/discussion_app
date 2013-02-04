var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#app_container',

  total_posts_template: _.template( $('#total_posts_template').html() ),

  comment_template: _.template( $('#comment_template').html() ),

  events: {
    'click this': 'saveToModel',
  },

  initialize: function() {

    window.app.Comments.on( 'add', this.addOne, this );
   // window.app.Comments.on( 'reset', this.addAll, this );

    window.app.Comments.on( 'all', this.render, this );

    app.Comments.fetch();
  },

  render: function() {
    this.$el.html(this.total_posts_template({total_comments: app.Comments.length}));
    
  },

  addOne: function( comment ) {
    $('#all_comments').append( view.render().el );
  },
/*
  addAll: function() {
    this.$('#todo-list').html('');
    app.Comments.each(this.addOne, this);
  },
*/
  saveToModel: function() {
    alert('yay');
    if ( $('#message_textarea').val().trim() ) {
      app.Comments.create( this.newAttributes() );
      $('#message_textarea').val('');
    }
  },

  // Generate the attributes for a new Comment item.
  newAttributes: function() {
    return {
      message: $('#message_textarea').val().trim(),
      order: [app.Comments.length, 0],
    };
  },
  
});
