import React from 'react';

import { Button } from './styles';

export default class Keypad extends React.Component {
    clickedBtn = e => {
        this.props.clickedBtn(e.target.value);
    };

    render() {
        return (
            <div>
                <div>
                    <Button onClick={this.clickedBtn} value="C">C</Button>
                    <Button onClick={this.clickedBtn} value="/">/</Button>
                    <Button onClick={this.clickedBtn} value="*">*</Button>
                    <Button onClick={this.clickedBtn} value="-">-</Button>
                </div>
                <div>
                    <Button onClick={this.clickedBtn} value="7">7</Button>
                    <Button onClick={this.clickedBtn} value="8">8</Button>
                    <Button onClick={this.clickedBtn} value="9">9</Button>
                    <Button onClick={this.clickedBtn} value="+">+</Button>
                </div>
                <div>
                    <Button onClick={this.clickedBtn} value="4">4</Button>
                    <Button onClick={this.clickedBtn} value="5">5</Button>
                    <Button onClick={this.clickedBtn} value="6">6</Button>
                    <Button onClick={this.clickedBtn} value=".">.</Button>
                </div>
                <div>
                    <Button onClick={this.clickedBtn} value="1">1</Button>
                    <Button onClick={this.clickedBtn} value="2">2</Button>
                    <Button onClick={this.clickedBtn} value="3">3</Button>
                    <Button onClick={this.clickedBtn} value="=">=</Button>
                </div>
            </div>
        );
    }
}