import settings from './settings';
import siteHeader from './site-header';
import owlCarousel from './owl-carousel';
import magnificPopup from './magnific-popup';

$( document ).ready(function($) {
  settings();
  siteHeader();   
  owlCarousel(); 
  magnificPopup();
});
