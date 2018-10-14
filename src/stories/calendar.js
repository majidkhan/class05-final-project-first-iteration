import React from "react";
import dateFns from "date-fns";

import { storiesOf } from '@storybook/react';
import Calendar from "../components/calendar/Calendar";
import { H2 } from "glamorous";

storiesOf("Calendar", module)
.add("default", () => <Calender />)
.add("with JS events", () => (
  <Calender events={[{ name: "JS", dates: [2, 6, 3, 7, 10, 4] }]} />  ))
.add("with React events", () => (
  <Calender events={[{ name: "React", dates: [2, 1, 3, 25, 4] }]} />
));