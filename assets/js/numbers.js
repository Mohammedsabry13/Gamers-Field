//======> TIME TO RESEND THE MESSAGE <======
// 1: 30 minutes in seconds
let timeLeft = 90;
let timerInterval;
const otpInputs = document.querySelectorAll(".otp-input");
const continueBtn = document.getElementById("continueBtn");
const timerElement = document.getElementById("timer");
const timerText = document.getElementById("timerText");
const resendLink = document.getElementById("resendLink");
// Start the countdown timer
function startTimer() {
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerElement.textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      timerText.style.display = "none";
      resendLink.style.display = "block";
    }

    timeLeft--;
  }, 1000);
}
otpInputs.forEach((input, index) => {
  // السماح بالأرقام فقط
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // إزالة أي شيء ليس رقماً
    e.target.value = value.replace(/[^0-9]/g, "");

    // الانتقال للحقل التالي عند إدخال رقم
    if (e.target.value && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }

    // فحص اكتمال الكود وتفعيل الزر
    checkCodeCompletion();
  });

  // التعامل مع مفتاح Backspace
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpInputs[index - 1].focus();
    }
  });

  // منع إدخال أي شيء غير الأرقام
  input.addEventListener("keypress", (e) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab"
    ) {
      e.preventDefault();
    }
  });
});
function checkCodeCompletion() {
  const code = Array.from(otpInputs)
    .map((input) => input.value)
    .join("");

  if (code.length === 6) {
    continueBtn.disabled = false;
    continueBtn.classList.add("active");
  } else {
    continueBtn.disabled = true;
    continueBtn.classList.remove("active");
  }
}
// Retransmission
resendLink.addEventListener("click", (e) => {
  e.preventDefault();

  // إعادة تعيين العداد
  timeLeft = 90;
  resendLink.style.display = "none";
  timerText.style.display = "block";

  // مسح الحقول
  otpInputs.forEach((input) => {
    input.value = "";
  });

  // إعادة تعيين الزر
  continueBtn.disabled = true;
  continueBtn.classList.remove("active");

  // التركيز على الحقل الأول
  otpInputs[0].focus();

  // بدء العداد مرة أخرى
  startTimer();
});
startTimer();
otpInputs[0].focus();

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
