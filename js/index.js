document.addEventListener("DOMContentLoaded", () => {
  const ctaSection = document.querySelector(".landing");
  const ctaElement = document.querySelector(".call-to-action");

  if (!ctaSection || !ctaElement) {
    return;
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        ctaElement.classList.add("move");
      } else {
        ctaElement.classList.remove("move");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);
  observer.observe(ctaSection);
});

const appointmentBtn = document.getElementById("appointment-btn");
const appointmentDialog = document.getElementById("appointment-dialog");
const closeDialogBtn = document.getElementById("close-dialog");
if (appointmentBtn && appointmentDialog) {
  appointmentBtn.addEventListener("click", () => {
    appointmentDialog.showModal();
  });
}
if (closeDialogBtn && appointmentDialog) {
  closeDialogBtn.addEventListener("click", () => {
    appointmentDialog.close();
  });
}
// Light dismiss: close dialog when clicking backdrop
if (appointmentDialog) {
  appointmentDialog.addEventListener("click", function (event) {
    if (event.target === appointmentDialog) {
      appointmentDialog.close();
    }
  });
}
0;
