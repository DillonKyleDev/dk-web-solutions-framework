export default function init() {
  const $filterable = $('.filterable');

  const filterItems = () => {
    let filterClasses = [];

    $('.filters-sidebar__form').each(function () {
      let $parent = $(this);

      $(this)
        .find('.filters-sidebar__input')
        .each(function () {
          let $child = $(this);

          if ($child.prop('checked') && $child.val() != 'all') {
            filterClasses.push(`${$parent.data('filter')}-${$child.val()}`);
          }
        });

      $filterable.each(function () {
        if (filterClasses.length > 0) {
          $(this).addClass('hide-filterable');

          for (let i = 0; i < filterClasses.length; i++) {
            if ($(this).hasClass(filterClasses[i])) {
              $(this).removeClass('hide-filterable');
            } else {
              $(this).addClass('hide-filterable');
              return true;
            }
          }
        }
      });
    });
  };

  filterItems();

  $('.filters-sidebar__form').on('change', function (event) {
    filterItems();
  });

  $('.filters-sidebar__reset').on('click', function () {
    $filterable.each(function () {
      $(this).removeClass('hide-filterable');
    });

    $('.filters-sidebar__input-all').each(function () {
      $(this).prop('checked', true);
    });
  });
}

// export default function init() {
//   const generateUrl = () => {
//     let queryParams = '?search=';

//     $('.filters-sidebar__form').each(function () {
//       let $parent = $(this);

//       $(this)
//         .find('.filters-sidebar__input')
//         .each(function () {
//           let $child = $(this);

//           if ($child.prop('checked')) {
//             queryParams += `&${$parent.data('filter')}=${$child.val()}`;
//           }
//         });
//     });

//     if (queryParams.length != '') {
//       // window.history.pushState({}, null, queryParams);
//       // document.location.href = queryParams;
//     }
//   };

//   $('.filters-sidebar__form').on('change', function (event) {
//     generateUrl();
//   });
// }
