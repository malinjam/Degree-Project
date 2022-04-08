const Search = (props) => {

    return(
<html lang="en">

<head>
    <title>FLYONE | Payment</title>
    <link rel="stylesheet" href="../css/style.css"/>
    <script type="" src="../js/main.js"></script>
</head>

<body style="margin-bottom: 10%;">
    <div class="header">
        <div style="flex:1;margin: 2vw;">Menu</div>
        <div id="header-center"> <img style="height:10vh;" src="../icons-images/images/flyone-logo.png"/></div>
        <div style="flex:1;margin: 2vw;">Login</div>
    </div>
    <form style="display:flex; flex-direction: column;">
        <h2>Passenger details </h2>
        <h3>Adult 1</h3>
        <div style="display:flex; flex-direction:row;">
            <input class="text-input" style="flex:1;" id="innerbox" type="text" placeholder="First Name"/>
            <input class="text-input" style="flex:1;" id="innerbox" type="text" placeholder="Family Name"/>
        </div>
        <div id="innerbox" style="align-self: center; display: flex;flex-direction: row; padding:1%;">
            <div class="alt1">
                <label for="Female" >
                    <input type="radio" value="Female" name="gender"/>
                    Female
                </label>
            </div>
            <div class="alt1">
                <label for="Male">
                    <input type="radio" value="Male" name="gender"/>
                    Male
                </label>
            </div>
        </div>
        <h2>Payment and Contect details</h2>
        <h3>Contact details</h3>
        <input class="text-input" id="innerbox" style="width:auto;" type="email" placeholder="email address"/>
        <input class="text-input" id="innerbox" style="width:auto;" type="tel" placeholder="Phone Number"/>

        <h3>Payment</h3>
        <input class="text-input" id="innerbox" style="width:auto;" type="number" placeholder="Card number"/>
        <div style="display:flex; flex-direction:row;">
            <input class="text-input" id="innerbox" style="flex:1;" type="text" placeholder="First name"/>
            <input class="text-input" id="innerbox" style="flex:1;" type="text" placeholder="Family name"/>
        </div>
        <div style="display:flex; flex-direction:row;">
            <input class="text-input" id="innerbox" style="flex:1;" type="date" placeholder="expiry"/>
            <input class="text-input" id="innerbox" style="flex:1;" type="number" placeholder="CVV" maxlength="3"
                oninput="javascript: if(this.value.length >this.maxlength){this.value=this.value.slice(0,this.maxlength)}"/>
        </div>
        <div>
            <input type="checkbox" value="terms"/>
            <label for="terms" style="font-family:Rubik; font-size:medium;">By proceeding with this payment I agree to
                FLYONE's <a src="https://flyone.eu/en/How-to-book/Fare-Families">Fare Rules,</a> <a
                    src="https://flyone.eu/en/About-FLYONE/General-Rules-FLYONE-LLC">General Conditions,</a> and <a
                    src="https://flyone.eu/en/Terms-of-Use">Terms and Conditions</a></label>
        </div>
        <div
            style="display: flex; flex-direction: row; background-color: #F7F7FE; padding: 3%; border-top:5px; margin-top: 10px; left:0px;">
            <button
                style="flex:1; font-size: xx-large; padding: 3%; margin: 10px;  border-style: solid; border-color: #E5E5E5; background-color: #FFFFFF; color: #6C737E; border-radius: 5px;">Summary</button>
            <button
                style="flex:1; font-size: xx-large; padding: 3%; margin: 10px; border-radius: 5px; border-color: #13235c;"
                type="submit" class="button-blue">Pay now</button>
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

export default Payment