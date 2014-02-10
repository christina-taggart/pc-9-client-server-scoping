$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').html( $(this).data('heading') )
  });

  // What other events do you need to bind to make the other pages work?
});
