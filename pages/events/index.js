import Link from 'next/link';

const EventsPage = () => {
  return (
    <div>
      <h2>EventsPage</h2>
      <Link href={`/events/randomID`}>to event ID</Link>
    </div>
  );
};

export default EventsPage;
