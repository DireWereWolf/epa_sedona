const App = {
  _load: function (funcName) {
    return document.addEventListener("DOMContentLoaded", funcName);
  },
  _hasClass: function (el, className) {
      if (el.classList)
        return el.classList.contains(className)
      else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
    },

  _addClass: function (el, className) {
    if (el.classList)
      el.classList.add(className)
    else if (!App._hasClass(el, className)) el.className += " " + className
  },

  _removeClass: function (el, className) {
    if (el.classList){
      el.classList.remove(className)
    }else if (App._hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  },

  _spoiler: ( buttonSelector, elemSelector ) => {

      let buttons = document.getElementsByClassName(buttonSelector),
          elem = document.querySelector(elemSelector);

      function slideToggle(selector) {
        selector = elem;

        if(App._hasClass(selector, "js-spoiler-closed")){
          App._removeClass(selector, "js-spoiler-closed");
          App._addClass(selector, "js-spoiler-open");
        }else {
          App._removeClass(selector, "js-spoiler-open");
          App._addClass(selector, "js-spoiler-closed");
        }
      }

      for (let i=0; i < buttons.length; i++){
        buttons[i].addEventListener('click', slideToggle);
      };



    // document.getElementsByClassName(buttonSelector).onclick = function() {
    //   return console.log("clicked!");
    // };


    // button.onclick =  function () {
    //       return console.log("clicked!");
    //   }
    // style = document.getElementsByClassName(elem).style;
    // style.display = (style.display == 'block') ? 'none' : 'block';
  }
};

App._load(App._spoiler("order-info__button",".order-info__form"));




