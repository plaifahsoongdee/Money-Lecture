import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent({ entries }) {
  const [highlightedDates, setHighlightedDates] = useState([]);

  useEffect(() => {
    const datesWithEntries = entries
      .map(entry => entry.date)
      .filter(date => date)
      .map(date => {
        const d = new Date(date);
        return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
      });

    setHighlightedDates(datesWithEntries);
  }, [entries]);

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
      if (highlightedDates.includes(formattedDate)) {
        return 'highlight';
      }
    }
    return null;
  };

  return (
    <div>
      <Calendar tileClassName={tileClassName} />
    </div>
  );
}

export default CalendarComponent;
