import React from "react";
import Header from "../core/header/Header";
import Footer from '../core/footer/Footer'
import Profile from "../profile/Profile";

const Layout = (component) => {
    return (
        <div>           
            <Header />   
            <div>{Profile}</div>     
            <Footer />
        </div>
    )
}

export default Layout;