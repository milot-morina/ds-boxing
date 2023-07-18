const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// 
// Detect when the section is scrolled into view
const section = document.querySelector('#fun-facts');
let sectionIsVisible = false;

window.addEventListener('scroll', function() {
  if (!sectionIsVisible && isElementInViewport(section)) {
    sectionIsVisible = true;
    
    // Animate the image
    const image = document.querySelector('.animated-image');
    image.style.opacity = 1;
    image.style.transform = 'translateX(0)';
    
    // Animate the icons and numbers
    const icons = document.querySelectorAll('.animated-icon');
    const numbers = document.querySelectorAll('.animated-number');
    icons.forEach(function(icon) {
      icon.style.opacity = 1;
      icon.style.transform = 'translateY(0)';
    });
    numbers.forEach(function(number) {
      animateNumber(number, parseInt(number.dataset.final), 1000);
      number.style.opacity = 1;
    });
 


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