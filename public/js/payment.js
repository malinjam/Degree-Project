var showBookingNotification = function() {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification("Reservation Received", {
        body:
          "Thank you for booking with Flyone\n"+
          "You will be notified if your chnages to your flight occur. ",
        icon: "/icons-images/apple-touch-icon.png",
        badge: "/favicon.ico",
        tag: "Booking Complete"
      });
    });
  };
  
  var checkNotification = function() {
    if ("Notification" in window && "serviceWorker" in navigator) {
      Notification.requestPermission().then(function(permission){
        if (permission === "granted") {
          showBookingNotification();
        }
      });
    }
  };

  