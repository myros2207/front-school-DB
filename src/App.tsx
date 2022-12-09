import React from 'react';

import NavbarComponent from "./Components/UI/NavbarComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import CustomerComponent from "./Components/Customers/CustomerComponent";
import CustomersLogin from "./Components/Customers/CustomersLogin";

function App() {
    return (
        <div className="App">
            {/*<NavbarComponent/>*/}
            <BrowserRouter>
                <NavbarComponent/>
                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/customers"} element={<CustomerComponent/>}></Route>
                    <Route path={"/login"} element={<CustomersLogin/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
