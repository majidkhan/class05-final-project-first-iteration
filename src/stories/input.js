import React from "react";


import Input from "../components/Input";

import { storiesOf } from "@storybook/react";

storiesOf("Input", module)
  .add("default", () => <Input />)
  .add("with text", () => <Input inputValue="JS" />);
