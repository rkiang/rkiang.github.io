function films3() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);

  $('.projects').hide();

  $('.poster').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
	});
}

$(document).ready(films3);
