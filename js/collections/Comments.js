var app = app || {};

var CommentList = Backbone.Collection.extend({

  model: app.Comment,

  // Use local storage to save comments, not a remote server
  localStorage: new Backbone.LocalStorage('CommentList'),

  // Todos are sorted by their original insertion order.
  comparator: function( comment ) {
    return comment.get('order')[0];
  }
});

app.Comments = new CommentList();
