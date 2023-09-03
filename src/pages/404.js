import React from 'react';
import { Helmet } from 'react-helmet';
import ErrorContent from '../components/Error';
import useFade from '../utils/hooks/useFade.js';

const Error = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <Helmet>
            </Helmet>
            <ErrorContent />
        </div>
    );
}

export default Error;