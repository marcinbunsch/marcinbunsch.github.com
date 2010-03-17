keys: []

$ ->
  $(document).keydown (e) ->
     chr = String.fromCharCode(e.keyCode).toLowerCase();
     keys.push(chr) if chr.match /[a-z]/
     keys: [] unless 'awesome'.match(new RegExp('^' + keys.join('')))
     if (keys.join("") == "awesome")
       keys: []
       awesomeness()

awesomeness: ->
  prepare 'em'
  $('.message').fadeOut 500, -> relocate()

prepare: (selector) -> 
  element = $(selector);
  $(selector).each (index, item) ->
    el = $(item).clone();
    location = $(item).offset();
    $('body').append el  
    el.css {
      position: 'absolute',
      top: location.top,
      left: location.left
    }

relocate: ->
  widths = [-48, -43, -40, -25, -23, -15, -5, 3, 10, 18, 30]
  top = $('h2').offset().top + 80 + 'px'
  width = $(window).width() / 2 

  $('body > em').each (index, item) ->
    left =  "${ width + widths[index] }px"
    $(item).animate({
      top: top,
      left: left
    }, 500)
