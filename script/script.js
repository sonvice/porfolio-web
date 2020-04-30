"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var floatMenu = document.querySelector('.content-float-menu');
var barMenu = document.querySelector('.header__bar');
var menu = document.querySelector('.header__hamburguer-menu').addEventListener('click', function () {
  floatMenu.classList.toggle('active');
  barMenu.classList.toggle('toggle');
});
var menuFloat = document.querySelector('.content-float-menu > span').addEventListener('click', function () {
  barMenu.classList.toggle('toggle');
  setTimeout(function () {
    floatMenu.classList.toggle('active');
  }, 300);
});
/* ----- Progress bar animations ---- */

var progres = document.querySelectorAll('.about__progress-done');
var valor = document.querySelectorAll('.about__progress .val');
var scroll = document.querySelector('#scroll');
var options = {
  // root: null,
  rootMargin: '0px',
  threshold: 0
};

function progressBar(entries) {
  if (entries[0].isIntersecting) {
    var _iterator = _createForOfIteratorHelper(progres),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var progre = _step.value;
        var dat = progre.getAttribute('data-done');
        progre.style.width = dat + '%';
        progre.style.opacity = 1;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(valor),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var val = _step2.value;
        var score = val.textContent;
        val.style.left = score;
        val.style.opacity = 1;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
}

var observer = new IntersectionObserver(progressBar, options);
observer.observe(scroll);
/* -------- SCROLL ANIMATIONS ------- */

var nav = document.querySelector('.header__nav');
var arrow = document.querySelector('.footer__arrow');
window.addEventListener('scroll', addClassNav);

function addClassNav() {
  if (window.scrollY > 10) {
    nav.classList.add('nav-active');
  } else {
    nav.classList.remove('nav-active');
  } // //arrow
  // if(window.scrollY>600){
  //     arrow.classList.add('arrow-up')
  // }else{
  //     arrow.classList.remove('arrow-up')
  // }

} // addEventListener('DOMContentLoaded', ()=>{
//     let btnUp = document.querySelector('.footer__arrow')
//     let scrollUp = () => document.documentElement.scrollTop || document.body.scrollTop
//     function up (){
//         if(scrollUp() > 0){
//             requestAnimationFrame(up)
//             scrollTo(0, scrollUp() - (scrollUp() / 20))
//         }
//     }
//     btnUp.addEventListener('click', up)
// })
//MENU ACTIVE


var list1 = document.querySelector('.header__list li a');
var list = document.querySelector('.header__list');

if (list1.textContent == 'home') {
  list1.classList.add('a-active');
}

var headerActive = document.querySelectorAll('.header__list li a');
headerActive.forEach(function (hActive) {
  hActive.addEventListener('click', function () {
    list.querySelector('.a-active').classList.remove('a-active');
    hActive.classList.add('a-active');
  });
}); //MENU FLOAT

var listFloat = document.querySelector('.content-float-menu');
var itemsFloat = document.querySelectorAll('.header__float-menu li a');
itemsFloat.forEach(function (item) {
  item.addEventListener('click', function () {
    listFloat.classList.remove('active');
  });
});