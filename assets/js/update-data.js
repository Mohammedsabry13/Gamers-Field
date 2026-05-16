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
