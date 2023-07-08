export default function init() {

  // <div class="owl-carousel owl-theme">
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  // </div>

  $('.owl-carousel').each(function() {
    const itemCount = $(this).data('items');
    const loop_ = $(this).data('loop');
    const spacing = parseInt($(this).data('spacing'));       

    $(this).owlCarousel({
      loop: loop_,
      margin: spacing,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: itemCount,
          nav: false
        },
      },
    });
  });
}