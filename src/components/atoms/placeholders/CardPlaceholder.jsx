import React from 'react';
import ContentLoader from 'react-content-loader';

const CardPlaceholder = ({...props}) => (
    <ContentLoader 
        speed={2}
        width='99%'
        height='99%'
        backgroundColor='#F2F3F5'
        foregroundColor='#E1E4E8'
        {...props}
    >
        <rect x='0' y='0' width='100%' height='100%' />
    </ContentLoader>
);

export default CardPlaceholder;
 