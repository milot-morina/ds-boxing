const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// 
  // Get all the elements with the 'timer' class
var timers = document.getElementsByClassName('timer');

// Function to animate the numbers
function animateNumbers(timer) {
  // Get the final value to count to
  var finalValue = parseInt(timer.getAttribute('data-to'));

  // Get the speed of the animation in milliseconds
  var speed = parseInt(timer.getAttribute('data-speed'));

  // Set the initial value to 0
  var currentValue = 0;

  // Calculate the increment value based on the final value and the speed
  var increment = finalValue / speed;

  // Set an interval to increment the value every 1 millisecond
  var interval = setInterval(function() {
    currentValue += increment;

    // Round the current value to the nearest integer
    var roundedValue = Math.round(currentValue);

    // If the rounded value is greater than or equal to the final value,
    // set the value to the final value and clear the interval
    if (roundedValue >= finalValue) {
      timer.innerHTML = finalValue;
      clearInterval(interval);
    } else {
      timer.innerHTML = roundedValue;
    }
  }, 1);
}

// Function to check if an element is visible in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate the numbers when the section becomes visible
function handleScroll() {
  for (var i = 0; i < timers.length; i++) {
    if (isElementInViewport(timers[i])) {
      animateNumbers(timers[i]);
    }
  }
}

// Call the handleScroll function when the page is loaded or scrolled
window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);


//




const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements2 = document.querySelectorAll('.hidden2')
const hiddenElements3 = document.querySelectorAll('.hidden3')
hiddenElements.forEach((el) => observer.observe(el))
hiddenElements2.forEach((el) => observer.observe(el))
hiddenElements3.forEach((el) => observer.observe(el))






//collapbsibleTable
let coll = document.getElementsByClassName("collapsible-button");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}