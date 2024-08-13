const thumbs = document.querySelectorAll(".thumb li");
const infoSlider = document.querySelectorAll(".info-slider");
const item = document.querySelectorAll(".item");

let index = 0;
thumbs.forEach((thumb, ind) => {
  thumb.addEventListener("click", (event) => {
    setTimeout(() => {
      document.querySelector(".thumb .selected").classList.remove("selected");
      thumb.classList.add("selected");
    }, 100);

    thumbs.forEach((thum) => {
      thum.classList.add("disabled");
      setTimeout(() => {
        thum.classList.remove("disabled");
      }, 450);
    });

    let anySelected = false;
    let current = event.target.parentElement.nextElementSibling;

    while (current !== null && !anySelected) {
      anySelected = anySelected || current.matches(".selected");
      current = current.nextElementSibling;

      if (anySelected) {
        item[index].classList.add("previously-active");

        setTimeout(() => {
          document
            .querySelector(".item.previously-active")
            .classList.remove("previously-active");
        }, 100);

        index = ind;
        item[index].classList.add("back-active");
        setTimeout(() => {
          document
            .querySelector(".item.back-active")
            .classList.remove("back-active");
        }, 500);
      }
    }

    console.log(anySelected);

    index = ind;

    infoSlider.forEach((slide) => {
      slide.style.transform = `translateY(${index * -100}%)`;
    });

    document.querySelector(".item.active").classList.remove("active");
    item[index].classList.add("active");
  });
});
