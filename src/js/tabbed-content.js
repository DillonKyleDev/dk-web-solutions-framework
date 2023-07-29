export default function init() {
  const $tabsContainers = $('.tabbed-content__container');
  
  function tabClicked(id) {
    // Remove active from all tab buttons and panels
    $tabsContainers.each(function() {
      let tabsList = $(this).find('.tabbed-content__tabs-list');
      let panels = $(this).find('.tabbed-content__tab-panel');

      tabsList.each(function () {
        const $button = $(this).find('.tabbed-content__button');
        if ($button.data('button-id') == id) {
          $button.addClass('active');
          console.log($button.data('button-id'), " id passed ", id)
        } else if ($button.hasClass('active')) {
          $button.removeClass('active');
        }      
      });

      panels.each(function () {
        $(this).find('.tabbed-content__panel-content').removeClass('active');
      });

      tabsList.each(function(index) {
        if ($(this).find('.tabbed-content__button').hasClass('active')) {         

          // panels.eq(index)
        }
      })
    });
  }

  // Add click listeners
  $tabsContainers.each(function () {
    let tabsList = $(this).find('.tabbed-content__tabs-list');

    tabsList.each(function () {
      $(this).find('.tabbed-content__button').on('click', function () {
        tabClicked($(this).data('button-id'));
      })
    });
  });
}