import React from 'react';
import ErrorContent from '../components/Error';
import useFade from '../utils/hooks/useFade.js';
import SEO from '../components/SEO';

class Error extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ErrorContent />
            </React.Fragment>            
        );
    }
}


export default Error;

