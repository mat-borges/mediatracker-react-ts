function checkLeapYear(month: number, year: number = new Date().getFullYear()) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const lastDayOfMonth = new Date(year, month - 1, daysInMonth).getDay();

  const daysBefore = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;
  const daysAfter = lastDayOfMonth === 0 ? 0 : 7 - lastDayOfMonth;

  const numDays = daysBefore + daysInMonth + daysAfter;
  const firstDate = new Date(year, month - 1, 1 - daysBefore);
  const dates = Array.from({ length: numDays }, (_, i) => new Date(firstDate.getTime() + i * 24 * 60 * 60 * 1000));
  return dates;
}

function weekdayName(weekday: number) {
  switch (weekday) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda-Feira';
    case 2:
      return 'Terça-Feira';
    case 3:
      return 'Quarta-Feira';
    case 4:
      return 'Quinta-Feira';
    case 5:
      return 'Sexta-Feira';
    case 6:
      return 'Sábado';
    default:
      return '';
  }
}

function monthName(month: number) {
  switch (month) {
    case 0:
      return 'Janeiro';
    case 1:
      return 'Fevereiro';
    case 2:
      return 'Março';
    case 3:
      return 'Abril';
    case 4:
      return 'Maio';
    case 5:
      return 'Junho';
    case 6:
      return 'Julho';
    case 7:
      return 'Agosto';
    case 8:
      return 'Setembro';
    case 9:
      return 'Outubro';
    case 10:
      return 'Novembro';
    case 11:
      return 'Dezembro';
    default:
      return '';
  }
}

export { checkLeapYear, monthName, weekdayName };
