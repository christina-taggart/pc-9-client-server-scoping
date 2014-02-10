$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').html( $(this).data('heading') )
  });

  $('.skill_teller').on('click', function(){
    var url = document.URL;
    var splitURL = url.split('/');
    var skill = splitURL[splitURL.length - 1];
    $('#skill_holder').html(skill)
  })

  $('.meal_teller').on('click', function(){
    var $meals = $('.meal');
    var amount = $meals.length;
    var meal = $meals[Math.floor(Math.random()*amount)];
    var text = $(meal).text();
    $('#meal_holder').html(text)
  })

});
