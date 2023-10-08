import React from 'react';
import ErrorContent from '../components/Error';
import useFade from '../utils/hooks/useFade.js';

const Error = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <ErrorContent />
        </div>
    );
}

export default Error;