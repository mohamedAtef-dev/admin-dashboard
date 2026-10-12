import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Paper, Stack } from '@mui/material';
import Header from '../../components/header';

let eventGuid = 0;
function createEventId() {
  return String(eventGuid++);
}

export default function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleDateSelect(selectInfo: any) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEventClick(clickInfo: any) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEvents(events: any) {
    setCurrentEvents(events);
  }

  return (
    <Box sx={{ m: "20px" }}>

      <Header title={'Calender'} subTitle={'Frequently Asked Questions Page'} />


      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        <Paper sx={{ p: 2, minWidth: '250px', borderRadius: 2 }}>


          <h3 style={{ marginTop: "20px", textAlign: 'center' }}>All Events ({currentEvents.length})</h3>
          <ul style={{ paddingLeft: "20px" }}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {currentEvents.map((event: any) => (
              <li key={event.id}>
                <b>{event.startStr}</b>: <i>{event.title}</i>
              </li>
            ))}
          </ul>
        </Paper>

        <Paper sx={{ p: 2, flexGrow: 1, borderRadius: 2 }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
            height="75vh"
          />
        </Paper>
      </Stack>
    </Box>
  );
}