(function () {
  document.documentElement.setAttribute("data-preview-passive", "true");

  function blockInteraction(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  ["click", "auxclick", "submit"].forEach(function (eventName) {
    document.addEventListener(eventName, blockInteraction, true);
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
})();
