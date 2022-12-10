import React from 'react';

import NavbarComponent from "./Components/UI/NavbarComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import CustomerComponent from "./Components/Customers/CustomerComponent";
import CustomersLogin from "./Components/Customers/CustomersLogin";
import FilmsComponent from "./Components/Fims/FilmsComponent";
import FilmsPage from "./Components/Fims/FilmsPage";
import HallsComponent from "./Components/Halls/HallsComponent"
import PremiersComponent from "./Components/Premieres/PremiersComponent";
import PremiersById from "./Components/Premieres/PremiersById";
function App() {
    // @ts-ignore
    return (
        <div className="App">
            {/*<NavbarComponent/>*/}
            <BrowserRouter>
                <NavbarComponent/>
                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/customers"} element={<CustomerComponent/>}/>
                    <Route path={"/login"} element={<CustomersLogin/>}/>
                    <Route path={"/films"} element={<FilmsPage/>}/>
                    <Route path={"/premieres"} element={<PremiersComponent/>}/>
                    <Route path={"/halls"} element={<HallsComponent/>}/>
                    <Route path={"/premieres/:premieresId"} element={<PremiersById/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
