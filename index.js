if (window.matchMedia("(min-width: 600px)").matches) {
    new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: true,
  })
}