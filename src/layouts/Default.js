'use strict';

import React from 'react';
import Header from 'app/components/Header';


const DefaultLayout = (props) => {

    return (
        <div className="website--layout">

           	<Header />
            { props.children }

        </div>
    );

}

export default DefaultLayout;
