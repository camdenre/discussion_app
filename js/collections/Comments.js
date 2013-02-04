var app = app || {};

var CommentList = Backbone.Collection.extend({

  model: app.Comments,

  // Use local storage to save comments, not a remote server
  localStorage: new Backbone.LocalStorage('CommentList'),

  // Todos are sorted by their original insertion order.
  comparator: function( comment ) {
    return comment.get('order')[0];
  }
});

// Create our global collection of **Todos**.
app.Comments = new CommentList();
