(function () {
  var interactiveSelector = 'a, button, input, select, textarea, label, [role="button"], [tabindex]';

  function blockEvent(event) {
    var target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    if (target.closest(interactiveSelector)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  }

  function blockSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }

  function blockKeyboard(event) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    blockEvent(event);
  }

  document.addEventListener("click", blockEvent, true);
  document.addEventListener("auxclick", blockEvent, true);
  document.addEventListener("submit", blockSubmit, true);
  document.addEventListener("keydown", blockKeyboard, true);
})();
