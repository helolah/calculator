import React from 'react';

import { DisplayStyle } from './styles';

export default class Display extends React.Component {
    render() {
        return (
            <div>
                <DisplayStyle value={this.props.result} placeholder="0" readOnly={true}></DisplayStyle>
            </div>
        );
    }
}