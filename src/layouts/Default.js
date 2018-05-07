'use strict';

import React from 'react';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';

const DefaultLayout = (props) => {

    return (
        <div className="website--layout">

           	<Header />
            { props.children }
            <Footer/>
        </div>
    );

}

export default DefaultLayout;
