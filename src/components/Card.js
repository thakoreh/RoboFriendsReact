import React from 'react';

const Card = (props) => {

  return (
    <div className='tc bg-light-yellow dib br3 pa3 grow bw2 shadow-3'>
      <img alt='robot' src={`https://robohash.org/${props.id}`} style={{width:200,height:200}}/>
      <div>
        <h2> {props.name} </h2>
         <p> {props.email}</p>
      </div>
    </div>
    );
}

export default Card;
