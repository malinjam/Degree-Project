import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Start from '../views/start.js'
import Search from './views/search.js';
import DateSelect from './views/dateselect.js';
import ServiceSelect from './views/services.js';
import Payment from './views/payment.js';


function App(){
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Start/>}/> 
            <Route path="/search" element={<Search/>}/>
            <Route path="/date" element={<DateSelect/>}/>
            <Route path="/service" element={<ServiceSelect/>}/>
            <Route path="/payment" element={<Payment/>}/>

        </Routes>
    </BrowserRouter>
);

}

export default App;