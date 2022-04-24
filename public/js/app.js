if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js")
      .then(function(registration) {
        console.log("SW scope:", registration.scope);
      }).catch(function(err) {
        console.log("SW registration error:", err);
      });
  }
