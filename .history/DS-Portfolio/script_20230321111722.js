const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// 
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var offset = $(".fun-facts").offset().top;
  var height = $(".fun-facts").outerHeight();
  offset = offset + height / 2;
  var calc = 1 - (scroll - offset + 400) / 400;

  if (calc > 0) {
    $(".fun-facts .number").each(function() {
      var $this = $(this);
      $this.text(Math.round($this.data("count") * calc));
    });
  }

  if (scroll > offset - 400) {
    $(".fun-facts").addClass("animate");
  }
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