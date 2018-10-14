import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Calender from "../components/calendar/Calendar";
import Search from "../components/Search";
import ToggleButton from '../components/ToggleButton';
import SelectBox from '../components/SelectBox';
import DatePicker from '../components/DatePicker';
import { Button } from '@storybook/react/demo';


storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with text 2", () => (
    <Button onClick={action("clicked")}>Search Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Calender", module)
  .add("default", () => <Calender />)
  .add("with JS events", () => (
    <Calender events={[{ name: "JS", dates: [2, 6, 3, 7, 10, 4] }]} />
  ))
  .add("with React events", () => (
    <Calender events={[{ name: "React", dates: [2, 1, 3, 25, 4] }]} />
  ));
storiesOf("Search", module)
  .add("default", () => <Search />)
  .add("with text", () => <Search inputValue="JS" />);

  // storiesOf("Select Box", module)
  // .add("default", ()=> <SelectBox />);
  // storiesOf("Date Picker", module)
  // .add("default", ()=> <DatePicker />);