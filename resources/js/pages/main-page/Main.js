import React, { Component } from "react";
import ReactDOM from "react-dom";
import Profile from '../../components/profile/Profile';

/* An example React component */
class Main extends Component {
    render() {
        return (
            <div className="homePage">
                <header className="homePage__header">
                    <p>
                        <img src="./assert/new.svg"></img>
                        <h5>My Ins</h5>
                    </p>
                    <div>
                        <img src="./assert/home.svg"></img>
                        <img src="./assert/person.svg"></img>
                    </div>
                </header>
                <section className="homePage__body">
                    <Profile />
                </section>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
 */

