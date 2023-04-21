import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { accentColor, darkAccentColor, fontColor } from '../../constants/colors';
import { checkLeapYear, monthName, weekdayName } from '../../constants/dates';

import Media from './Media';
import styled from 'styled-components';
import { useState } from 'react';

export default function HomeLoggedIn() {
  const [date, setDate] = useState({
    fullDate: new Date(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    daysOfTheMonth: checkLeapYear(new Date().getMonth() + 1, new Date().getFullYear()),
  });

  function handlePrevMonth() {
    setDate((prevDate) => {
      const prevMonth = prevDate.month - 1;
      const prevYear = prevMonth < 0 ? prevDate.year - 1 : prevDate.year;
      const daysOfTheMonth = checkLeapYear(prevMonth + 1, prevYear);
      return { ...prevDate, month: prevMonth, year: prevYear, daysOfTheMonth };
    });
  }

  function handleNextMonth() {
    setDate((prevDate) => {
      const nextMonth = prevDate.month + 1;
      const nextYear = nextMonth > 11 ? prevDate.year + 1 : prevDate.year;
      const daysOfTheMonth = checkLeapYear(nextMonth + 1, nextYear);
      console.log(daysOfTheMonth);
      return { ...prevDate, month: nextMonth, year: nextYear, daysOfTheMonth };
    });
  }

  function renderCalendar() {
    return date.daysOfTheMonth.map((day) => {
      const dayOfMonth = day.getDate();
      const isCurrentMonth = day.getMonth() === date.month;

      if (isCurrentMonth) {
        return (
          <Day key={dayOfMonth}>
            <DayTitle>
              <h1>{dayOfMonth}</h1>
              <h2>{weekdayName(day.getDay())}</h2>
            </DayTitle>
            <DayContent>
              <Media />
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
      <Title>
        <FaArrowLeft size={'1.8rem'} cursor={'pointer'} onClick={handlePrevMonth} />
        <h1>{monthName(date.month)}</h1>
        <FaArrowRight size={'1.8rem'} cursor={'pointer'} onClick={handleNextMonth} />
      </Title>
      <Calendar>{renderCalendar()}</Calendar>
      <Title>
        <FaArrowLeft size={'1.8rem'} cursor={'pointer'} />
        <h1>{monthName(date.month)}</h1>
        <FaArrowRight size={'1.8rem'} cursor={'pointer'} />
      </Title>
    </main>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;

  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0 3rem;
  }
`;

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
