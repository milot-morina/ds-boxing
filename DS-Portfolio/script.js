const overlay = document.querySelector('.overlay');
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  overlay.classList.toggle('active');
  navbarLinks.classList.toggle('active');
  navbarLinks.style.textAlign = "center";
})

// 
  // Function to animate the number counters
function animateNumberCounters() {
  // Get all the counter elements
  const counters = document.querySelectorAll('.timer');

  // Loop through the counters
  counters.forEach(counter => {
    // Get the target number from the data-to attribute
    const target = parseInt(counter.getAttribute('data-to'));

    // Set the initial count to zero
    let count = 0;

    // Set the interval to update the count
    const timer = setInterval(() => {
      // Increment the count
      count++;

      // Update the counter element with the new count
      counter.textContent = count;

      // Stop the interval when the target number is reached
      if (count === target) {
        clearInterval(timer);
      }
    }, 10);
  });
}

// Call the animateNumberCounters function when the page is loaded
window.addEventListener('load', animateNumberCounters);


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