(function () {
  var homePath = "/velora-fashion-preview/site/index.html";
  var basePath = "/velora-fashion-preview/site/";

  document.documentElement.setAttribute("data-velora-preview-passive", "true");

  function blockInteraction(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  function keepPreviewOnShop() {
    var path = window.location.pathname;

    if (path === basePath || path === homePath) {
      return;
    }

    window.history.replaceState(null, "", homePath);
  }

  ["click", "auxclick", "submit"].forEach(function (eventName) {
    document.addEventListener(eventName, blockInteraction, true);
  });

  ["mouseover", "mouseenter", "pointerover"].forEach(function (eventName) {
    document.addEventListener(
      eventName,
      function (event) {
        if (event.target && event.target.closest("header")) {
          event.stopImmediatePropagation();
          event.stopPropagation();
        }
      },
      true
    );
  });

  document.addEventListener(
    "keydown",
    function (event) {
      if (
        (event.key === "Enter" || event.key === " ") &&
        event.target &&
        event.target.closest("a, button, input, select, textarea, [role='button']")
      ) {
        blockInteraction(event);
      }
    },
    true
  );

  window.addEventListener("popstate", keepPreviewOnShop);
})();
