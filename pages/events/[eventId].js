import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import { StyledDiv } from '../../styles/events.styles/events.index';

const EventIdPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const filteredEvents = allEvents.filter((item) => {
    if (item.id === router.query.eventId) {
      return item;
    }
  });
  const { image, title, description, id } = filteredEvents[0];
  return (
    <StyledDiv>
      <section className='section-center'>
        <div className='header-container'>
          <h2>EventIdPage</h2>
          <Link href={`/events/${id}/slug`}>to event ID</Link>
        </div>
        <div className='single-event-container'>
          <img src={`${image}`} alt='' />
          <p>{id}</p>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </section>
    </StyledDiv>
  );
};

export default EventIdPage;
