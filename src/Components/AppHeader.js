import React, { Component } from 'react';
import MainInput from './MainInput';

class AppHeader extends Component {
    render() {
        return(
            <div className="AppHeader">
                <MainInput />
            </div>
        );
    }
}

export default AppHeader;