/* profile.js */

document.addEventListener("DOMContentLoaded", function () {
  /* ---- Form Submit with Validation ---- */
  const form = document.getElementById("profileForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;
      const required = form.querySelectorAll("[required]");

      required.forEach((field) => {
        field.classList.remove("is-invalid");
        if (!field.value.trim()) {
          field.classList.add("is-invalid");
          valid = false;
        }
      });

      // Email validation
      const emailField = form.querySelector('[type="email"]');
      if (emailField && emailField.value) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
          emailField.classList.add("is-invalid");
          valid = false;
        }
      }

      // Phone validation
      const phoneField = form.querySelector('[type="tel"]');
      if (phoneField && phoneField.value) {
        if (!/^(01)[0-9]{9}$/.test(phoneField.value.replace(/\s/g, ""))) {
          phoneField.classList.add("is-invalid");
          valid = false;
        }
      }

      if (valid) {
        showToast("تم حفظ البيانات بنجاح ✓", "success");
      } else {
        showToast("يرجى تصحيح الحقول المميزة بالأحمر", "error");
      }
    });

    // Remove invalid on input
    form.querySelectorAll(".form-control, .form-select").forEach((field) => {
      field.addEventListener("input", () =>
        field.classList.remove("is-invalid"),
      );
      field.addEventListener("change", () =>
        field.classList.remove("is-invalid"),
      );
    });
  }

  /* ---- Logout ---- */
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (confirm("هل تريد تسجيل الخروج؟")) {
        localStorage.removeItem("gf_user");
        window.location.href = "login.html";
      }
    });
  }
});

function showToast(message, type) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.style.cssText =
      "position:fixed;bottom:24px;left:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;";
    document.body.appendChild(container);
  }
  const bg = type === "success" ? "#1D9E75" : "#ff2e00";
  const toast = document.createElement("div");
  toast.style.cssText = `background:${bg};color:#fff;padding:13px 22px;border-radius:10px;font-family:'Alexandria',sans-serif;font-size:14px;box-shadow:0 4px 16px rgba(0,0,0,0.18);animation:toastIn .3s ease;min-width:220px;`;
  toast.textContent = message;

  if (!document.getElementById("toast-kf")) {
    const s = document.createElement("style");
    s.id = "toast-kf";
    s.textContent =
      "@keyframes toastIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}";
    document.head.appendChild(s);
  }

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = "opacity .3s";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 320);
  }, 3000);
}
