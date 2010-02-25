var keys = [];

$(function() {
  $(document).keydown(function(e) {
    var chr = String.fromCharCode(e.keyCode).toLowerCase();
    if (chr.match(/[a-z]/)) keys.push(chr);

    if (!'awesome'.match(new RegExp('^' + keys.join('')))) {
      keys = [];
    }
    
    if (keys.join('') == 'awesome') {
      keys = [];
      // do awesomeness
      awesomeness(); 
    }
  });
})

function awesomeness() {
  prepare('em');
  $('.message').fadeOut(500, function() {
    relocate();
  });
}

function prepare(selector) {
  var element = $(selector);
  $(selector).each(function(index, item) {
    var el = $(item).clone();
    var location = $(item).offset();
    $('body').append(el);
    el.css({
      position: 'absolute',
      top: location.top,
      left: location.left
    });
  });
}

function relocate() {
  var widths = [-48, -43, -40, -25, -23, -15, -5, 3, 10, 18, 30]
  var top = $('h2').offset().top + 80 + 'px'
  var width = $(window).width() / 2 
  
  $('body > em').each(function(index, item) {
    var left =  width + widths[index] + 'px'
    $(item).animate({
      top: top,
      left: left
    }, 500)
  });
}