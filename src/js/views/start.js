
const Start = (props) => {

    return (
        <html lang="en">
            <head>
                <title>FLYONE | Home</title>
                <link rel="stylesheet" href="../css/style.css" />
                <script type="" src="../js/main.js"></script>
            </head>

            <body>
                <div class="header">
                    <div style="flex:1;margin: 2vw;">Menu</div>
                    <div id="header-center"> <img style="height:10vh;" src="../icons-images/images/flyone-logo.png" /></div>
                    <div style="flex:1;margin: 2vw;">Login</div>
                </div>

                <div class="content">
                    <div style="flex:2.5;" id="circle-start">
                        <div class="circle-load"></div>
                        <div class="circle-load"></div>
                        <div class="circle-load"></div>
                        <div class="circle-load"></div>
                        <div class="circle-load"></div>
                    </div>
                    <div class="rectangle-load" style="align-self: center;"></div>
                    <div style="flex:2;" id="title-start">Forgot something?</div>
                    <div id="forgot-start" style="flex:3;">
                        <div class="rectangle-clickable" id="forgot-start"> <img style="height: 150px; width:150px; padding: 1em;"
                            src="../icons-images/svgs/loader icon/loader-type1-2.svg" />Check-in</div>
                        <div class="rectangle-clickable" id="forgot-start"> <img src="" />Add services</div>
                    </div>
                    <div id="title-start" style="padding: 10px;flex:20;">Destinations from [location]</div>
                    <div class="rectangle-load"></div>
                    <div class="rectangle-load"></div>
                </div>

                <div class="bottom-menu">
                    <a id="bottom-boxes" href="./start.html">Home</a>
                    <a id="bottom-boxes" href="./search.html">Book</a>
                    <a id="bottom-boxes">Bookings</a>
                    <a id="bottom-boxes">More</a>
                </div>
            </body>
        </html>)
}

export default Start