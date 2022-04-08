import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Start from '../views/start'
import Search from './views/search';
import DateSelect from './views/dateselect';
import ServiceSelect from './views/services';
import Payment from './views/payment';


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