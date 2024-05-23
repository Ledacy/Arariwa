// Estilos para la vista de agencias
console.log("funciona los script en Index");
(function (window, document, $, undefined) {
  var $slides, $btnArr;
  function onClick(e) {
    var $target = $(e.target);
    if (
      $target.hasClass("slide") && !$target.hasClass("active") && !$target.siblings().hasClass("active")
    ) {
      $target.removeClass("anim-in last-viewed").addClass("active");
      $target
        .siblings()
        .removeClass("anim-in last-viewed")
        .addClass("anim-out");
    }
  }
  function closeSlide(e) {
    var $slide = $(e.target).parent();
    $slide.removeClass("active anim-in").addClass("last-viewed");
    $slide.siblings().removeClass("anim-out").addClass("anim-in");
  }
  $(function () {
    $slides = $(".slide");
    $btnArr = $slides.find(".btn-close");
    $slides.on("click", onClick);
    $btnArr.on("click", closeSlide);
  });
})(this, document, jQuery);

// scripts para los formularios
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    if (event.target.value) {
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
    }
  });
});
