const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Preloader
const preloader = document.querySelector('#preloader')

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader')
})


// Dark Mode Toggle Start
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('#darkModeToggle');
    const logoImg = document.querySelector('.logo');
    const currentMode = localStorage.getItem('theme');
    const darkModeSwitchers = document.querySelectorAll('.switch-btn');

    if (currentMode === 'dark') {
      document.documentElement.classList.add('dark');
      logoImg.src = 'images/logo-dark.png';
      toggleButtons.forEach((toggleButton) => {
        toggleButton.textContent = 'Light Mode';
        toggleButton.classList.add('shadow-j-yellow/35');
      });
      darkModeSwitchers.forEach((btn) => {
        btn.classList.add('slide');
        // btn.classList.add('text-white')
        // btn.classList.remove('text-j-yellow')
      })
    }

    darkModeSwitchers.forEach(function(btn) {
      btn.addEventListener("click", function () {
        document.documentElement.classList.toggle('dark');
        if (!btn.classList.contains("slide")) {
          btn.classList.add("slide");
        } else {
          btn.classList.remove("slide");
        }
        if (document.documentElement.classList.contains('dark')) {
          localStorage.setItem('theme', 'dark');
          logoImg.src = 'images/logo-dark.png';
          btn.classList.add('text-white')
          btn.classList.remove('text-j-yellow')
        } else {
          localStorage.setItem('theme', 'light');
          logoImg.src = 'images/logo-light.png';
          btn.classList.add('text-j-yellow')
          btn.classList.remove('text-white')
        }
      });
    })


    
  
    // toggleButtons.forEach(function(toggleButton) {
    //     toggleButton.addEventListener('click', () => {
    //         document.documentElement.classList.toggle('dark');
    //         if (document.documentElement.classList.contains('dark')) {
    //           localStorage.setItem('theme', 'dark');
    //           logoImg.src = 'images/logo-dark.png';
    //           toggleButton.textContent = 'Light Mode';
    //         } else {
    //           localStorage.setItem('theme', 'light');
    //           logoImg.src = 'images/logo-light.png';
    //           toggleButton.textContent = 'Dark Mode';
    //         }
    //       });
    // })
  });
 // Dark Mode Toggle End



// Navbar Toggle Start
const navToggles = document.querySelectorAll('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggles.forEach(function(navToggle) {
    navToggle.addEventListener('click', () => {
        // linksContainer.classList.toggle('show-links');
        const heightContainer = linksContainer.getBoundingClientRect().height
        const linksHeight = links.getBoundingClientRect().height
    
        if (heightContainer === 0) {
            linksContainer.style.height = `${linksHeight}px`
        } else {
            linksContainer.style.height = 0
        }
    })
})
// Navbar Toggle End

// Animations Script Start
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        } 
    })
})

observer.addEventListener

const hiddenYElements = document.querySelectorAll('.hiddenYEl');
hiddenYElements.forEach((el) => observer.observe(el))

const hiddenXElements = document.querySelectorAll('.hiddenXEl');
hiddenXElements.forEach((el) => observer.observe(el))
// Animations Script End

const animateDescription = document.querySelectorAll('.description');
animateDescription.forEach((description) => {
  description.addEventListener('mouseenter', (e) => {
    description.children[0].classList.add('show');
  })
  description.addEventListener('mouseleave', () => {
    description.children[0].classList.remove('show');
  })
})


// Countdown Script Start
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h3');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(2024, 7, 26, 10, 30, 0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// future time in ms
const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      item = `0${item}`
    }
    return item
  }

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  });
}

let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()

// Copyright Year Update
const yearUpdate = document.getElementById('footerYear')
const currentYear = new Date().getFullYear();

yearUpdate.innerHTML = currentYear;

