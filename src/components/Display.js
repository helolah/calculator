import React from 'react';

import { DisplayStyle } from './styles';

export default class Display extends React.Component {
    render() {
        return (
            <div>
                <DisplayStyle placeholder="0" readOnly></DisplayStyle>
            </div>
        );
    }
}