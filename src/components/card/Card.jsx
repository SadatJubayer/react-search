import React from "react";

import "./style.css";

export default function Card(props) {
  return (
    <div className='card-container'>
      <img
        // src={`https://robohash.org/${props.monster.id}?set=set2&size=180*180`}
        src={`https://api.adorable.io/avatars/280/${props.monster.id}.png`}
        alt='monster'
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
}
