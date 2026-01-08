/* Simple HTML includes for static site */
(async function () {
  function safeSetLang() {
    if (typeof window.setLang !== "function") {
      window.setLang = function(){ /* stub */ };
    }
  }

  async function inject(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    try {
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) throw new Error("Failed to load " + url);
      el.innerHTML = await res.text();
    } catch (e) {
      // fail silently to avoid breaking page
      console.warn(e);
    }
  }

  await inject("site-header", "/includes/header.html");
  safeSetLang();
  await inject("site-footer", "/includes/footer.html");
})();