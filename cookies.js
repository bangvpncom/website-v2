(function () {
  var KEY = "bangvpn_cookie_consent"; // "essential" | "all"

  function getConsent() {
    return localStorage.getItem(KEY);
  }

  function setConsent(value) {
    localStorage.setItem(KEY, value);
    hideBanner();
    applyConsent();
  }

  function hideBanner() {
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.style.display = "none";
  }

  function showBanner() {
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.style.display = "flex";
  }

  function loadAnalytics() {
    if (window.__bangvpn_analytics_loaded) return;
    window.__bangvpn_analytics_loaded = true;
    // Add analytics scripts here when ready, e.g. Google Analytics, Plausible, etc.
  }

  function applyConsent() {
    var consent = getConsent();
    if (consent === "all") {
      loadAnalytics();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var consent = getConsent();
    if (!consent) {
      showBanner();
    } else {
      applyConsent();
    }

    var btnEssential = document.getElementById("cookie-btn-essential");
    var btnAll = document.getElementById("cookie-btn-all");

    if (btnEssential) btnEssential.addEventListener("click", function () { setConsent("essential"); });
    if (btnAll) btnAll.addEventListener("click", function () { setConsent("all"); });
  });
})();
