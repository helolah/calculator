import React from 'react';

import Display from './Display';
import Buttons from './Keypad';
import { Div, Title } from './styles';

export default class App extends React.Component {
    render() {
        return (
            <Div>
                <Title>CALCULADORA</Title>
                <Display></Display>
                <Buttons></Buttons>
            </Div>
        );
    }
}