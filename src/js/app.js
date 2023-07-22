import settings from './settings';
import siteHeader from './site-header';
import owlCarousel from './owl-carousel';
import magnificPopup from './magnific-popup';
import resources from './resources';
import search from './search';
import blogFilters from './blog-filters';

$( document ).ready(function($) {
  settings();
  siteHeader();   
  owlCarousel(); 
  magnificPopup();
  resources();
  search();
  blogFilters();
});
