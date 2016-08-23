(function() {
  'use strict';

  console.log('sanity check');
  var total = 0;

  $.ajax({
    method: 'GET',
    dataType: 'json',
    url: 'https://galvanize-eats-api.herokuapp.com/menu'
  }).done(function (results) {
    console.log(results.menu);
    console.log(results.menu[4].type);
    var menu = results.menu
    for (var i = 0; i < menu.length; i++) {
      $('.food-names').append('<li class="item" value="' + menu[i].price + '" name="' + menu[i].name + '">' + menu[i].name + ' ' + menu[i].price + '</li>')
    }
    $('.food-names > li:first-child').addClass("highlight")
  })
  $('.food-names').on('click', 'li', function () {
    $('li').removeClass("highlight")
    $(this).addClass("highlight")
  })

  $('#add-food').on('click', function () {
    var amount = $('.quantity-form').val()
    console.log($('.quantity-form').val());
    if (amount <= 100 && amount >= 0 ) {
      for (var i = 0; i < amount; i++) {
        $('.checkout-items').append('<li>' + $('.highlight').attr('name') + ' ' + $('.highlight').attr('value') + '</li>');
         total += parseFloat($('.highlight').attr('value'))
      }
      $('p').empty().append(total.toFixed(2))
    }
  })
}());
