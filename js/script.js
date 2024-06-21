const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const crossIcon = document.querySelector('.cross-icon');
const showMoreMenu = document.querySelector('#showMoreMenu');
const showProductMenu = document.querySelector('#showProductMenu');

hamburgerIcon.addEventListener('click', function () {
  console.log(hamburgerMenu.style.transform);
  hamburgerMenu.classList.add('show-hamburger-menu');
});

crossIcon.addEventListener('click', function () {
  hamburgerMenu.classList.remove('show-hamburger-menu');
});

// video button
var playButton = document.getElementById("playVideoButton");
playButton.addEventListener("click", function() {
  if (historyVideo.paused == true) {
    historyVideo.play();
    playButton.style.display = "none";
  } else {
    historyVideo.pause();
    playButton.style.display = "block";
  }
});

// sliders
const swiper1 = new Swiper('.blog-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
   // Responsive breakpoints
   breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
     slidesPerView: 2,
     spaceBetween: 20
   },
    990: {
      slidesPerView: 3,
      spaceBetween: 30
    }
   },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiper2 = new Swiper('.customer-slider', {
  // Optional parameters
  centeredSlides:true,
  direction: 'horizontal',
  loop: false,
   // Responsive breakpoints
   breakpoints: {
     320: {
       slidesPerView: 1,
       spaceBetween: 20
     },
     640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
     990: {
       slidesPerView: 3,
       spaceBetween: 30
     }
   },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

// counter
let $ = document;
let benefitsEl = $.querySelector(".card");
let numEls = $.querySelectorAll(".statics__num");
let isCounterStart = false
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= benefitsEl.offsetTop) {
    if (!isCounterStart) {
        numEls.forEach(numEl => numCounter(numEl));
        isCounterStart = true
    }
  }
});

function numCounter(e) {
  let numDataTarget = e.dataset.target;
  let counterInterval = setInterval(() => {
    if (e.innerHTML === numDataTarget) {
        clearInterval(counterInterval)
    } else {
      e.innerHTML++;
    }
  }, 5);
}

// date picker
const datePickerValue = '2020-11-09 12:13:00';
const textInput = document.querySelectorAll('#datepicker');
textInput.forEach(item=>{
  item.value = datePickerValue;
  const datepicker = new NativeDatepicker({
    initialValue: datePickerValue,
    onChange: newValue => {
      item.value = newValue;
    }
  });
  item.onchange = event => {
    datepicker.setValue(event.target.value);
  };
  item.parentNode.appendChild(datepicker.element);
})


// custome select box
let options = $.querySelectorAll(".customeSelectbox option");
let customeSelectboxEl = $.querySelector(".customeSelectbox");
// create selectbox with my own styls
let selectBoxWrapperEl = $.createElement("div");
selectBoxWrapperEl.classList.add("selectBoxWrapper");
selectBoxWrapperEl.textContent = customeSelectboxEl.value;
customeSelectboxEl.after(selectBoxWrapperEl);
// create drop Down
let dropDownEl = document.createElement("ul");
dropDownEl.classList.add("itemsWrapper");
selectBoxWrapperEl.after(dropDownEl);
// hide/show items
selectBoxWrapperEl.addEventListener("click", () => {
  dropDownEl.classList.toggle("active");
  // arrow control
  selectBoxWrapperEl.classList.toggle("active");
});
// add items to items wrapper
options.forEach((el) => {
  dropDownEl.innerHTML += `<li class="itemsWrapperItem">${el.value}</li>`;
});
// click on items
let itemsWrapperItemEl = $.querySelectorAll(".itemsWrapperItem");
itemsWrapperItemEl.forEach((e) => {
  e.addEventListener("click", () => {
    selectBoxWrapperEl.textContent = e.textContent;
    customeSelectboxEl.value = selectBoxWrapperEl.textContent;
  });
});
// display : none items if click on document
document.addEventListener("click", (e) => {
  if (!selectBoxWrapperEl.contains(e.target)) {
    dropDownEl.classList.remove("active");
    selectBoxWrapperEl.classList.remove("active");

  }
});

