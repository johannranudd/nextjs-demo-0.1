import Link from 'next/link';
import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import { StyledDiv } from '../../styles/index.styles';
import EventForm from '../../components/events/event-form';
import { useRouter } from 'next/router';

const EventsPage = () => {
  const allEvents = getAllEvents();

  const router = useRouter();
  const searchFn = (year, month) => {
    // console.log(year, month);
    // router.push(year, month);
    const newPath = `/events/${year}/${month}`;
    router.push(newPath);
  };
  return (
    <StyledDiv>
      <section className='section-center'>
        <div className='header-container'>
          <h1>Events</h1>
          <Link href={`/events`}>go to page</Link>
        </div>
        <EventForm searchFn={searchFn} />
        <EventList allEvents={allEvents} />
      </section>
    </StyledDiv>
  );
};

export default EventsPage;
