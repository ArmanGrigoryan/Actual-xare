import React from 'react';
import { Helmet } from 'react-helmet';
import ErrorContent from '../components/Error';
import favIcon from '../assets/img/fav-orange.png';

const Error = () => {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <ErrorContent />
        </React.Fragment>            
    );
}

export default Error;