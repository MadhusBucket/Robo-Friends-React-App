import React from 'react';


const Scrolls = (props) => {
    return(
        <div style={{overflowY: 'scroll',border:'1px solid white',}}>
            {props.children}
        </div>
    );
}


export default Scrolls;
