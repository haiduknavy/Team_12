(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-modal-open]'),
    closeModalBtn: document.querySelector('[data-menu-modal-close]'),
    modal: document.querySelector('[data-menu-modal]'),
    mobileMenu: document.querySelector('.menu')
  };

  function toggleModal() {
    document.body.classList.toggle("menu-modal-open");
    refs.modal.classList.toggle('is-hidden');
  }

  function closeModal() {
    document.body.classList.toggle("menu-modal-open");
    refs.modal.classList.add('is-hidden');
  }
})();
$('.nav__link--mobile').on('click', function () {
  $('.mobile-menu').removeClass("is-open");
  $('.mobile-menu__btn').removeClass("is-open");
  $('body').removeClass("lock");
});