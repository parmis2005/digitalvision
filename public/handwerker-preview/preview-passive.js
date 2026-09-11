(function () {
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

      return url.search.indexOf('_rsc=') !== -1 || url.pathname.indexOf('/__next') !== -1;
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

  function removeBlockedPrefetchLinks(root) {
    if (!root || !root.querySelectorAll) {
      return;
    }

    root.querySelectorAll('link[href]').forEach(function (link) {
      if (isBlockedLinkNode(link)) {
        link.remove();
      }
    });
  }

  function startPrefetchGuard() {
    removeBlockedPrefetchLinks(document);

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            removeBlockedPrefetchLinks(node);
          }
        });
      });
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startPrefetchGuard, { once: true });
  } else {
    startPrefetchGuard();
  }
})();
