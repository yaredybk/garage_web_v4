function googleTranslateElementInit() {
  var googleTranslateElement = google.translate.TranslateElement.getInstance();
  const disabled = localStorage.getItem("translateEnabled") === "false";
  if (disabled) {
    document.getElementById("toggle-lang").checked = false;
    googleTranslateElement?.setEnabled(false);
    // return;
  } else {
    googleTranslateElement?.setEnabled(true);
    document.getElementById("toggle-lang").checked = true;
  }
  googleTranslateElement =
    googleTranslateElement ||
    new google.translate.TranslateElement(
      { pageLanguage: "en" },
      "google_translate_element"
    );
}
// document.addEventListener('DOMContentLoaded', (event) => {
//     const enabled = localStorage.getItem('translateEnabled') === 'true';
//     if (enabled) {
//         document.getElementById('toggle-lang').checked = true;
//     }
// });
function disableTranslation(e) {
  console.log("Disabling translation");

  // If checkbox is unchecked, hide the translation
  google.translate.TranslateElement.getInstance().setEnabled(false);
  setTimeout(() => {
    google.translate.TranslateElement.getInstance().setEnabled(true);
  }, 200);
}
