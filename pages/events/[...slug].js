import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import { StyledDiv } from '../../styles/events.styles/events.index';

const SlugComponent = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const slug = router.query.slug;
  const yearSlug = parseInt(slug[0]);
  const monthSlug = parseInt(slug[1]);

  const filteredByDate = allEvents.filter((item) => {
    const objectYear = parseInt(item.date.split('-')[0]);
    const objectMonth = parseInt(item.date.split('-')[1]);
    if (objectYear === yearSlug && objectMonth === monthSlug) {
      return item;
    }
  });

  return (
    <StyledDiv>
      <section className='section-center'>
        <EventList allEvents={filteredByDate} />
      </section>
    </StyledDiv>
  );
};

export default SlugComponent;
