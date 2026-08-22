(function () {
  var interactiveSelector = 'a, button, input, select, textarea, [role="button"], summary';

  function closestInteractive(target) {
    return target && target.closest ? target.closest(interactiveSelector) : null;
  }

  function blockInteraction(event) {
    if (!closestInteractive(event.target)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }

  document.addEventListener("click", blockInteraction, true);
  document.addEventListener("auxclick", blockInteraction, true);
  document.addEventListener("submit", blockInteraction, true);
  document.addEventListener(
    "keydown",
    function (event) {
      if ((event.key === "Enter" || event.key === " ") && closestInteractive(event.target)) {
        blockInteraction(event);
      }
    },
    true
  );
})();
