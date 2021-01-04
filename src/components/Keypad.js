import React from 'react';

import { Button } from './styles';

export default class Keypad extends React.Component {
    render() {
        return (
            <div>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
            </div>
        );
    }
}