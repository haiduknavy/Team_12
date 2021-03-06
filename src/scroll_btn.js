$(function () {
  // при нажатии на кнопку scrollup
  $('.scroll').click(function () {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $('.scroll').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scroll').fadeOut();
  }
});