(function () {
  var interactiveSelector = 'a, button, input, select, textarea, label, [role="button"], [tabindex]';
  var assetPattern = /\.(?:js|css|png|jpe?g|webp|avif|gif|svg|ico|mp4|webm|woff2?|ttf|otf|map|json)$/i;
  var basePath = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');

  function shouldBlockPreviewRequest(input) {
    try {
      var rawUrl = typeof input === 'string' ? input : input && input.url;
      if (!rawUrl) {
        return false;
      }

      var url = new URL(rawUrl, window.location.href);
      if (url.origin !== window.location.origin) {
        return false;
      }

      if (url.pathname.indexOf('/_next/static/') !== -1) {
        return false;
      }

      if (url.search.indexOf('_rsc=') !== -1 || url.pathname.indexOf('/__next') !== -1) {
        return true;
      }

      if (url.pathname !== basePath && url.pathname.indexOf(basePath + '/') !== 0) {
        return false;
      }

      if (url.pathname === window.location.pathname || url.pathname === basePath + '/index.html') {
        return false;
      }

      return !assetPattern.test(url.pathname);
    } catch (error) {
      return false;
    }
  }

  function isBlockedLinkNode(node) {
    return node && node.tagName === 'LINK' && shouldBlockPreviewRequest(node.href || node.getAttribute('href'));
  }

  if (window.fetch) {
    var nativeFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      if (shouldBlockPreviewRequest(input)) {
        return Promise.resolve(new Response('', { status: 204, statusText: 'Preview request blocked' }));
      }

      return nativeFetch(input, init);
    };
  }

  if (window.XMLHttpRequest) {
    var nativeOpen = window.XMLHttpRequest.prototype.open;
    var nativeSend = window.XMLHttpRequest.prototype.send;

    window.XMLHttpRequest.prototype.open = function (method, url) {
      this.__previewBlockedUrl = shouldBlockPreviewRequest(url);
      return nativeOpen.apply(this, arguments);
    };

    window.XMLHttpRequest.prototype.send = function () {
      if (this.__previewBlockedUrl) {
        try {
          this.abort();
        } catch (error) {}
        return;
      }

      return nativeSend.apply(this, arguments);
    };
  }

  var nativeAppendChild = Node.prototype.appendChild;
  Node.prototype.appendChild = function (node) {
    if (isBlockedLinkNode(node)) {
      return node;
    }

    return nativeAppendChild.apply(this, arguments);
  };

  var nativeInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (node) {
    if (isBlockedLinkNode(node)) {
      return node;
    }

    return nativeInsertBefore.apply(this, arguments);
  };

  function neutralizeLinks(root) {
    if (!root || !root.querySelectorAll) {
      return;
    }

    root.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (shouldBlockPreviewRequest(href)) {
        link.setAttribute('data-preview-href', href);
        link.setAttribute('href', '#');
        link.setAttribute('rel', 'nofollow noopener');
      }
    });

    root.querySelectorAll('link[href]').forEach(function (link) {
      if (isBlockedLinkNode(link)) {
        link.remove();
      }
    });
  }

  function startNeutralizer() {
    neutralizeLinks(document);

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            neutralizeLinks(node);
          }
        });
      });
      neutralizeLinks(document);
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    window.setInterval(function () {
      neutralizeLinks(document);
    }, 500);
  }

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
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    blockEvent(event);
  }

  document.addEventListener('click', blockEvent, true);
  document.addEventListener('auxclick', blockEvent, true);
  document.addEventListener('submit', blockSubmit, true);
  document.addEventListener('keydown', blockKeyboard, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startNeutralizer, { once: true });
  } else {
    startNeutralizer();
  }
})();
