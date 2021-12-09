import React from 'react';
import Header from './Header';
function Base(props) {
    return (
        <div id="baseApp">
            <Header></Header>
            {props.children}
        </div>
    );
}

export default Base;