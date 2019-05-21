import React, { Component } from "react";
// import React from "react";

import Login from "../pages/Login/Login";
import Measurements from "../pages/Measurements/Measurements";
import NavbarComponent from "../components/navbar/Navbar";
// import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound/NotFound";
// import Process1 from "../pages/Process1/Process1";
// import Process2 from "../pages/Process2/Process2";
import Success from "../pages/Success/Success";

class AppIntro extends Component {


    state = {
        currentPage: "Login"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Login") {
            return <Login />;
            // } else if (this.state.currentPage === "LandingPage") {
            //     return <LandingPage />;
        } else if (this.state.currentPage === "Measurements") {
            return <Measurements />;
            // } else if (this.state.currentPage === "Process1") {
            //     return <Process1 />;
            // } else if (this.state.currentPage === "Process2") {
            //     return <Process2 />;
        } else if (this.state.currentPage === "Measurements") {
            return <Measurements />
        } else if (this.state.currentPage === "Success") {
            return <Success />;
        } else {
            return <NotFound />;
        };

    };

    render() {
        return (
            <div>
                {/* <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                /> */}
                <NavbarComponent />
                {this.renderPage()}
            </div>
        );
    }
}

export default AppIntro;
