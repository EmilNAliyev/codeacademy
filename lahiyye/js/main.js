$('.your-class').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows:false
  });
  document.querySelector('#switch-toggle').onclick = function (e) {
    e.preventDefault();
    if (this.parentElement.classList.contains("show")) {
      this.parentElement.classList.remove("show");
    } else {
      this.parentElement.classList.add("show");
    }
  }