import EventItem from './event-item';

const EventList = ({ allEvents, handleSingleEvent }) => {
  return (
    <ul>
      {allEvents.map((item) => {
        return (
          <EventItem
            key={item.id}
            {...item}
            handleSingleEvent={handleSingleEvent}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
