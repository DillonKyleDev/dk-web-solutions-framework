export default function init() {
  let $currentlyActiveList;
  // Have record of currentlyActive list and check if this list
  // is active or something
  // Or, on click, hide all again and then reveal only the one clicked?

  const $filterWrappers = $('.blog-header__filter-wrapper');

  $filterWrappers.each(function () {
    const $wrapper = $(this);
    const $list = $wrapper.find('.blog-header__filters-list');      

    $wrapper.focusin(function () {
      $list.removeClass('hide-list');
    });
  })

  if ($filterWrappers.length > 0) {
    $('body').on('click', function (event) {
      const $target = $(event.target);  

      if (
        !$target.hasClass('blog-header__filters-list') &&
        !$target.hasClass('blog-header__filters-link') &&
        !$target.hasClass('blog-header__dropdown-button')
      ) {
        console.log('close');
        $filterWrappers.each(function () {
          const $wrapper = $(this);
          const $list = $wrapper.find('.blog-header__filters-list');
          $list.addClass('hide-list');
        });
      }
    });
  }

}