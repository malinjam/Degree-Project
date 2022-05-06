var openDatabase = function() {
    // Make sure IndexedDB is supported before attempting to use it
    if (!window.indexedDB) {
      return false;
    }
  
    var request = window.indexedDB.open("fly-trips", 3);
  
    request.onerror = function(event) {
      console.log("Db error: ", event.target.error);
    };
  
    request.onupgradeneeded = function(event) {
      var db = event.target.result;
      if (!db.objectStoreNames.contains("trips")) {
        db.createObjectStore("trips",
          { keyPath: "id" }
        );
      }
    };
  
    return request;
  };
  
  var openObjectStore = function(storeName, successCallback, transactionMode) {
    var db = openDatabase();
    if (!db) {
      return false;
    }
    db.onsuccess = function(event) {
      var db = event.target.result;
      var objectStore = db
        .transaction(storeName, transactionMode)
        .objectStore(storeName);
      successCallback(objectStore);
    };
    return true;
  };
  
  var getTrips = function(successCallback) {
    var trips = [];
    var db = openObjectStore("trips", function(objectStore) {
      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          trips.push(cursor.value);
          cursor.continue();
        } else {
          if (trips.length > 0) {
            successCallback(trips);
          } else {
            $.getJSON("/trips.json", function(trips) {
              openObjectStore("trips", function(tripsStore) {
                for (var i = 0; i < trips.length; i++) {
                  tripsStore.add(trips[i]);
                }
                successCallback(trips);
              }, "readwrite");
            });
  
          }
        }
      };
    });
    if (!db) {
      $.getJSON("/trips.json", successCallback);
    }
  };