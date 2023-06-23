export default function init() {
  // Add image you want to popup like this in HTML
  /* <a class="image-link" href="<?php echo get_template_directory_uri(); ?>/images/placeholder-image-wide.png"><img class="" src="<?php echo get_template_directory_uri(); ?>/images/placeholder-image-wide.png" alt="logo"/></a> */

  $('.image-link').magnificPopup({
    type:'image',
    callbacks: {
      open: function() {
        console.log("Hello");
        $('body').css('padding-right', '17px');
        $('.site-header--bg').css('padding-right', '17px');
      },
      close: function() {
        $('body').css('padding-right', '0px');
        $('.site-header--bg').css('padding-right', '0px');
      }
    }
  });
}