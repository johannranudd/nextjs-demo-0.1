import React from 'react';
// import { useRouter } from 'next/router';

const EventItem = ({ id, title, date, location, image, handleSingleEvent }) => {
  return (
    <li>
      <img src={image} alt='' />
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{location}</p>
      <button onClick={() => handleSingleEvent(id)}>go to event</button>
    </li>
  );
};

export default EventItem;
