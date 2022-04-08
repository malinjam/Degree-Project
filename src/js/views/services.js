const ServiceSelect = (props) => {

    return(
<html lang="en">

<head>
    <title>FLYONE | Extras</title>
    <link rel="stylesheet" href="../css/style.css"/>
    <script type="" src="../js/main.js"></script>
</head>

<body style="justify-content: left;">
    <div class="header">
        <div style="flex:1;margin: 2vw;">Menu</div>
        <div id="header-center"> <img style="height:10vh;" src="../icons-images/images/flyone-logo.png"/></div>
        <div style="flex:1;margin: 2vw;">Login</div>
    </div>

    <h2>Baggage</h2>
    <div><img src=""/> Small cabin bag included </div>     

    <form style="display:flex; flex-direction:column; margin:1%;">
        <div class="contbox" id="contservices">
            <img src="../icons-images/svgs/select bags/F1-Icon-04.svg" id="extras"/>
            <div id="textflex">
                <div id="upper">Large Cabin bag + Priority</div>
                <div id="lower">Extra 10kg (50x40x25) cabin bag</div>
            </div>
        </div>
        <div class="contbox" id="contservices">
            <img src="../icons-images/svgs/select bags/F1-Icon-03.svg" id="extras"/>
            <div id="textflex">
                <div id="upper">Checked-in baggage</div>
                <div id="lower">Select 10kg, 20kg or 30kg</div>
            </div>
        </div>
        <h2>Seats and Meals</h2>
        <div class="contbox" id="contservices">
            <img src="../icons-images/svgs/loader icon/loader-type1-4.svg" id="extras"/>
            <div id="textflex">
                <div id="upper">Seats</div>
                <div id="lower">Travel with family and friends.</div>
            </div>
        </div>
        <div style="display:flex; flex-direction:row">
            <div class="contbox" style="flex:1; justify-content: center;align-items: center;">
                <img src="" id="extras"/>
                <div id="upper">Classic</div>
                <div id="lower"></div>
            </div>
            <div class="contbox" style="flex:1; j
            ustify-content: center;align-items: center;">
                <img src="" id="extras"/>
                <div id="upper">Medeterranean</div>
                <div id="lower"></div>
            </div>
            <div class="contbox" style="flex:1; justify-content: center;align-items: center;">
                <img src="" id="extras"/>
                <div id="upper">Traditional</div>
                <div id="lower"></div>
            </div>
        </div>
        <h2> Check-in</h2>
        <div> <img style="height:1em;" src="../icons-images/svgs/loader icon/loader-type1-2.svg"/> Online check-in free
            24h</div>
        <div style="display:flex; flex-direction: row; justify-content: center;">
            <div class="contbox" style="justify-content: center; text-align: center; align-items: center; padding: 3%;">
                <img src="../icons-images/svgs/select specs/F1-133-Airport-Check-in.svg" id="extras" style="height: 50%;width:auto;"/>
                <div id="lower">Airport Check-in</div>
            </div>
            <div class="contbox" style="justify-content: center; text-align: center; align-items: center; padding: 3%;">
                <img src="../icons-images/svgs/select specs/F1-133-Early-Checking.svg" id="extras" style="height: 50%; width:auto;"/>
                <div id="lower">Early Check-in</div>
            </div>
        </div>
        <h2>Other services</h2>
        <div class="contbox" id="contservices">
            <img src="../icons-images/svgs/select bags/F1-71-Bag-guarantee.svg" id="extras"/>
            <div id="textflex">
                <div id="upper">Baggage guarantee</div>
                <div id="lower">Insurance in case of damage</div>
            </div>
        </div>
        <div class="contbox" id="contservices">
            <img src="../icons-images/svgs/select bags/F1-Icon-04.svg" id="extras"/>
            <div id="textflex">
                <div id="upper">Baggage priority</div>
                <div id="lower">Stop waiting in line!</div>
            </div>
        </div>
        <div class="contbox" id="contservices">
            <img src="../icons-images/svgs/select specs/F1-Icon-44-Sport.svg" id="extras"/>
            <div id="textflex">
                <div id="upper">Sports equipment</div>
                <div id="lower">Travel with sports gear!</div>
            </div>
        </div>
        <div class="contbox" id="contservices">
            <img src="../icons-images/svgs/select specs/F1-133-Priority-Notification.svg" id="extras"/>
            <div id="textflex">
                <div id="upper">Priority notification</div>
                <div id="lower">Find out first!</div>
            </div>
        </div>
        <div class="contbox" id="contservices">
            <img src="../icons-images/svgs/select specs/F1-133-online-Check-up.svg" id="extras"/>
            <div id="textflex">
                <div id="upper">Automated check-in</div>
                <div id="lower">Automatically check-in!</div>
            </div>
        </div>
        <div class="contbox" id="contservices">
            <img src="../icons-images/svgs/select specs/F1-72-On-time-Guarantee.svg" id="extras"/>
            <div id="textflex">
                <div id="upper">On-time guarantee</div>
                <div id="lower">Delayed flight or cancelled flight?</div>
            </div>
        </div>
        <div class="contbox" id="contservices">
            <img src="../icons-images/svgs/select specs/F1-Icon-46-Pet.svg" id="extras"/>
            <div id="textflex">
                <div id="upper">Pets on board</div>
                <div id="lower">Bring your pets with you!</div>
            </div>
        </div>
    </form>

    <div class="bottom-menu">
        <div id="bottom-boxes" href="./start.html">Home</div>
        <div id="bottom-boxes" href="./search.html">Book</div>
        <div id="bottom-boxes">Bookings</div>
        <div id="bottom-boxes">More</div>
    </div>

</body>

</html>);}

export default ServiceSelect