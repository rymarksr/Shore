// About Section
function toggleDescription() {
    var description = document.querySelector('.description');
      var ellipsis = document.querySelector('.ellipsis');
      var readMoreLink = document.querySelector('.read-more-link');
      var readLessLink = document.querySelector('.read-less-link');
      
      description.classList.toggle('expanded');
      ellipsis.style.display = description.classList.contains('expanded') ? 'none' : 'block';
      readMoreLink.style.display = description.classList.contains('expanded') ? 'none' : 'inline';
      readLessLink.style.display = description.classList.contains('expanded') ? 'inline' : 'none';
  }

// Float In for smooth scrolling
  const floatItems = document.querySelectorAll(".float-in-item");

  function floatInOnScroll() {
    floatItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const itemBottom = item.getBoundingClientRect().bottom;
      const isVisible = itemTop < window.innerHeight && itemBottom >= 0;
  
      if (isVisible) {
        item.classList.add("float-in");
      } else {
        item.classList.remove("float-in");
      }
    });
  }
  
  document.addEventListener("scroll", floatInOnScroll);