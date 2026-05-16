//======> ACTIVATE THE PRICE SLIDER <======
function toggleSection(element) {
  const options = element.nextElementSibling;
  const isHidden = options.classList.contains("hidden");

  if (isHidden) {
    options.classList.remove("hidden");
    element.classList.remove("collapsed");
  } else {
    options.classList.add("hidden");
    element.classList.add("collapsed");
  }
}
function showMore(element) {
  if (element.textContent === "عرض المزيد") {
    element.textContent = "عرض أقل";
    // هنا يمكن إضافة المزيد من الخيارات
  } else {
    element.textContent = "عرض المزيد";
    // هنا يمكن إخفاء الخيارات الإضافية
  }
}
function toggleSection(element) {
  const options = element.nextElementSibling;
  options.classList.toggle("hidden");
  element.classList.toggle("collapsed");
}
document.addEventListener("DOMContentLoaded", function () {
  const priceSlider = document.querySelector(".price-slider");
  const priceInputs = document.querySelectorAll(".price-input");

  priceSlider.addEventListener("click", function (e) {
    const rect = this.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const value = Math.round(percent * 100);

    priceInputs[1].value = value;

    const slider = this.querySelector("::before") || this;
    slider.style.width = percent * 100 + "%";
  });

  // تحديث شريط التمرير عند تغيير القيم
  priceInputs.forEach((input) => {
    input.addEventListener("input", function () {
      const min = parseInt(priceInputs[0].value) || 0;
      const max = parseInt(priceInputs[1].value) || 100;
      const percent = max / 100;

      priceSlider.style.setProperty("--slider-width", percent * 100 + "%");
    });
  });
});

// ___________________________________________________________________

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
