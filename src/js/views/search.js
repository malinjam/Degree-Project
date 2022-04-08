
const Search = (props) => {

    return (
        <html lang="en">
            <head>
                <title>FLYONE | Search</title>
                <link rel="stylesheet" href="../css/style.css" />
                <script type="" src="../js/main.js"></script>
            </head>

            <body
                style="background-image: url(../icons-images/images/europe-map.svg); background-size: 100vh;background-repeat: no-repeat;">
                <div id="headform">
                    <div class="header" style="position: initial;">
                        <div style="flex:1;margin: 2vw;">Menu</div>
                        <div id="header-center"> <img style="height:10vh;" src="../icons-images/images/flyone-logo.png" /></div>
                        <div style="flex:1;margin: 2vw;">Login</div>
                    </div>

                    <div style="text-align:center; font-family: Rubik; font-size: 30px; color: #FFFF;">
                        <form>
                            Book flight
                            <div id="search-form">
                                <input class="text-input" type="text" placeholder="From" />
                                <input class="text-input" type="text" placeholder="To" />
                                <input class="text-input" type="date" placeholder="Departure date" />
                                <input class="text-input" type="date" placeholder="Return date" />
                                <input class="text-input" type="number" placeholder="Adults" />
                                <input class="text-input" type="text" placeholder="Promo code" />
                            </div>
                            <button class="button-light-blue" type="submit"> Search Flight</button>
                        </form>
                    </div>
                </div>

                <div class="bottom-menu">
                    <a id="bottom-boxes" href="./start.html">Home</a>
                    <a id="bottom-boxes" href="./search.html">Book</a>
                    <a id="bottom-boxes">Bookings</a>
                    <a id="bottom-boxes">More</a>
                </div>
            </body>
        </html>
    );
}

export default Search