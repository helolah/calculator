import React from 'react';

import Display from './Display';
import Buttons from './Keypad';
import { Div } from './styles';
import '../index.css';

export default class App extends React.Component {
    state = {
        result: ''
    };

    clickedBtn = (btnValue) => {
        if (btnValue === "=") {
            this.calculate();
        } else {
            this.setState({
                result: this.state.result + btnValue
            });
        }

        if (btnValue === "C") {
            this.setState({
                result: ""
            });
        }
    };

    calculate = () => {
        try {
            this.setState({
                result: eval(this.state.result)
            });
        } catch (e) {
            this.setState({
                result: "Error"
            });
        }
    };

    render() {
        return (
            <div className="container">
                <Div>
                    <Display result={this.state.result}></Display>
                    <br></br>
                    <Buttons clickedBtn={this.clickedBtn}></Buttons>
                </Div>
            </div>
        );
    }
}