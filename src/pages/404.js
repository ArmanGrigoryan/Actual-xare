import React from 'react';
import ErrorContent from '../components/Error';
import useFade from '../utils/hooks/useFade.js';
import SEO from '../components/SEO';

const Error = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Էջը չի գտնվել'
                description='Էջը չի գտնվել, փորձեք ավելի ուշ կամ վերադարձեք Ակտուալի գլխավոր էջ:'
            />
            <ErrorContent />
        </div>
    );
}

export default Error;