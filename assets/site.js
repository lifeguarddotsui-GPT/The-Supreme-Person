/* Measurement-ready Amazon referrals. No data is sent unless an analytics provider defines gtag. */
(function () {
  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[data-amazon-link]");
    if (!link) return;
    var details = {
      event_category: "outbound",
      destination: "amazon",
      link_url: link.href,
      page_path: window.location.pathname
    };
    if (typeof window.gtag === "function") {
      window.gtag("event", "amazon_outbound_click", details);
    }
    window.dispatchEvent(new CustomEvent("amazon_outbound_click", { detail: details }));
  });
})();
