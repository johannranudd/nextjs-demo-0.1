import EventItem from './event-item';
import Link from 'next/link';

const EventList = ({ allEvents }) => {
  if (allEvents.length === 0)
    return (
      <div className='center-me'>
        <h1>No events matches your search</h1>
        <Link href={`/events`}>back</Link>
      </div>
    );
  return (
    <ul>
      {allEvents.map((item) => {
        return <EventItem key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default EventList;
