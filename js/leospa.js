// ------------------ menu top -------------------------
let menu = document.querySelector(".menu"),
  collapse = document.querySelector(".menu__btn");
collapse.addEventListener("click", function () {
  menu.classList.toggle("active");
  collapse.classList.toggle("close");
});
document.addEventListener("scroll", function (event) {
  menu.classList.remove("active");
  collapse.classList.remove("close");
});

// --------------- slide ------------------------------
document.addEventListener("DOMContentLoaded", function () {
  let page = document.querySelectorAll(".slide__nav li"),
    slides = document.querySelectorAll(".slide__item"),
    next = document.querySelector(".next"),
    pre = document.querySelector(".pre"),
    pagenum = 0,
    move = false; // trạng thái ko chuyển động

  var slideNext = function () {
    if (move == true) {
      return false;
    }
    move = true;
    let status2ani = 0; // trạng thái 2 ani dưới
    let current = slides[pagenum]; //slide hiện tại
    let currPage = page[pagenum];

    pagenum = pagenum < slides.length - 1 ? pagenum + 1 : 0;

    let nextSlide = slides[pagenum]; //slide tiếp theo
    current.addEventListener("webkitAnimationEnd", function () {
      this.classList.remove("out-next");
      this.classList.remove("active-slide");
      status2ani++;
      if (status2ani == 2) {
        move = false; // đã chuyển động xong
      }
    });
    nextSlide.addEventListener("webkitAnimationEnd", function () {
      this.classList.remove("in-next");
      this.classList.add("active-slide");
      status2ani++;
      if (status2ani == 2) {
        move = false; //đã chuyển động xong
      }
    });
    current.classList.add("out-next");
    nextSlide.classList.add("in-next");
    page[pagenum].classList.add("active");
    currPage.classList.remove("active");
  };

  var slidePre = function () {
    if (move == true) {
      return false;
    }
    move = true;
    let status2ani = 0;
    let current = slides[pagenum];
    let currPage = page[pagenum];

    pagenum = pagenum > 0 ? pagenum - 1 : slides.length - 1;

    var preSlide = slides[pagenum];

    current.addEventListener("webkitAnimationEnd", function () {
      this.classList.remove("out-pre");
      this.classList.remove("active-slide");
      status2ani++;
      if (status2ani == 2) {
        move = false; // đã chuyển động xong
      }
    });
    preSlide.addEventListener("webkitAnimationEnd", function () {
      this.classList.remove("in-pre");
      this.classList.add("active-slide");
      status2ani++;
      if (status2ani == 2) {
        move = false; //đã chuyển động xong
      }
    });
    current.classList.add("out-pre");
    preSlide.classList.add("in-pre");
    page[pagenum].classList.add("active");
    currPage.classList.remove("active");
  };

  next.addEventListener("click", slideNext);
  pre.addEventListener("click", slidePre);

  // --------------- sử dụng phím keyboard -----------------
  window.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
      return slideNext();
    } else if (event.key == "ArrowLeft") {
      return slidePre();
    }
  });

  // cho nút tròn
  for (let i = 0; i < page.length; i++) {
    page[i].addEventListener("click", function () {
      for (let i = 0; i < page.length; i++) {
        page[i].classList.remove("active");
      }
      this.classList.add("active");
      var slide_active = this; //slide hiện tại
      var current_slide = 0;
      for (
        current_slide = 0;
        (slide_active = slide_active.previousElementSibling);
        current_slide++
      ) {
        //trả về vị trí của slide hiện tại
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide"); // xóa hết hiệu ứng slide
      }
      slides[current_slide].classList.add("active-slide");

      pagenum = i; // đặt lại pagenum
    });
  }
});
