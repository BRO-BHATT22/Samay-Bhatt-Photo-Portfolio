$('.randomize img').each(function() {
    var rando = 1 + Math.floor(Math.random() * 16);
    var url = $(this).attr('src');
    if (rando == 4 || rando == 6 || rando == 9 || rando == 11 || rando == 16 ) {
      rando = rando - 1;
    }
    if (rando == 7 ) {
      rando = rando - 7;
    }
    $(this).attr('src', url + "?image=" + rando);
  });