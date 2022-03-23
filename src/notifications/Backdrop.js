import React from 'react';

import './Notifications.css';

const Backdrop = (props) => {
    return (
        <div className={'Backdrop ' + (props.backdropState && 'Close')}></div>
    );
}

export default Backdrop;