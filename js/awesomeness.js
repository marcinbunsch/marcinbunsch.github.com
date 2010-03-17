(function(){
  var awesomeness, keys, prepare, relocate;
  keys = [];
  $(function() {
    return $(document).keydown(function(e) {
      var chr;
      chr = String.fromCharCode(e.keyCode).toLowerCase();
      if (chr.match(/[a-z]/)) {
        keys.push(chr);
      }
      if (!('awesome'.match(new RegExp('^' + keys.join(''))))) {
        keys = [];
      }
      if ((keys.join("") === "awesome")) {
        keys = [];
        return awesomeness();
      }
    });
  });
  awesomeness = function awesomeness() {
    prepare('em');
    return $('.message').fadeOut(500, function() {
      return relocate();
    });
  };
  prepare = function prepare(selector) {
    var element;
    element = $(selector);
    return $(selector).each(function(index, item) {
      var el, location;
      el = $(item).clone();
      location = $(item).offset();
      $('body').append(el);
      return el.css({
        position: 'absolute',
        top: location.top,
        left: location.left
      });
    });
  };
  relocate = function relocate() {
    var top, width, widths;
    widths = [-48, -43, -40, -25, -23, -15, -5, 3, 10, 18, 30];
    top = $('h2').offset().top + 80 + 'px';
    width = $(window).width() / 2;
    return $('body > em').each(function(index, item) {
      var left;
      left = '' + (width + widths[index]) + "px";
      return $(item).animate({
        top: top,
        left: left
      }, 500);
    });
  };
})();
