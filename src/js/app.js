import settings from './settings';
import siteHeader from './site-header';
import owlCarousel from './owl-carousel';
import magnificPopup from './magnific-popup';
import resources from './resources';

$( document ).ready(function($) {
  settings();
  siteHeader();   
  owlCarousel(); 
  magnificPopup();
  resources();
});
