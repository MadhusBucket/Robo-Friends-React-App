import React from 'react';
import 'tachyons';



const Card = (props) => {
    const {name, email, id} = props;
    return (
      <div className='bg-light-green dib br4 pa3 ma3 grow bw3 shadow-4 tc'>
        <img src={`https://robohash.org/${id}?150*150`} alt="RObOt" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
}

export default Card;