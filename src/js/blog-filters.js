export default function init() {
  const $filterWrappers = $('.blog-header__filter-wrapper');

  $filterWrappers.each(function () {
    const $wrapper = $(this);
    const $list = $wrapper.find('.blog-header__filters-list');  
    const $button = $wrapper.find('.blog-header__dropdown-button');

    $button.on('click', function () {                  
      $list.toggleClass('hide-list');
    });

    $button.blur(function () {
      console.log('lost focus');
      $list.addClass('hide-list');
    });
  })
}