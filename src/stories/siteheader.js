import React from "react";

import { storiesOf } from '@storybook/react';
import SiteHeader from "../components/site-header/SiteHeader";
import { H2 } from "glamorous";

storiesOf("SiteHeader", module)
   .add("Main menu", () => <SiteHeader/>)
   .add("Active Menu", () => (
        <div>
            <h3>Show active menu</h3>
        </div>
   ));
