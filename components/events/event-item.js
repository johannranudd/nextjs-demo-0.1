import React from 'react';
import Button from '../ui/Button';
// import { useRouter } from 'next/router';

const EventItem = ({ id, title, date, location, image }) => {
  return (
    <li>
      <img src={image} alt='' />
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{location}</p>
      <Button link={`/events/${id}`}>go to</Button>
    </li>
  );
};

export default EventItem;
