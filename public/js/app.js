if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js")
      .then(function(registration) {
        console.log("SW scope:", registration.scope);
      }).catch(function(e) {
        console.log("SW registration error:", e);
      });
  }
