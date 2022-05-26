if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js")
      .then(registration=>{
      }).catch(function(err) {
        console.log("Service worker registration failed:", err);
      });
  }