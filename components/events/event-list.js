import EventItem from './event-item';

const EventList = ({ allEvents }) => {
  return (
    <ul>
      {allEvents.map((item) => {
        return <EventItem key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default EventList;
