import React from 'react';

const Button = (props) => {
    //console.log(props);
    const {children} = props;
    return (
        <div  className='text-center'>
            <button className="btn btn-secondary">{children}</button>
        </div>
    );
};

export default Button;