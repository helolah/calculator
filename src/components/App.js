import React from 'react';

import Display from './Display';
import Buttons from './Keypad';
import { Div, Title } from './styles';

export default class App extends React.Component {
    state = {
        result: ''
    };

    clickedBtn = (btnValue) => {
        if (btnValue === "=") {
            this.calculate();
        }

        this.setState({
            result: this.state.result + btnValue
        });
    };

    calculate = () => {
        this.setState({
            result: eval(this.state.result)
        });
    };

    render() {
        return (
            <Div>
                <Title>CALCULADORA</Title>
                <Display result={this.state.result}></Display>
                <Buttons clickedBtn={this.clickedBtn}></Buttons>
            </Div>
        );
    }
}