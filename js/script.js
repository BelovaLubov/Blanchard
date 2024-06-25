
document.querySelector(".header-btn-open").addEventListener("click", function () {
  document.querySelector(".header-nav").classList.add("active");
})
document.querySelector(".nav-close").addEventListener("click", function () {
  document.querySelector(".header-nav").classList.remove("active");
})

document.querySelector(".form-btn-open").addEventListener("click", function() {
  document.querySelector(".form").classList.add("form__active");
  this.classList.add("active");
})

document.querySelector(".form-close").addEventListener("click", function() {
  let form = document.querySelector(".form");
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn-open").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".form-container-header")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn-open").classList.remove("active")
  }
})

const swiperFirst = new Swiper('.main__swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

});


const swiper = new Swiper('.swiper-gallery', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 2,
  pagination: {
    el: '.publications-navi',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.publications-navi-next',
    prevEl: '.publications-navi-prev'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,

    },
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },

  },


});

const swiperEvents = new Swiper('.swiper-events', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 50,
  slidesPerGroup: 3,
  variableWidth: true,
  speed: 400,
  navigation: {
    nextEl: '.events__swiper-btn-next',
    prevEl: '.events__swiper-btn-prev',
    clickable: true,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true, //включаем поддержку динамических буллетов
    dynamicMainBullets: 3,
  },


  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: -5,
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

$(document).ready(function(){  //дожидаемся загрузки страницы
  $('.events__swiper-btn-next').on("click", function(){  //вешаем событие на клик по кнопке id="btn1"
      $('.events__swiper-btn-prev').toggle(); //включает/выключает элемент id="text"
  });
});



const mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.projects-swiper-btn-next',
    prevEl: '.projects-swiper-btn-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});


const catalogAccordion = new Accordion('.catalog__accordion', {
  showMultiple: true,
  beforeOpen: (el) => {
    el.children[1].removeAttribute('inert');
    el.children[1].setAttribute('aria-hidden', 'false');
  },
  beforeClose: (el) => {
    el.children[1].setAttribute('inert', '');
    el.children[1].setAttribute('aria-hidden', 'true');
  },
});

(function () {
  let accordionItems = document.querySelectorAll('.catalog__accordion-item');

  accordionItems.forEach((e) => {

    if (!e.classList.contains('is-active')) {
      e.children[1].setAttribute('inert', '');
    };

  });

})();


let catalogContentItems = document.querySelectorAll('.catalog__content');
let catalogUnknown = document.querySelector('.catalog-unknown');
let catalogBtns = document.querySelectorAll('.catalog__accordion-list-item-btn');


catalogBtns.forEach((e) => {
  e.addEventListener('click', function (btn) {

    catalogBtns.forEach((elem) => {
      elem.classList.remove('catalog__accordion-list-item-btn--active');
    });
    btn.currentTarget.classList.add('catalog__accordion-list-item-btn--active');

    catalogContentItems.forEach((item) => {
      item.classList.remove('catalog__content--active');
    });

    let catalogTargetContent = document.querySelector(`[data-catalog-content="${e.textContent}"]`);

    if (catalogTargetContent) {
      catalogTargetContent.classList.add('catalog__content--active');
    } else {
      catalogUnknown.classList.add('catalog__content--active');
    };

    if (window.screen.width <= 576) {
      (catalogTargetContent || catalogUnknown).scrollIntoView();
    }

  });
});

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758468, 37.601088],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16

  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom')
}

const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});

document.addEventListener('DOMContentLoaded', () => {

  const dropdownLink = document.querySelectorAll('.nav__art-submenu');
  const dropdownSubmenu = document.querySelectorAll('.dropdown');
  const dropdownArrow = document.querySelectorAll('.nav__art-arrow');

  // dropdown

  dropdownLink.forEach((el, index) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();

      const dropdownSubmenuClassList = dropdownSubmenu[index].classList;
      if (dropdownSubmenuClassList.contains('dropdown-visible')) {
        dropdownSubmenuClassList.remove('dropdown-visible')
        dropdownArrow[index].classList.remove('rotate-arrow')

      } else {
        dropdownSubmenu.forEach((el) => el.classList.remove('dropdown-visible'))
        dropdownSubmenuClassList.add('dropdown-visible')
        dropdownArrow.forEach((el) => el.classList.remove('rotate-arrow'))
        dropdownArrow[index].classList.add('rotate-arrow')
      }
    });
  });

  window.onclick = function (event) {
    if (!event.target.matches('.nav__art-submenu')) {
      let dropdowns = document.getElementsByClassName('dropdown');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('dropdown-visible')) {
          openDropdown.classList.remove('dropdown-visible');
        }
      }
    }

    if (!event.target.matches('.nav__art-submenu')) {
      let dropArrows = document.getElementsByClassName('nav__art-arrow');
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains('rotate-arrow')) {
          openDropdown.classList.remove('rotate-arrow');
        }
      }
    }

    if (!event.target.matches('.dropdown')) {
      let dropArrows = document.getElementsByClassName('dropdown');
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains('dropdown--is-active')) {
          openDropdown.classList.remove('dropdown--is-active');
        }
      }
    }
  }
})

tippy('#button', {
  trigger: 'focus',
  arrow: true,
  theme : 'purple',
  allowHTML: true,
  content: 'Пример современных тенденций - современная методология разработки',
});

tippy('#button1', {
  arrow: true,
  theme : 'purple',
  trigger: 'focus',
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ",
});

tippy('#button2', {
  arrow: true,
  theme : 'purple',
  trigger: 'focus',
  content: "В стремлении повысить качество ",
});



/* Contact Form: input mask for telephone */
var selectorForInputMask = document.querySelector("input[type='tel']");
var im = new Inputmask('+7(999) 999-99-99');
im.mask(selectorForInputMask);





/* Gallery Modal */
let galleryImgs = document.querySelectorAll('.gallery-item');
let galleryModal = document.querySelector('.gallery-modal');
let galleryModalClose = galleryModal.querySelector('.gallery-modal-close');
let body = document.querySelector('body');
galleryImgs.forEach(el => {
  el.addEventListener('click', function () {
    let img = this.querySelector('img');
    let imgSrc = img.getAttribute('src');
    galleryModal.querySelector('img').setAttribute('src', imgSrc);
    galleryModal.classList.add('gallery-modal_active_true');
    body.classList.add('modal_active');
  })
})
galleryModalClose.addEventListener('click', function () {
  galleryModal.classList.remove('gallery-modal_active_true');
  body.classList.remove('modal_active');
});


$('.swiper-object .swiper-container').each(function(index, value) {

  var mySwiper = new Swiper(value, {
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: value.nextElementSibling.nextElementSibling,
      prevEl: value.nextElementSibling,
    },
    pagination: {
      el: value.nextElementSibling.nextElementSibling.nextElementSibling,
      clickable: true,
    },
    slidesPerView: 'auto',
  });



});

