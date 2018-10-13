import React from "react";
import dateFns from "date-fns";

import { storiesOf } from '@storybook/react';
import Calendar from "../components/calendar/Calendar";
import { H2 } from "glamorous";

storiesOf("Calendar", module)
   .add("Default", () => <Calendar/>)
   .add("Week Calendar", () => <WeekCalendar/>)
   .add("Third Way", () => (
        <div>
            <h3>3rd Way</h3>
        </div>
   ));