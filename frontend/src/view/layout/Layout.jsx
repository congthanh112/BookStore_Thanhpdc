import React from "react";
import './layout.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../../routes/Routes'
import Header from "../core/header/Header";
import Navbar from "../core/navbar/Navbar";
import CategoryBar from "../core/categoryBar/CategoryBar";
import Footer from '../core/footer/Footer'
import Profile from "../profile/Profile";

const Layout = (component) => {
    // return (
     
    //     //    <BrowserRouter>
    //     //     <Route>
    //         <div>
    //             <Header />
    //             <div>
    //                 {/* <Routes/> */}
    //             </div>
    //             <Footer />
    //         </div>
    //     //     </Route>
    //     //    </BrowserRouter>
 

    // )

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div>
                    {/* <Sidebar {...props}/> */}
                    <div className="layout__content">
                        <Header />
                        <div className="layout__content-main">
                            <CategoryBar/>
                            <Routes/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout;