//======> MIT License - Copyright (c) Mohammed Sabry <======
// ⚠️ This template was originally created by Mohammed Sabry (credit required): github.com/Mohammedsabry13

//======> INITIALIZE SLIDER <======
document.addEventListener("DOMContentLoaded", () => {
  new HeroSlider();
});
class HeroSlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = document.querySelectorAll(".slide");
    this.dots = document.querySelectorAll(".dot");
    this.totalSlides = this.slides.length;

    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");

    this.init();
  }

  init() {
    // Navigation buttons
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    // Dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Auto-play (optional)
    // this.startAutoPlay();

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.nextSlide(); // RTL
      if (e.key === "ArrowRight") this.prevSlide(); // RTL
    });

    // Touch/swipe support
    this.addTouchSupport();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlider();
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlider();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlider();
  }

  updateSlider() {
    // Update slides
    this.slides.forEach((slide, index) => {
      slide.classList.remove("active", "prev", "next");

      if (index === this.currentSlide) {
        slide.classList.add("active");
      } else if (index < this.currentSlide) {
        slide.classList.add("prev");
      } else {
        slide.classList.add("next");
      }

      // Reset and restart animations
      this.resetAnimations(slide);
      if (index === this.currentSlide) {
        setTimeout(() => this.startAnimations(slide), 100);
      }
    });

    // Update dots
    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentSlide);
    });
  }

  resetAnimations(slide) {
    const animatedElements = slide.querySelectorAll(
      ".main-title, .description, .shop-now-btn, .laptop-image"
    );
    animatedElements.forEach((el) => {
      el.style.animation = "none";
    });
  }

  startAnimations(slide) {
    const title = slide.querySelector(".main-title");
    const description = slide.querySelector(".description");
    const button = slide.querySelector(".shop-now-btn");
    const image = slide.querySelector(".laptop-image");

    if (title) title.style.animation = "slideInUp 0.8s ease forwards 0.3s";
    if (description)
      description.style.animation = "slideInUp 0.8s ease forwards 0.5s";
    if (button) button.style.animation = "slideInUp 0.8s ease forwards 0.7s";
    if (image) image.style.animation = "slideInScale 1s ease forwards 0.4s";
  }

  addTouchSupport() {
    let startX = 0;
    let endX = 0;

    document.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    document.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      this.handleSwipe();
    });

    const handleSwipe = () => {
      const difference = startX - endX;
      const threshold = 50;

      if (Math.abs(difference) > threshold) {
        if (difference > 0) {
          this.nextSlide(); // Swipe left = next (RTL)
        } else {
          this.prevSlide(); // Swipe right = prev (RTL)
        }
      }
    };

    this.handleSwipe = handleSwipe;
  }

  startAutoPlay(interval = 5000) {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, interval);

    // Pause on hover
    document
      .querySelector(".hero-slider")
      .addEventListener("mouseenter", () => {
        clearInterval(this.autoPlayInterval);
      });

    document
      .querySelector(".hero-slider")
      .addEventListener("mouseleave", () => {
        this.startAutoPlay(interval);
      });
  }
}

//======> SEARCH BAR <======
document.addEventListener("DOMContentLoaded", function () {
  // Search functionality
  const searchIcon = document.getElementById("searchIcon");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");

  // Open search overlay
  if (searchIcon) {
    searchIcon.addEventListener("click", function (e) {
      e.preventDefault();

      // Add click animation
      this.style.transform = "scale(0.8)";
      setTimeout(() => {
        this.style.transform = "scale(1.1)";
        setTimeout(() => {
          this.style.transform = "scale(1)";
        }, 100);
      }, 100);

      searchOverlay.classList.add("show");
      setTimeout(() => {
        searchInput.focus();
      }, 300);
    });
  }

  // Close search overlay
  if (closeSearch) {
    closeSearch.addEventListener("click", function () {
      searchOverlay.classList.remove("show");
    });
  }

  // Close search when clicking outside
  if (searchOverlay) {
    searchOverlay.addEventListener("click", function (e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove("show");
      }
    });
  }

  // Close search with Escape key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      searchOverlay &&
      searchOverlay.classList.contains("show")
    ) {
      searchOverlay.classList.remove("show");
    }
  });

  // Handle search form submission
  const searchBtn = document.querySelector(".search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        console.log("البحث عن:", searchTerm);
        // هنا يمكنك إضافة منطق البحث
      }
    });
  }

  // Handle Enter key in search input
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
          console.log("البحث عن:", searchTerm);
          // هنا يمكنك إضافة منطق البحث
        }
      }
    });
  }
});
