$(document).ready(function() {

    // Show this booking
    showBooking();
  
    // Add booking widget functionality
    $("#service-form").submit(function(event) {
      event.preventDefault();
      var departure = $("#form--departure").val();
      var arrival = $("#form--arrival").val();
      var date = $("#form--date").val();
      var promo =  $("#form--promo").val();
      var ppl =  $("#form--ppl").val();
      var loyalty =  $("#form--loyalty").val();
      var lockFare =  $("#form--lockFare").val();
      var changeFlex =  $("#form--changeFlex").val();
      var largeBag =  $("#form--largeBag").val();
      var checkInBags =  $("#form--checkInBags").val();
      var seats =  $("#form--seats").val();
      var mealType =  $("#form--mealType").val();
      var checkInType =  $("#form--checkInType").val();
      var bagGuarantee = $("#form--bagGuarantee").val();
      var bagPrio =  $("#form--bagPrio").val();
      var sport =  $("#form--sport").val();
      var notice =  $("#form--notice").val();
      var autoCheckIn = $("#form--autoCheckIn").val();
      var onTime =  $("#form--onTime").val();
      var pets =  $("#form--pets").val();
      var id = Date.now().toString().substring(3, 11);
      if (!departure || !arrival || !date) {
        return false;
      }
      else{
      addBooking(id, departure, arrival, date, promo, ppl, loyalty, lockFare, changeFlex, largeBag, checkInBags, seats, mealType, checkInType, bagGuarantee, bagPrio, sport, notice, autoCheckIn, onTime, pets);
      return false;}
    });
  
    // checks available bookings every 5 seconds
    setInterval(checkUnconfirmedBookings, 5000);
  });
  
  // Shows THIS booking
  var showBooking = function() {
    $.getJSON("/reservations.json", renderReservations);              
  };
  
  // Go over unconfirmed reservations, and verify their status with the server
  var checkUnconfirmedBookings = function() {
    $(".booking-card--unconfirmed").each(function() {            //api connection?
      $.getJSON(
        "/booking-details.json",
        {id: $(this).data("id")},
        function(data) {
          updateReservationDisplay(data);
        });
    });
  };
  
  // Adds a booking as pending to the DOM, and try to to book it with server
  var addBooking = function(id, departure, arrival, date, promo, ppl, loyalty, lockFare, changeFlex, largeBag, checkInBags, seats, mealType, checkInType, bagGuarantee, bagPrio, sport, notice, autoCheckIn, onTime, pets) {
    var bookingDetails = {
      id: id,
      departure: departure,
      arrival: arrival, 
      date: date, 
      promo: promo, 
      ppl:ppl,
      loyalty: loyalty, 
      lockFare: lockFare, 
      changeFlex: changeFlex, 
      largeBag: largeBag, 
      checkInBags: checkInBags,
      seats: seats, 
      mealType: mealType, 
      checkInType: checkInType, 
      bagGuarantee: bagGuarantee, 
      bagPrio: bagPrio, 
      sport: sport, 
      notice: notice, 
      autoCheckIn: autoCheckIn, 
      onTime: onTime, 
      pets: pets,
      status:       "Awaiting confirmation"
    };
    renderReservation(bookingDetails);
    $.getJSON("/make-reservation", bookingDetails, function(data) {
      updateReservationDisplay(data);
    });
  };

