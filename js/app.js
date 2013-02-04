var app = app || {};

$(function() {
  localStorage.clear();
  new app.AppView({ el: $("#app_container") });

});
