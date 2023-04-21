import { accentColor, darkAccentColor, fontColor } from '../../constants/colors';
import { checkLeapYear, monthName, weekdayName } from '../../constants/dates';

import Media from './Media';
import styled from 'styled-components';

export default function HomeLoggedIn() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  const daysOfTheMonth = checkLeapYear(month + 1, year);

  function renderCalendar() {
    return daysOfTheMonth.map((day) => {
      const dayOfMonth = day.getDate();
      const isCurrentMonth = day.getMonth() === month;

      console.log(isCurrentMonth);

      if (isCurrentMonth) {
        return (
          <Day key={dayOfMonth}>
            <DayTitle>
              <h1>{dayOfMonth}</h1>
              <h2>{weekdayName(day.getDay())}</h2>
            </DayTitle>
            <DayContent>
              <Media />
            </DayContent>
          </Day>
        );
      } else {
        return <div key={`${dayOfMonth}none`}></div>;
      }
    });
  }

  return (
    <main>
      <h1>{monthName(month)}</h1>
      <Calendar>{renderCalendar()}</Calendar>
    </main>
  );
}

const Calendar = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  color: ${fontColor};
  gap: 10px;
  grid-template-columns: repeat(7, minmax(150px, 1fr));
  grid-template-rows: repeat(6, minmax(300px, 1fr));
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 6px 5px 0 0;
  padding: 1px 1px 6px 1px;
  border-radius: 10px;
  background-color: grey;
  box-shadow: 2px 2px 8px 2px rgba(246, 67, 72, 0.6);
`;

const DayTitle = styled.div`
  display: flex;
  align-items: first baseline;
  width: 100%;
  height: 2.5rem;
  padding: 0.1rem;
  border-radius: 10px 10px 0 0;
  background-color: ${darkAccentColor};
  h1 {
    font-size: 2.1rem;
    font-weight: 700;
    margin-left: 0.4rem;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-left: 0.4rem;
  }
`;

const DayContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
`;
