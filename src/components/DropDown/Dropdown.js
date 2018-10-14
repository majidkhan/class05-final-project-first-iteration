import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class DropdownPage extends React.Component {
    render() {
        return (
            <Dropdown>
                <DropdownToggle caret color="primary">
                    Dropdown
        </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href="#">Internship</DropdownItem>
                    <DropdownItem href="#">Events</DropdownItem>
                    <DropdownItem href="#">Mentors</DropdownItem>
                    <DropdownItem href="#">Networking</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default DropdownPage;