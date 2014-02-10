$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').html( $(this).data('heading') )
  });

  $('.skill_teller').on('click', function(){
    console.log(this)
    var url = document.URL;
    var splitURL = url.split('/');
    var skill = splitURL[splitURL.length - 1];
    $('#skill_holder').html(skill)

  })
  // What other events do you need to bind to make the other pages work?
});
