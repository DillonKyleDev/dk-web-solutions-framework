export default function init() {
  const $filterWrappers = $('.blog-header__filter-wrapper');

  $filterWrappers.each(function () {
    const $wrapper = $(this);
    const $list = $wrapper.find('.blog-header__filters-list');  
    const $button = $wrapper.find('.blog-header__dropdown-button');

    $wrapper.focusin(function () {
      $list.removeClass('hide-list');
    });

    // Try an event on the window or the body and check to see if the 
    // event target has children with the classes needed
    $wrapper.focusout(function (event) {
      // event.relatedTarget returns any
      if (event.relatedTarget == null) {        
        $list.addClass('hide-list');
      };
    });
  })
}