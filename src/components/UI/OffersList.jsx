import React from 'react';
import OfferCard from './OfferCard';

const OffersList = ({ data }) => {
    return (
        <>
            {data?.map(item => (
                    <OfferCard item={item} />
                ))}
       </>
    );
};

export default OffersList;
