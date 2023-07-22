/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./src/js/settings.js");
/* harmony import */ var _site_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-header */ "./src/js/site-header.js");
/* harmony import */ var _owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owl-carousel */ "./src/js/owl-carousel.js");
/* harmony import */ var _magnific_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./magnific-popup */ "./src/js/magnific-popup.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources */ "./src/js/resources.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ "./src/js/search.js");
/* harmony import */ var _blog_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-filters */ "./src/js/blog-filters.js");







$(document).ready(function ($) {
  (0,_settings__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_site_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_magnific_popup__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_resources__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_search__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_blog_filters__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./src/js/blog-filters.js":
/*!********************************!*\
  !*** ./src/js/blog-filters.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ init; }
/* harmony export */ });
function init() {
  var $filterWrappers = $('.blog-header__filter-wrapper');
  $filterWrappers.each(function () {
    var $wrapper = $(this);
    var $list = $wrapper.find('.blog-header__filters-list');
    var $button = $wrapper.find('.blog-header__dropdown-button');
    $wrapper.focusin(function () {
      $list.removeClass('hide-list');
    });

    // Try an event on the window or the body and check to see if the 
    // event target has children with the classes needed
    $wrapper.focusout(function (event) {
      // event.relatedTarget returns any
      if (event.relatedTarget == null) {
        $list.addClass('hide-list');
      }
      ;
    });
  });
}

/***/ }),

/***/ "./src/js/magnific-popup.js":
/*!**********************************!*\
  !*** ./src/js/magnific-popup.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ init; }
/* harmony export */ });
function init() {
  // Add image you want to popup like this in HTML
  /* <a class="image-link" href="<?php echo get_template_directory_uri(); ?>/images/placeholder-image-wide.png"><img class="" src="<?php echo get_template_directory_uri(); ?>/images/placeholder-image-wide.png" alt="logo"/></a> */

  $('.image-link').magnificPopup({
    type: 'image',
    callbacks: {
      open: function open() {
        $('body').css('padding-right', '17px');
        $('.site-header--bg').css('padding-right', '17px');
      },
      close: function close() {
        $('body').css('padding-right', '0px');
        $('.site-header--bg').css('padding-right', '0px');
      }
    }
  });
  $('.subscribe-link').magnificPopup({
    type: 'inline',
    callbacks: {
      open: function open() {
        $('body').css('padding-right', '17px');
        $('.site-header--bg').css('padding-right', '17px');
      },
      close: function close() {
        $('body').css('padding-right', '0px');
        $('.site-header--bg').css('padding-right', '0px');
      }
    }
  });
}

/***/ }),

/***/ "./src/js/owl-carousel.js":
/*!********************************!*\
  !*** ./src/js/owl-carousel.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ init; }
/* harmony export */ });
function init() {
  // <div class="owl-carousel owl-theme">
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  //   <div> Your Content </div>
  // </div>

  $('.owl-carousel').each(function () {
    var itemCount = $(this).data('items');
    var loop_ = $(this).data('loop');
    var spacing = parseInt($(this).data('spacing'));
    $(this).owlCarousel({
      loop: loop_,
      margin: spacing,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: itemCount,
          nav: false
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/js/resources.js":
/*!*****************************!*\
  !*** ./src/js/resources.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ init; }
/* harmony export */ });
function init() {
  var $filterable = $('.filterable');
  var filterItems = function filterItems() {
    var filterClasses = [];
    $('.filters-sidebar__form').each(function () {
      var $parent = $(this);
      $(this).find('.filters-sidebar__input').each(function () {
        var $child = $(this);
        if ($child.prop('checked') && $child.val() != 'all') {
          filterClasses.push("".concat($parent.data('filter'), "-").concat($child.val()));
        } else if ($child.prop('checked') && $child.val() == 'all') {
          $filterable.each(function () {
            if ($(this).attr('class').indexOf($parent.data('filter'))) {
              $(this).removeClass('hide-filterable');
            }
          });
        }
      });
      $filterable.each(function () {
        if (filterClasses.length > 0) {
          $(this).addClass('hide-filterable');
          for (var i = 0; i < filterClasses.length; i++) {
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

// Add back to module for old method
// {% set filter_query = [] %}

// {% for column in filter_columns %}
//   {% if request.query_dict[column] != null %}
//     {% do filter_query.append('&' + column + '=' + request.query_dict[column]) %} 
//   {% endif %}
// {% endfor %}

// {% set filter_query = filter_query|string|replace('[', '')|replace(']', '')|replace(', ', '') %}

// {% if request.query_dict != null %}
//   {% set table_rows = hubdb_table_rows(table_id, filter_query) %}
// {% endif %}

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ init; }
/* harmony export */ });
function init() {
  var hsSearch = function hsSearch(_instance) {
    var TYPEAHEAD_LIMIT = 3;
    var KEYS = {
      TAB: 'Tab',
      ESC: 'Esc',
      // IE11 & Edge 16 value for Escape
      ESCAPE: 'Escape',
      UP: 'Up',
      // IE11 & Edge 16 value for Arrow Up
      ARROW_UP: 'ArrowUp',
      DOWN: 'Down',
      // IE11 & Edge 16 value for Arrow Down
      ARROW_DOWN: 'ArrowDown'
    };
    var searchTerm = '',
      searchForm = _instance,
      searchField = _instance.querySelector('.hs-search-field__input'),
      searchResults = _instance.querySelector('.hs-search-field__suggestions'),
      searchOptions = function searchOptions() {
        var formParams = [];
        var form = _instance.querySelector('form');
        for (var i = 0; i < form.querySelectorAll('input[type=hidden]').length; i++) {
          var e = form.querySelectorAll('input[type=hidden]')[i];
          if (e.name !== 'limit') {
            formParams.push(encodeURIComponent(e.name) + '=' + encodeURIComponent(e.value));
          }
        }
        var queryString = formParams.join('&');
        return queryString;
      };
    var debounce = function debounce(func, wait, immediate) {
        var timeout;
        return function () {
          var context = this,
            args = arguments;
          var later = function later() {
            timeout = null;
            if (!immediate) {
              func.apply(context, args);
            }
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait || 200);
          if (callNow) {
            func.apply(context, args);
          }
        };
      },
      emptySearchResults = function emptySearchResults() {
        searchResults.innerHTML = '';
        searchField.focus();
        searchForm.classList.remove('hs-search-field--open');
      },
      fillSearchResults = function fillSearchResults(response) {
        var items = [];
        items.push("<li id='results-for'>Results for \"" + response.searchTerm + '"</li>');
        response.results.forEach(function (val, index) {
          items.push("<li id='result" + index + "'><a href='" + val.url + "'>" + val.title + '</a></li>');
        });
        emptySearchResults();
        searchResults.innerHTML = items.join('');
        searchForm.classList.add('hs-search-field--open');
      },
      getSearchResults = function getSearchResults() {
        var request = new XMLHttpRequest();
        var requestUrl = '/_hcms/search?&term=' + encodeURIComponent(searchTerm) + '&limit=' + encodeURIComponent(TYPEAHEAD_LIMIT) + '&autocomplete=true&analytics=true&' + searchOptions();
        request.open('GET', requestUrl, true);
        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            if (data.total > 0) {
              fillSearchResults(data);
              trapFocus();
            } else {
              emptySearchResults();
            }
          } else {
            console.error('Server reached, error retrieving results.');
          }
        };
        request.onerror = function () {
          console.error('Could not reach the server.');
        };
        request.send();
      },
      trapFocus = function trapFocus() {
        var tabbable = [];
        tabbable.push(searchField);
        var tabbables = searchResults.getElementsByTagName('A');
        for (var i = 0; i < tabbables.length; i++) {
          tabbable.push(tabbables[i]);
        }
        var firstTabbable = tabbable[0],
          lastTabbable = tabbable[tabbable.length - 1];
        var tabResult = function tabResult(e) {
            if (e.target == lastTabbable && !e.shiftKey) {
              e.preventDefault();
              firstTabbable.focus();
            } else if (e.target == firstTabbable && e.shiftKey) {
              e.preventDefault();
              lastTabbable.focus();
            }
          },
          nextResult = function nextResult(e) {
            e.preventDefault();
            if (e.target == lastTabbable) {
              firstTabbable.focus();
            } else {
              tabbable.forEach(function (el) {
                if (el == e.target) {
                  tabbable[tabbable.indexOf(el) + 1].focus();
                }
              });
            }
          },
          lastResult = function lastResult(e) {
            e.preventDefault();
            if (e.target == firstTabbable) {
              lastTabbable.focus();
            } else {
              tabbable.forEach(function (el) {
                if (el == e.target) {
                  tabbable[tabbable.indexOf(el) - 1].focus();
                }
              });
            }
          };
        searchForm.addEventListener('keydown', function (e) {
          switch (e.key) {
            case KEYS.TAB:
              tabResult(e);
              break;
            case KEYS.ESC:
            case KEYS.ESCAPE:
              emptySearchResults();
              break;
            case KEYS.UP:
            case KEYS.ARROW_UP:
              lastResult(e);
              break;
            case KEYS.DOWN:
            case KEYS.ARROW_DOWN:
              nextResult(e);
              break;
          }
        });
      },
      isSearchTermPresent = debounce(function () {
        searchTerm = searchField.value;
        if (searchTerm.length > 2) {
          getSearchResults();
        } else if (searchTerm.length == 0) {
          emptySearchResults();
        }
      }, 250),
      init = function () {
        searchField.addEventListener('input', function (e) {
          if (searchTerm != searchField.value) {
            isSearchTermPresent();
          }
        });
      }();
  };
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    var searchResults = document.querySelectorAll('.hs-search-field');
    Array.prototype.forEach.call(searchResults, function (el) {
      var hsSearchModule = hsSearch(el);
    });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      var searchResults = document.querySelectorAll('.hs-search-field');
      Array.prototype.forEach.call(searchResults, function (el) {
        var hsSearchModule = hsSearch(el);
      });
    });
  }
}

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ init; }
/* harmony export */ });
function init() {
  // Variables
  var nav = document.querySelector('.header__navigation');
  var langSwitcher = document.querySelector('.header__language-switcher');
  var search = document.querySelector('.header__search');
  var allToggles = document.querySelectorAll('.header--toggle');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var langToggle = document.querySelector('.header__language-switcher--toggle');
  var searchToggle = document.querySelector('.header__search--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');
  var allElements = document.querySelectorAll('.header--element, .header--toggle');
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  // Functions

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Function for toggling mobile navigation
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });
    nav.classList.toggle('open');
    navToggle.classList.toggle('open');
    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile language selector
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });
    langSwitcher.classList.toggle('open');
    langToggle.classList.toggle('open');
    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile search field
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });
    search.classList.toggle('open');
    searchToggle.classList.toggle('open');
    closeToggle.classList.toggle('show');
  }

  // Function for the header close option on mobile
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove('hide', 'open');
    });
    closeToggle.classList.remove('show');
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');
    emailSubItem.forEach(function (item) {
      var emailSubItemInput = item.querySelector('input');
      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
      // Function dependent on language switcher
      if (langSwitcher) {
        langToggle.addEventListener('click', toggleLang);
      }

      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
      }

      // Function dependent on search field
      if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
      }

      // Function dependent on close toggle
      if (closeToggle) {
        closeToggle.addEventListener('click', closeAll);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }
    }
  });
}

/***/ }),

/***/ "./src/js/site-header.js":
/*!*******************************!*\
  !*** ./src/js/site-header.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ init; }
/* harmony export */ });
function init() {
  var $hasChildren = $('.menu-item-has-children');
  $hasChildren.on('mouseover', function () {
    var $childMenu = $(this).find('ul');
    $childMenu.addClass('visible');
  });
  $hasChildren.on('mouseleave', function () {
    var $childMenu = $(this).find('ul');
    $childMenu.removeClass('visible');
  });
}

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/src/js/dist/app": 0,
/******/ 			"src/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkDK_Web_Solutions_Framework"] = self["webpackChunkDK_Web_Solutions_Framework"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["src/css/app"], function() { return __webpack_require__("./src/js/app.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src/css/app"], function() { return __webpack_require__("./src/scss/app.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;