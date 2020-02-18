import React from 'react';
import Subject from './Subject';
import SSFooter from './SSFooter';

const BodyWrapper = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const SSBody = ({subjects, ymalProducts}) => {
    return (
        <BodyWrapper>
            <Subject subjects={subjects} ymalProducts={ymalProducts} />
            <SSFooter />
        </BodyWrapper>
    )
}

export default SSBody;