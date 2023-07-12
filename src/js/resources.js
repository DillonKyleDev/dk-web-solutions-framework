export default function init() {
  const generateUrl = () => {
    let queryParams = [];

    $('.filter-sidebar__form').each(function () {
      let $parent = $(this);

      $(this)
        .find('.filters-sidebar__input')
        .each(function () {
          let $child = $(this);

          if ($child.prop('checked')) {
            console.log("checked");
            queryParams.push(`?${$parent.data('filter')}="${$child.val()}"`);
          }
        });
    });

    if (queryParams.length > 0) {
      document.location.href = queryParams;
    }
  };

  $('.filter-sidebar__form').on('change', function (event) {
    generateUrl();
  });
}
