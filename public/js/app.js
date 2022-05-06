if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js")
      .then(registration=>{
        console.log("SW registered with scope:", registration.scope);
      }).catch(function(err) {
        console.log("Service worker registration failed:", err);
      });
  }