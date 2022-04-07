import { useRef } from 'react';
import Button from '../ui/Button';
import { StyledDiv } from '../../styles/events.styles/form.styles';

const EventForm = (props) => {
  const { searchFn } = props;

  const yearRef = useRef();
  const monthRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const yearValue = yearRef.current.value;
    const monthValue = monthRef.current.value;
    const yearNum = parseInt(yearValue);
    const monthNum = parseInt(monthValue);

    searchFn(yearNum, monthNum);
  };
  return (
    <StyledDiv>
      <form action='' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='year'>Year</label>
          <select name='year' id='year' ref={yearRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div>
          <label htmlFor='month'>Month</label>
          <select name='month' id='month' ref={monthRef}>
            <option value='1'>jan</option>
            <option value='2'>feb</option>
            <option value='3'>mars</option>
            <option value='4'>april</option>
            <option value='5'>mai</option>
            <option value='6'>juni</option>
            <option value='7'>juli</option>
            <option value='8'>aug</option>
            <option value='9'>sep</option>
            <option value='10'>okt</option>
            <option value='11'>nov</option>
            <option value='12'>des</option>
          </select>
        </div>
        <Button type='submit'>submit</Button>
      </form>
    </StyledDiv>
  );
};

export default EventForm;
