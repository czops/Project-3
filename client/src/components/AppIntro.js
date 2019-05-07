import React, { Component } from "react";

//these all need routing co
import Login from "./components/Login";
import ProcessSelection from "./components/ProcessSelection";
import Process1DataEntry from "./components/Process1DataEntry";
import Process2DataEntry from "./components/Process2DataEntry";
import Measurements from "./components/Measurements";
import SuccessScreen from "./components/SuccessScreen";

// Navbar should just be imported on each applicable page
//import Navbar from "./components/Navbar";


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
        } else if (this.state.currentPage === "Process2DataEntry") {
            return <Process2DataEntry />;
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
