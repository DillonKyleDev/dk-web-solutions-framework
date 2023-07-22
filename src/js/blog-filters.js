export default function init() {
  console.log('blog-filters js');
  const $filterWrappers = $('.blog-header__filter-wrapper');

  $filterWrappers.each(function () {
    const $wrapper = $(this);

    $wrapper.find('.blog-header__dropdown-button').on('click', function () {
      const $list = $wrapper.find('.blog-header__filters-list');
      
      console.log($list.length);
      $list.removeClass('hide-list');
    });
  })
}