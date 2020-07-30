import React from 'react';

export default (props: { children: React.ReactNode }) => {
    return (
        <div>
            index
            <div>{props.children}</div>
        </div>
    );
};
