(function() {
  'use strict';
  console.log('sanity check');

  // make the GET request to retrieve the menu contents from the menu API
  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: 'https://galvanize-eats-api.herokuapp.com/menu'
  }).done(function (results) {
    // Manipulate the returned object
    console.log(results.menu);
    var menu = results.menu
    // for loop to append each name
    for (var i = 0; i < menu.length; i++) {
      $('.food-names').append('<li class="item">' + menu[i].name + '</li>')
    }
    $('.food-names > li:first-child').addClass("highlight")
  })

  // $('.food-names').on('ready', 'li:first-child' function () {
  //
  // })
  // highlight selected items
  $('.food-names').on('click', 'li', function () {
    $('li').removeClass("highlight")
    $(this).addClass("highlight")
  })

}());

function organizeList () {

}
