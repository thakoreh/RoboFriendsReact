import React from 'react';

const Card = (props) => {

  return (
    <div className='tc bg-light-green dib br3 pa3 grow bw2 shadow-5'>
      <img alt='robot' src={`https://robohash.org/${props.id}?150x150`}/>
      <div>
        <h2> {props.name} </h2>
         <p> {props.email}</p>
      </div>
    </div>
    );
}

export default Card;