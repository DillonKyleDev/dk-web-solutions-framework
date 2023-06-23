export default function init() {
  const $hasChildren = $('.menu-item-has-children');

  $hasChildren.on('mouseover', function() {
    const $childMenu = $(this).find('ul');    
    $childMenu.addClass('visible');
  });

  $hasChildren.on('mouseleave', function() {
    const $childMenu = $(this).find('ul');    
    $childMenu.removeClass('visible');
  });
}