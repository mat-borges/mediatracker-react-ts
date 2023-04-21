import { checkLeapYear, monthName, weekdayName } from '../../constants/dates';

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
              <div>aaaaaaaaaaaaaaaa</div>
              <div>bbbbbbbbbbbbbbbb</div>
              <div>cccccccccccccccc</div>
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
  color: white;
  background-color: black;
  gap: 10px;
  grid-template-columns: repeat(7, minmax(150px, 1fr));
  grid-template-rows: repeat(6, minmax(300px, 1fr));
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1px 1px 6px 1px;
  margin: 6px 5px 0 0;
  border-radius: 10px;
  background-color: grey;
`;

const DayTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 6px;
  border-radius: 10px 10px 0 0;
  background-color: darkgrey;
`;

const DayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 90%;
  div {
    min-height: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
  }
`;
