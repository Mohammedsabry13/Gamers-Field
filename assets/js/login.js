//======> BUTTON ELEMENTS <======
//  field
const mobileInput = document.getElementById("mobileNumber");
const submitButton = document.querySelector(".button-login");

// Make the button inactive at first
submitButton.disabled = true;
submitButton.style.backgroundColor = "#cccccc";
submitButton.style.borderColor = "#cccccc";

mobileInput.addEventListener("input", function () {
  // السماح بالأرقام فقط - إزالة أي حروف أو رموز
  this.value = this.value.replace(/[^0-9]/g, "");

  // تفعيل الزر إذا كان هناك نص، وإلا جعله غير نشط
  if (this.value.length > 0) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#ff2e00"; // أحمر
    submitButton.style.borderColor = "#ff2e00";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#cccccc";
    submitButton.style.borderColor = "#cccccc";
  }
});

mobileInput.addEventListener("keypress", function (e) {
  // السماح بالأرقام فقط (0-9)
  if (
    !/[0-9]/.test(e.key) &&
    e.key !== "Backspace" &&
    e.key !== "Delete" &&
    e.key !== "Tab" &&
    e.key !== "Enter"
  ) {
    e.preventDefault();
  }
});

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
