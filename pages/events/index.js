import Link from 'next/link';
import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import { StyledDiv } from '../../styles/index.styles';

const EventsPage = () => {
  const allEvents = getAllEvents();
  return (
    <StyledDiv>
      <section className='section-center'>
        <div className='header-container'>
          <h1>Home</h1>
          <Link href={`/events`}>go to page</Link>
        </div>
        <EventList allEvents={allEvents} />
      </section>
    </StyledDiv>
  );
};

export default EventsPage;
