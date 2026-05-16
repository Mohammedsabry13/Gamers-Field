//======> DISCOUNT COUPON <======
document.addEventListener("DOMContentLoaded", function () {
  const VALID_COUPON = "DISCOUNT550";
  const DISCOUNT_VALUE = 550;
  let currentDiscount = 0;

  // --- Event Listeners ---

  // Listener for all quantity and remove buttons
  document
    .querySelector(".product-list")
    .addEventListener("click", function (e) {
      // Handle quantity increase
      if (e.target.classList.contains("increase")) {
        updateQuantity(e.target, 1);
      }
      // Handle quantity decrease
      else if (e.target.classList.contains("decrease")) {
        updateQuantity(e.target, -1);
      }
      // Handle item removal
      else if (e.target.closest(".btn-remove")) {
        e.target.closest(".product-item").remove();
        updateTotals();
      }
    });

  // Apply coupon
  document
    .getElementById("apply-coupon-btn")
    .addEventListener("click", function () {
      const couponInput = document.getElementById("coupon-input");
      if (couponInput.value.trim().toUpperCase() === VALID_COUPON) {
        document
          .getElementById("coupon-discount-row")
          .classList.remove("d-none");
        document.getElementById(
          "coupon-discount-amount"
        ).innerText = `-${formatCurrency(DISCOUNT_VALUE)}`;
        currentDiscount = DISCOUNT_VALUE;
        updateTotals();
      } else {
        alert("كود الكوبون غير صالح");
      }
    });

  // Remove coupon
  document
    .getElementById("remove-coupon-btn")
    .addEventListener("click", function () {
      document.getElementById("coupon-discount-row").classList.add("d-none");
      document.getElementById("coupon-input").value = "";
      currentDiscount = 0;
      updateTotals();
    });

  // --- Core Functions ---

  function updateQuantity(button, change) {
    const productItem = button.closest(".product-item");
    const quantityElement = productItem.querySelector(".quantity-value");
    let quantity = parseInt(quantityElement.innerText);

    if (quantity + change > 0) {
      quantity += change;
      quantityElement.innerText = quantity;
      updateTotals();
    }
  }

  function updateTotals() {
    const productItems = document.querySelectorAll(".product-item");
    let subtotal = 0;

    productItems.forEach((item) => {
      const price = parseFloat(item.dataset.price);
      const quantity = parseInt(
        item.querySelector(".quantity-value").innerText
      );
      subtotal += price * quantity;
    });

    const shipping = parseFloat(
      document.getElementById("shipping").innerText.replace(/[^0-9.]/g, "")
    );
    const total = subtotal + shipping - currentDiscount;

    document.getElementById("subtotal").innerText = formatCurrency(subtotal);
    document.getElementById("total").innerText = formatCurrency(total);

    // If cart is empty, show a message
    if (productItems.length === 0) {
      document.querySelector(".product-list").innerHTML =
        '<p class="text-center my-4">سلة التسوق فارغة.</p>';
    }
  }

  function formatCurrency(value) {
    return value.toLocaleString("en-EG", { minimumFractionDigits: 0 }) + " ج.م";
  }

  // Initial calculation on page load
  updateTotals();
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
