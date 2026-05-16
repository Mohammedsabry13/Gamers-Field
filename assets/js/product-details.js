//======> IMAGE GALLERY FUNCTIONALITY <======
const mainImages = [
  "assets/image/laptop-1.jpg",
  "assets/image/laptop-2.jpg",
  "assets/image/laptop-3.jpg",
  "assets/image/laptop-4.jpg",
  "assets/image/laptop-5.jpg",
];
const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.getElementById("mainImage");
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    this.classList.add("active");
    const imageIndex = parseInt(this.getAttribute("data-index"));
    mainImage.src = mainImages[imageIndex];
  });
});
// THE FUNCTION OF INCREASING THE QUANTITY
function increaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}
// QUANTITY REDUCTION FUNCTION
function decreaseQuantity() {
  const quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
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
