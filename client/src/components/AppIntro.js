import React, { Component } from "react";

import Login from "./components/Login";
import ProcessSelection from "./components/ProcessSelection";
import Process1DataEntry from "./components/Process1DataEntry";
// import Process2 from "./components/Process2";
import Measurements from "./components/Measurements";
import SuccessScreen from "./components/SuccessScreen";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

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
        } else if (this.state.currentPage === "ProcessSelection") {
            return <ProcessSelection />;
        } else if (this.state.currentPage === "Process1DataEntry") {
            return <Process1DataEntry />;
        } else if (this.state.currentPage === "Measurements") {
            return <Measurements />;
        } else (this.state.currentPage === "SuccessScreen") {
            return <SuccessScreen />;
        } 
        // else {
        //     return <fourOFour />;
        // }
    };

    render() {
        return (
            <div>
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default AppIntro;
