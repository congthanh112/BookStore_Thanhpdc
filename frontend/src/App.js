import { useState, useEffect } from "react";
//import firebase from "firebase";
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "../src/view/layout/Layout";
import axios from "axios";
import axiosClient from "../src/config/axiosClient";

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={Layout} />
            </BrowserRouter>
        </div>
    )
}

export default App;
